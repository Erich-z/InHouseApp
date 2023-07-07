export const CRIAR_USUARIO_REQUEST = 'CRIAR_USUARIO_REQUEST';
export const CRIAR_USUARIO_SUCCESS = 'CRIAR_USUARIO_SUCCESS';
export const CRIAR_USUARIO_FAILURE = 'CRIAR_USUARIO_FAILURE';

export const UPDATE_USUARIO_REQUEST = 'UPDATE_USUARIO_REQUEST';
export const UPDATE_USUARIO_SUCCESS = 'UPDATE_USUARIO_SUCCESS';
export const UPDATE_USUARIO_FAILURE = 'UPDATE_USUARIO_FAILURE';
export const SET_USUARIO = 'SET_USUARIO';

export const criarUsuarioRequest = (usuario) => ({
  type: CRIAR_USUARIO_REQUEST,
  payload: {usuario},
});

export const criarUsuarioSuccess = (usuario) => ({
  type: CRIAR_USUARIO_SUCCESS,
  payload: {usuario},
});

export const criarUsuarioFailure = error => ({
  type: CRIAR_USUARIO_FAILURE,
  payload: {error},
});

export const setUsuario = usuario => ({
  type: SET_USUARIO,
  payload: {usuario},
});

export const updateUsuarioRequest = (id, usuario) => ({
  type: UPDATE_USUARIO_REQUEST,

  payload: {id, usuario},
});

export const updateUsuarioSuccess = usuario => ({
  type: UPDATE_USUARIO_SUCCESS,

  payload: {usuario},
});

export const updateUsuarioFailure = error => ({
  type: UPDATE_USUARIO_FAILURE,

  payload: {error},
});
