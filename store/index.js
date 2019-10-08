import Vue from 'vue'
import Vuex from 'vuex'
import API from "~/api";


Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        banners: []
    },

    mutations: {
        GLOBAL_INFORMATION(state, { banners }) {
            state.banners = banners
        },
    },

    actions: {
        updateBanners({ commit }) {
            API.getContentList().then(res => {
                commit('GLOBAL_INFORMATION', { banners: res.data.data.banners })
            })

        }
    }
})

export default store