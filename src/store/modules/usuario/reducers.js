import { CRIAR_USUARIO_FAILURE, CRIAR_USUARIO_REQUEST, CRIAR_USUARIO_SUCCESS, UPDATE_USUARIO_REQUEST, UPDATE_USUARIO_SUCCESS,UPDATE_USUARIO_FAILURE, SET_USUARIO } from './actions';

const initialState = {
    loading: false,
    usuario: null,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CRIAR_USUARIO_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
            case SET_USUARIO:
        case CRIAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                usuario: action.payload.usuario,
                error: null
            };
        case UPDATE_USUARIO_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case UPDATE_USUARIO_SUCCESS:
          state.usuario = action.payload;
         return {
           ...state,
          loading: false,
          usuario: {...state.usuario},
          error: '',
        };
        case CRIAR_USUARIO_FAILURE:
        case UPDATE_USUARIO_FAILURE:
            return {
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
};
export default authReducer;