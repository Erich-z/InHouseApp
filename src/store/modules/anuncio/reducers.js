import { CRIAR_ANUNCIO_FAILURE, CRIAR_ANUNCTIO_REQUEST, CRIAR_ANUNCIO_SUCCESS } from './actions';

const initialState = {
    loading: false,
    token: null,
    error: null
}

const criarAnuncioReducer = (state = initialState, action) => {
    switch (action.type) {
        case CRIAR_ANUNCTIO_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CRIAR_ANUNCIO_SUCCESS:
            action.payload.navigation.navigate('Dashboard');
            return {
                ...state,
                loading: false,
                token: action.payload.anuncio,
                error: null
            };
        case CRIAR_ANUNCIO_FAILURE:
            return {
                loading: false,
                token: null,
                error: action.payload.error
            };
        default:
            return state;
    }
};
export default criarAnuncioReducer;