import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { getGenres, setGenres, setGenresError } from '.';
import { GenreType } from '../lib';
import { axiosInstance, BOOKS_API } from '../../../shared/api';
import { ErrorMessages } from '../../../shared/lib';

function* worker() {
    try {
        const { data } = yield call(axiosInstance.get, BOOKS_API.genresURL);

        yield put(setGenres(data as GenreType[]));
    } catch (e) {
        if (axios.isAxiosError(e)) yield put(setGenresError(e.message));
        else yield put(setGenresError(ErrorMessages.FETCHING_GENRES_ERROR));
    }
}

export function* genresWatcher() {
    yield takeLatest(getGenres.type, worker);
}
