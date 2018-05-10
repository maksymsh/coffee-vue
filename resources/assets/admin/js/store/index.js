import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    data: {}
}

const getters = {

}

const actions = {

}

const mutations = {
    setData(state, data){
        state.data = data;
    }
}

const modules = {

}


const store = new Vuex.Store({
    state, getters, actions, mutations, modules
})

export default store