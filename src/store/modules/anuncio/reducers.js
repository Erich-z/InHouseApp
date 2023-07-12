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

const initialState = {
  loading: false,
  anuncio: null,
  anuncios: [],
  error: null,
};

const anuncioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ANUNCIO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SHOW_ANUNCIO_SUCCESS:
      return {
        ...state,
        anuncio: action.payload,
        loading: false,
      };
    case SHOW_ANUNCIO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LISTAR_ANUNCIOUSUARIO_REQUEST:  
    case LISTAR_ANUNCIO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CRIAR_ANUNCIO_REQUEST:
    case UPDATE_ANUNCIO_REQUEST:
    case DELETE_ANUNCIO_REQUEST:
      console.log(action);
      return {
        ...state,
        loading: true,
      };
    case LISTAR_ANUNCIOUSUARIO_SUCCESS:  
    case LISTAR_ANUNCIO_SUCCESS:
      return {
        ...state,
        loading: false,
        anuncios: action.payload,
        error: '',
      };
    case CRIAR_ANUNCIO_SUCCESS:
      return {
        ...state,
        loading: false,
        anuncios: [...state.anuncios, action.payload],
        error: '',
      };
    case UPDATE_ANUNCIO_SUCCESS:
      var index = state.anuncios.findIndex(
        anuncio => anuncio.id === action.payload.id,
      );
      state.anuncios[index] = action.payload;
      return {
        ...state,
        loading: false,
        anuncios: [...state.anuncios],
        error: '',
      };
    case DELETE_ANUNCIO_SUCCESS:
      var index = state.anuncios.findIndex(
        anuncio => anuncio.id === action.payload,
      );
      return {
        ...state,
        loading: false,
        anuncio: [
          ...state.anuncios.slice(0, index),

          ...state.anuncios.slice(index + 1),
        ],
        error: '',
      };

    case LISTAR_ANUNCIOUSUARIO_FAILURE:
    case LISTAR_ANUNCIO_FAILURE:
    case CRIAR_ANUNCIO_FAILURE:
    case UPDATE_ANUNCIO_FAILURE:
    case DELETE_ANUNCIO_FAILURE:
      return {
        loading: false,
        anuncio: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default anuncioReducer;
