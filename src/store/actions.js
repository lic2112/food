import * as types from './types';

export default {
    showLoading: ({ commit, state }, payload) => {
        commit(types.SHOW_LOADING)
    },
    hideLoading: ({ commit, state }, payload) => {
        commit(types.HIDE_LOADING)
    },
    showFoot: ({ commit, state }, payload) => {
        commit(types.SHOW_FOOT)
    },
    hideFoot: ({ commit, state }, payload) => {
        commit(types.HIDE_FOOT)
    },
    user: ({ commit, state }, payload) => {
        commit(types.USER, payload)
    },
    addItem: ({ commit, state }, payload) => {
        let find = false;
        state.buycar.forEach(item => {
            if (item.id == payload.id) {
                item.number++;
                find = true
            }
        });
        if (!find) {
            payload.number = 1
            state.buycar.push(payload)
        }
        let arr = [];
        state.buycar.forEach(item => arr.push(item))
        commit(types.ADD_ITEM, arr)
        // commit(types.ADD_ITEM, [...state.bucar])
    },
    changeItem: ({ commit, state }, payload) => {
        state.buycar.forEach(item => {
            if (item.id == payload.id) {
                item.number += payload.num
                if (item.number <= 0) {
                    item.number = 0
                }
            }
        })
        let arr = [];
        state.buycar.forEach(item => arr.push(item))
        commit(types.CHANGE_ITEM, arr)
        // commit(types.CHANGE_ITEM, [...state.buycar])
    },
    removeItem: ({ commit, state }, payload) => {
        state.buycar.forEach((item, index) => {
            if (item.id == payload.id) {
                state.buycar.splice(index, 1)
            }
        })
    }
}