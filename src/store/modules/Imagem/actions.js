export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';

export const uploadImageRequest = (imageData) => ({
    type: UPLOAD_IMAGE_REQUEST,
    payload: imageData,
  });

  export const uploadImageSuccess = () => ({
    type: UPLOAD_IMAGE_SUCCESS,
  });

  export const uploadImageFailure = () => ({
    type: UPLOAD_IMAGE_FAILURE,
  });