export const CRIAR_ANUNCTIO_REQUEST = 'CRIAR_ANUNCTIO_REQUEST';
export const CRIAR_ANUNCIO_SUCCESS = 'CRIAR_ANUNCIO_SUCCESS';
export const CRIAR_ANUNCIO_FAILURE = 'CRIAR_ANUNCIO_FAILURE';

export const criarAnuncioRequest = (anuncio, navigation) => ({
    type: CRIAR_ANUNCTIO_REQUEST,
    payload: {anuncio, navigation}
});

export const criarAnuncioSuccess = (anuncio, navigation) => ({
    type: CRIAR_ANUNCIO_SUCCESS,
    payload: { anuncio, navigation }
});

export const criarAnuncioFailure = (error) => ({
    type: CRIAR_ANUNCIO_FAILURE,
    payload: { error }
})