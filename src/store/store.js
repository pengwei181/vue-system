import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import storage from '../utils/storage'
const state={
    token:storage.get('token')
};
const getters={
   /* nickName:state=>state.token*/
};
const mutations={
    updateToken(state,data){
        state.token=data
    }
};
const actions={
    /*updatenewName(context,sum){
        context.commit('updateName',sum);
    }*/
};
const store = new Vuex.Store({state,getters,mutations,actions});
export default store;
