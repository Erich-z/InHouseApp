import { all } from "redux-saga/effects";
import auth from './auth/sagas';
import usuario from './usuario/sagas';
import anuncio from './anuncio/sagas';
import imagem from './Imagem/sagas';
export default function* rootSaga() {
    return yield all([
        auth,
        usuario,
        anuncio,
        imagem
    ]);
}