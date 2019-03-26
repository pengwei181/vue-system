import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
    token:'Jock'
};
const getters={
    nickName(state){
        return state.token;
    }
};
const mutations={
    createName(state){
        state.token='Maiock';
    },
    updateName(state,sum){
        state.token=sum;
    }
};
const actions={
    updatenewName(context,sum){
        context.commit('updateName',sum);
    }
};
const store = new Vuex.Store({state,getters,mutations,actions});
export default store;
