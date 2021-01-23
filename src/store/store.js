import Vue from 'vue'
import Vuex from 'vuex'
import myAge from './Modules/age'
import myName from './Modules/name'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        car: 'Ferrari',
        model: 'testarrosa'
    },
    getters:{
        showName(state){
            return state.name
        }
    },
    mutations:{
        
    },
    actions:{
        
    },
    modules:{
        myAge,
        myName
    }
})