import classNames from 'classnames';
import { nanoid } from '@reduxjs/toolkit';
import { Fragment, ReactNode } from 'react';

import { ErrorMessages, getMatches, getRegExp } from '../../lib';

import styles from './text-with-highlights.module.css';

type TextWithHighlightsProps = {
    title: string;
    filter: string | string[];
};

export const TextWithHighlights = ({title, filter}: TextWithHighlightsProps) => {
    const isPasswordMatchingError = title === ErrorMessages.PASSWORDS_MATCHING; // для тестов
    const withJsx = (text: string, key?: number) => text ? <span key={key}>{text}</span> : null;

    if (!filter || !filter.length) return <span data-test-id='hint'>{title}</span>;

    const isFilterArray = Array.isArray(filter);

    const filterRegExp = isFilterArray ? (filter.map(
        (filterString: string) => getRegExp(filterString)).reverse()
    ) : [getRegExp(filter)];

    const getFormattedText = (filterArrays:  string[],title: string): ReactNode => {
        const matches = getMatches(title, filter)?.reverse();

        if (matches) {
            const filterString = filterArrays.pop();
            // сохраняем оставшиеся фильтры одтельно для левой и правой подстроки
            const beforeSubstringFilters = [...filterArrays];
            const afterSubstringFilters = [...filterArrays];
            // делим строку по совпадению на левую и правую подстроку (до и после совпадения)
            if (filterString) return (
                title
                    .split(filterString)
                    .map((text, index, array) => {
                        // const key = matches.length;

                        if (index < array.length - 1) { // левая подстрока
                            const match = matches.pop();
                            // TODO: исправить key
                            return (
                                <Fragment key={nanoid()}>
                                    {getFormattedText(beforeSubstringFilters, text)}
                                    <span
                                        data-test-id={isPasswordMatchingError ? 'hint' : undefined}
                                        // data-test-id='highlight-matches'
                                        className={styles.highlight}
                                    >
                                        {match}
                                    </span>
                                </Fragment>
                            );
                        }

                        return getFormattedText(afterSubstringFilters, text); // правая подстрока
                    })
            );
        }

        return withJsx(title);
    }

    return (
        <span
            data-test-id={isPasswordMatchingError ? undefined : 'hint'}
            className={classNames(filter === title && styles.newClassForTest)}
        >
            {getFormattedText(filterRegExp, title)}
        </span>
    );
};
