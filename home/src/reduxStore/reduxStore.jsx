import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

// define initial state
const initialState = {

};

export const setUserId = (userId) => {
    return {
        type: 'SET_USER_ID',
        payload: userId,
    };
};


// define reducer function
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_ID':
            return {
                ...state,
                auth: {
                    ...state.auth,
                    userId: action.payload,
                },
                denuncias: [], // clear denuncias state when user logs in
            };
        case 'SET_DENUNCIAS':
            return {
                ...state,
                denuncias: action.payload,
            };
        default:
            return state;
    }
};


export const updatePasswordAction = (userId, currentPassword, newPassword, token) => async (dispatch) => {
    try {
        const response = await axios.put(`http://192.168.3.101:8070/update-password/${userId}`, {
            currentPassword,
            newPassword
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        dispatch({ type: 'UPDATE_PASSWORD_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'UPDATE_PASSWORD_ERROR', payload: error.message });
    }
};



// create Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
