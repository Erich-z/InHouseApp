import { UPLOAD_IMAGE_FAILURE, UPLOAD_IMAGE_REQUEST, UPLOAD_IMAGE_SUCCESS } from "./actions";

const initialState = {
    uploading: false,
    uploaded: false,
    error: false,
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_IMAGE_REQUEST:
            return { ...state, uploading: true, uploaded: false, error: false };
        case UPLOAD_IMAGE_SUCCESS:
            return { ...state, uploading: false, uploaded: true, error: false };
        case UPLOAD_IMAGE_FAILURE:
            return { ...state, uploading: false, uploaded: false, error: true };
        default:
            return state;
    }
};

export default imageReducer;