// TODO: изменить объекты в соответсвии с данными с сервера
// TODO: удалить testBook
import { BOOK_STATUS } from '../../entities/book-card/lib';
import { testBook } from '../../shared/ui';

type BooksTypes = {
    id: string;
    title: string;
    author: string;
    img: string;
    rating: number | null;
    bookStatus: typeof BOOK_STATUS[keyof typeof BOOK_STATUS];
    buttonText: string;
    genres: string;
    description?: { id: string, text: string }[];
}[];

export const BOOKS: BooksTypes = [
    {
        id: '0',
        title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
        author: 'Адитья Бхаргава, 2019',
        img: testBook,
        rating: 4,
        bookStatus: 'available',
        buttonText: 'забронировать',
        genres: 'Комптютерная литература',
        description: [
            {id: '0', text: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких
            задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится
            в глубокую философию гениального Кнута, изучить многостраничные фолианты с
            доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?`
            },
            {id: '1', text: `Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы —
            это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`
            }
        ],
    },
    {
        id: '1',
        title: 'Программирование на JAVA',
        author: 'Патрик Нимейер, Дэниэл Леук, 2013',
        img: testBook,
        rating: 4,
        bookStatus: 'available',
        buttonText: 'забронировать',
        genres: 'Комптютерная литература',
        description: [
            {id: '0', text: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких
            задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится
            в глубокую философию гениального Кнута, изучить многостраничные фолианты с
            доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?`
            },
            {id: '1', text: `Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы —
            это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`
            }
        ],
    },
    {
        id: '2',
        title: 'Как создать сайт. Комикс-путеводитель по HTML, CSS и WordPress',
        author: 'Джи Ким, Нейт Купер, 2019',
        img: '',
        rating: null,
        bookStatus: 'available',
        buttonText: 'забронировать',
        genres: 'Комптютерная литература',
        description: [
            {id: '0', text: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких
            задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится
            в глубокую философию гениального Кнута, изучить многостраничные фолианты с
            доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?`
            },
            {id: '1', text: `Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы —
            это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`
            }
        ],
    },
    {
        id: '3',
        title: 'HTML5 и CSS3. Разработка сайтов для любых браузеров и устройств',
        author: 'Бен Фрейн, 2014',
        img: '',
        rating: null,
        bookStatus: 'added',
        buttonText: 'забронирована',
        genres: 'Комптютерная литература',
        description: [
            {id: '0', text: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких
            задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится
            в глубокую философию гениального Кнута, изучить многостраничные фолианты с
            доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?`
            },
            {id: '1', text: `Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы —
            это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`
            }
        ],
    },
    {
        id: '4',
        title: 'Adobe Flash. Создание аркад, головоломок и других игр с помощью ActionScript',
        author: 'Гэри Розенцвейг, 2009',
        img: '',
        rating: null,
        bookStatus: 'reserved',
        buttonText: 'занята до 23.04',
        genres: 'Комптютерная литература',
        description: [
            {id: '0', text: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких
            задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится
            в глубокую философию гениального Кнута, изучить многостраничные фолианты с
            доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?`
            },
            {id: '1', text: `Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы —
            это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`
            }
        ],
    },
    {
        id: '5',
        title: 'Грокаем алгоритмы. Иллюстрированное ',
        author: '2013',
        img: '',
        rating: 4,
        bookStatus: 'available',
        buttonText: 'забронировать',
        genres: 'Комптютерная литература',
        description: [
            {id: '0', text: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких
            задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится
            в глубокую философию гениального Кнута, изучить многостраничные фолианты с
            доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?`
            },
            {id: '1', text: `Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы —
            это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`
            }
        ],
    },
    {
        id: '6',
        title: 'HTML5. Разработка приложений для мобильных устройств',
        author: 'Эстель Вейл, 2015',
        img: '',
        rating: 4,
        bookStatus: 'available',
        buttonText: 'забронировать',
        genres: 'Комптютерная литература',
        description: [
            {id: '0', text: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких
            задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится
            в глубокую философию гениального Кнута, изучить многостраничные фолианты с
            доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?`
            },
            {id: '1', text: `Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы —
            это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`
            }
        ],
    },
    {
        id: '7',
        title: 'Быстро и легко создаем, программируем и раскручиваем',
        author: 'Олег Поломошнов, 2011',
        img: '',
        rating: 4,
        bookStatus: 'available',
        buttonText: 'забронировать',
        genres: 'Комптютерная литература',
        description: [
            {id: '0', text: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких
            задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится
            в глубокую философию гениального Кнута, изучить многостраничные фолианты с
            доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?`
            },
            {id: '1', text: `Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы —
            это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`
            }
        ],
    },
    {
        id: '8',
        title: 'Грокаем алгоритмы. Иллюстрированное ',
        author: 'Борис Пахомов, 2014',
        img: testBook,
        rating: 4,
        bookStatus: 'available',
        buttonText: 'забронировать',
        genres: 'Комптютерная литература',
        description: [
            {id: '0', text: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких
            задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится
            в глубокую философию гениального Кнута, изучить многостраничные фолианты с
            доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?`
            },
            {id: '1', text: `Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы —
            это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`
            }
        ],
    },
    {
        id: '9',
        title: 'HTML5 и CSS3. Разработка сайтов для любых браузеров и устройств',
        author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
        img: '',
        rating: 4,
        bookStatus: 'reserved',
        buttonText: 'занята до 23.04',
        genres: 'Комптютерная литература',
        description: [
            {id: '0', text: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких
            задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится
            в глубокую философию гениального Кнута, изучить многостраничные фолианты с
            доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?`
            },
            {id: '1', text: `Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы —
            это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`
            }
        ],
    },
    {
        id: '10',
        title: 'HTML5 и CSS3. Разработка сайтов для любых браузеров и устройств',
        author: 'Бен Фрейн, 2014',
        img: testBook,
        rating: 4,
        bookStatus: 'available',
        buttonText: 'забронировать',
        genres: 'Комптютерная литература',
        description: [
            {id: '0', text: `Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких
            задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится
            в глубокую философию гениального Кнута, изучить многостраничные фолианты с
            доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?`
            },
            {id: '1', text: `Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы —
            это просто. А грокать алгоритмы — это веселое и увлекательное занятие.`
            }
        ],
    },
]
