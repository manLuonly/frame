import Vue from 'vue'
import Vuex from 'vuex'
import search_module from './search/index'

Vue.use(Vuex)

const state = {

}
const getters = {}

const mutations = {}

const actions = {}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        search: search_module
    }
})