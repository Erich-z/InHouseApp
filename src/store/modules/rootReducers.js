import { combineReducers } from 'redux';
import auth from './auth/reducers';
import usuario from './usuario/reducers';
import anuncio from './anuncio/reducers';
import imagem from './Imagem/reducers';
export default combineReducers({
    auth,
    usuario,
    anuncio,
    imagem: imagem,
});