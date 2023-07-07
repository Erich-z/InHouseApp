import {call, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../../service/api';
import {
  criarUsuarioFailure,
  criarUsuarioSuccess,
  CRIAR_USUARIO_REQUEST,
  UPDATE_USUARIO_REQUEST,
  UPDATE_USUARIO_SUCCESS,
  UPDATE_USUARIO_FAILURE,
} from './actions';

export function* criarUsuario(action) {
  try {
    const response = yield call(() =>
      api.post('/usuarios', action.payload.usuario),
    );
    console.log(response.data);
    yield put(criarUsuarioSuccess(response.data, action.payload.navigation));
  } catch (error) {
    yield put(criarUsuarioFailure(error));
  }
}

function* updateUsuario(action) {
  try {
    console.log(action.payload.id)
    const response = yield call(() =>
      api.put(`/usuarios/${action.payload.id}`, action.payload.usuario),
    );

    const usuario = response.data;

    yield put({type: UPDATE_USUARIO_SUCCESS, payload: usuario});
  } catch (error) {
    yield put({type: UPDATE_USUARIO_FAILURE, payload: error.message});
  }
}

export default all([
    takeLatest(CRIAR_USUARIO_REQUEST, criarUsuario),
    takeLatest(UPDATE_USUARIO_REQUEST, updateUsuario)
]);

