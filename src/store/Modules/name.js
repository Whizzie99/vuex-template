const myName = {
    namespaced: true,
    state:{
        name: 'Francis'
    },
    getters:{
        showName(state){
            return state.name
        }
    },
    mutations:{
        swapName(state, payload){
            state.name = payload
        }
    },
    actions:{
        swapName(context, payload){
            setTimeout(()=>{
                context.commit('swao=pName', payload)
            },2000)
        }
    }
}

export default myName;