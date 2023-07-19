import {call, put, all, takeLatest, select, delay} from 'redux-saga/effects';
import api from '../../../../service/api'; 
import {
    CRIAR_ANUNCIO_REQUEST,
    CRIAR_ANUNCIO_SUCCESS,
    CRIAR_ANUNCIO_FAILURE,
    SHOW_ANUNCIO_REQUEST,
    SHOW_ANUNCIO_SUCCESS,
    SHOW_ANUNCIO_FAILURE,
    LISTAR_ANUNCIO_REQUEST,
    LISTAR_ANUNCIO_SUCCESS,
    LISTAR_ANUNCIO_FAILURE,
    UPDATE_ANUNCIO_REQUEST,
    UPDATE_ANUNCIO_SUCCESS,
    UPDATE_ANUNCIO_FAILURE,
    DELETE_ANUNCIO_REQUEST,
    DELETE_ANUNCIO_SUCCESS,
    DELETE_ANUNCIO_FAILURE,
    LISTAR_ANUNCIOUSUARIO_REQUEST,
    LISTAR_ANUNCIOUSUARIO_SUCCESS,
    LISTAR_ANUNCIOUSUARIO_FAILURE,
} from './actions';

function* listarAnuncioUsuario(action) {
  try {
    const state = yield select();
    const usuarioId = state.usuario.usuario.id;
    console.log(usuarioId);
    const response = yield call(() =>
      api.get(`/anuncios/usuario/${usuarioId}`),
    );

    const anuncio = response.data;

    //alert(anuncio); 

    yield put({type: LISTAR_ANUNCIOUSUARIO_SUCCESS, payload: anuncio});
  } catch (error) {
    yield put({type: LISTAR_ANUNCIOUSUARIO_FAILURE, payload: error.message});
  }
}

function* listarAnuncio(action) {
  try {
    const response = yield call(() =>
      api.get(`/anuncios`),
    );

    const anuncio = response.data;

    // alert('anuncio');

    yield put({type: LISTAR_ANUNCIO_SUCCESS, payload: anuncio});
  } catch (error) {
    // alert('anuncio');
    yield put({type: LISTAR_ANUNCIO_FAILURE, payload: error.message});
  }
}

function* showAnuncio(action) {
  try {
    const response = yield call(() => api.get(`/anuncios/${action.payload}`));

    const anuncio = response.data;

    yield put({type: SHOW_ANUNCIO_SUCCESS, payload: anuncio});
  } catch (error) {
    yield put({type: SHOW_ANUNCIO_FAILURE, payload: error.message});
  }
}

// add empresa

function* criarAnuncio(action) {
  try {
    const response = yield call(() =>
      api.post(`/anuncios`, action.payload.anuncio),
    );

    const anuncio = response.data;
    yield put({type: CRIAR_ANUNCIO_SUCCESS, payload: anuncio});
  } catch (error) {

    alert('error')
    yield put({type: CRIAR_ANUNCIO_FAILURE, payload: error.message});
  }
}

// update empresa

function* updateAnuncio(action) {
  try {
    const response = yield call(() =>
      api.put(`/anuncios/${action.payload.id}`, action.payload.anuncio),
      console.log('MATHEUS')
    );

    const anuncio = response.data;

    yield put({type: UPDATE_ANUNCIO_SUCCESS, payload: anuncio});
  } catch (error) {
    console.log(error)
    yield put({type: UPDATE_ANUNCIO_FAILURE, payload: error.message});
  }
}

// delete empresa

function* deleteAnuncio(action) {
  try {
    yield call(() => api.delete(`/anuncios/${action.payload.id}`));

    yield put({type: DELETE_ANUNCIO_SUCCESS, payload: action.payload});
  } catch (error) {
    yield put({type: DELETE_ANUNCIO_FAILURE, payload: error.message});
  }
}

export default all([
  takeLatest(DELETE_ANUNCIO_REQUEST, deleteAnuncio),

  takeLatest(UPDATE_ANUNCIO_REQUEST, updateAnuncio),

  takeLatest(CRIAR_ANUNCIO_REQUEST, criarAnuncio),

  takeLatest(SHOW_ANUNCIO_REQUEST, showAnuncio),

  takeLatest(LISTAR_ANUNCIO_REQUEST, listarAnuncio),
  takeLatest(LISTAR_ANUNCIOUSUARIO_REQUEST, listarAnuncioUsuario),
]);
