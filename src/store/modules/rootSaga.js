import { all } from "redux-saga/effects";
import auth from './auth/sagas';
import usuario from './usuario/sagas';

import anuncio from './anuncio/sagas'
export default function* rootSaga() {
    return yield all([
        auth,
        usuario,
        anuncio
        
    ]);
}