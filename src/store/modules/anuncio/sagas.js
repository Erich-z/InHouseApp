import {call, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../../service/api';
import { criarAnuncioFailure, criarAnuncioSuccess, CRIAR_ANUNCIO_REQUEST } from './actions';

export function* criarAnuncio(action) {
    try {
        const response = yield call(() => api.post('/anuncios', action.payload.anuncio));
        // console.log(response.data);
        yield put(criarAnuncioSuccess(response.data, action.payload.navigation));
    } catch (error) {
        yield put(criarAnuncioFailure(error));
    }
}

export default all([
    takeLatest(CRIAR_ANUNCIO_REQUEST, criarAnuncio)
]);