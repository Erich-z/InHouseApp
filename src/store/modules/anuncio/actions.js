export const LISTAR_ANUNCIO_REQUEST = 'LISTAR_ANUNCIO_REQUEST';
export const LISTAR_ANUNCIO_SUCCESS = 'LISTAR_ANUNCIO_SUCCESS';
export const LISTAR_ANUNCIO_FAILURE = 'LISTAR_ANUNCIO_FAILURE';
export const LISTAR_ANUNCIOUSUARIO_REQUEST = 'LISTAR_ANUNCIOUSUARIO_REQUEST';
export const LISTAR_ANUNCIOUSUARIO_SUCCESS = 'LISTAR_ANUNCIOUSUARIO_SUCCESS';
export const LISTAR_ANUNCIOUSUARIO_FAILURE = 'LISTAR_ANUNCIOUSUARIO_FAILURE';


export const SHOW_ANUNCIO_REQUEST = 'SHOW_ANUNCIO_REQUEST';
export const SHOW_ANUNCIO_SUCCESS = 'SHOW_ANUNCIO_SUCCESS';
export const SHOW_ANUNCIO_FAILURE = 'SHOW_ANUNCIO_FAILURE';


export const CRIAR_ANUNCIO_REQUEST = 'CRIAR_ANUNCIO_REQUEST';
export const CRIAR_ANUNCIO_SUCCESS = 'CRIAR_ANUNCIO_SUCCESS';
export const CRIAR_ANUNCIO_FAILURE = 'CRIAR_ANUNCIO_FAILURE';


export const UPDATE_ANUNCIO_REQUEST = 'UPDATE_ANUNCIO_REQUEST';
export const UPDATE_ANUNCIO_SUCCESS = 'UPDATE_ANUNCIO_SUCCESS';
export const UPDATE_ANUNCIO_FAILURE = 'UPDATE_ANUNCIO_FAILURE';


export const DELETE_ANUNCIO_REQUEST = 'DELETE_ANUNCIO_REQUEST';
export const DELETE_ANUNCIO_SUCCESS = 'DELETE_ANUNCIO_SUCCESS';
export const DELETE_ANUNCIO_FAILURE = 'DELETE_ANUNCIO_FAILURE';

export const criarAnuncioRequest = anuncio => ({
  type: CRIAR_ANUNCIO_REQUEST,
  payload: {anuncio},

});

export const criarAnuncioSuccess = anuncio => ({
  type: CRIAR_ANUNCIO_SUCCESS,
  payload: {anuncio},

});

export const criarAnuncioFailure = error => ({
  type: CRIAR_ANUNCIO_FAILURE,
  payload: {error},

});

export const listarAnuncioRequest = () => ({
  type: LISTAR_ANUNCIO_REQUEST,
});

export const listarAnuncioSuccess = anuncio => ({
  type: LISTAR_ANUNCIO_SUCCESS,
  payload: {anuncio},
});

export const listarAnunciofaFailure = error => ({
  type: LISTAR_ANUNCIO_FAILURE,
  payload: {error},
});
export const listarAnuncioUsuarioRequest = () => ({
  type: LISTAR_ANUNCIOUSUARIO_REQUEST,
});

export const listarAnuncioUsuarioSuccess = anuncio => ({
  type: LISTAR_ANUNCIOUSUARIO_SUCCESS,
  payload: {anuncio},
});

export const listarAnuncioUsuariofaFailure = error => ({
  type: LISTAR_ANUNCIOUSUARIO_FAILURE,
  payload: {error},
});

export const updateAnuncioRequest = (id, anuncio) => ({
  type: UPDATE_ANUNCIO_REQUEST,
  payload: {id, anuncio},
});

export const updateAnuncioSuccess = anuncio => ({
  type: UPDATE_ANUNCIO_SUCCESS,
  payload: {anuncio},
});

export const updateAnuncioFailure = error => ({
  type: UPDATE_ANUNCIO_FAILURE,
  payload: {error},
});

export const deleteAnuncioRequest = id => ({
  type: DELETE_ANUNCIO_REQUEST,
  payload: {id},
});

export const deleteAnuncioSuccess = (id) => ({
  type: DELETE_ANUNCIO_SUCCESS,
  payload: id
});

export const deleteAnuncioFailure = error => ({
  type: DELETE_ANUNCIO_FAILURE,

  payload: {error},
});
