const state = { 
    userDetail :[]
}
const getters = {
    usersList(state){
        return state.userDetail;
    }
}

const mutations = {
    ADD_USER(state,payload){
        state.userDetail.push(payload)
        console.log('11 ',state.userDetail)
    },
    DELETE_USER(state,payload){
        for(let i=0; i<state.userDetail.length; i++){
            if(state.userDetail[i].id == payload.id && state.userDetail[i].firstName == payload.firstName){
                state.userDetail.splice(i,1);
            }
        }

        console.log('updated list',state.userDetail)
    }
}

const actions = {
    AddUser({state, commit},payload){
        payload.id = state.userDetail.length+1;
        commit('ADD_USER',payload)
    },
    DeleteUser({ commit },payload){
        commit('DELETE_USER',payload)
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}