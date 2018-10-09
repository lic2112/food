import * as types from './types';

export default {
    [types.SHOW_LOADING]: (state) => {
        state.bLoading = true
    },
    [types.HIDE_LOADING]: (state) => {
        state.bLoading = false
    },
    [types.SHOW_FOOT]: (state) => {
        state.bFoot = true
    },
    [types.HIDE_FOOT]: (state) => {
        state.bFoot = false
    },
    [types.USER]: (state, payload) => {
        state.bUSER = payload
    },
    [types.ADD_ITEM]: (state, payload) => {
        state.buycar = payload
    },
    [types.CHANGE_ITEM]: (state, payload) => {
        state.buycar = payload
    },
    [types.REMOVE_ITEM]: (state, payload) => {
        state.buycar = payload
    }
}