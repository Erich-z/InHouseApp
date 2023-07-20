
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../../service/api';
import { uploadImageFailure, uploadImageSuccess, UPLOAD_IMAGE_REQUEST } from './actions';

function* uploadImage(action) {

  console.log(action)
  try {
    // Chame a função de upload da imagem

    const response = yield call(() => api.post('/image_upload', {image: action.payload}));
    // Atualize o estado para indicar o sucesso do upload da imagem
    console.log(response)

    yield put(uploadImageSuccess());
    // Faça algo com a resposta (opcional)

  } catch (error) {
    console.log(error)
    


    // Atualize o estado para indicar o erro no upload da imagem
    yield put(uploadImageFailure());
  }
}

export default all([
    takeLatest(UPLOAD_IMAGE_REQUEST, uploadImage)
]);