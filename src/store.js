import {createStore} from 'vuex';

const store= createStore({
    state:{
        token: localStorage.getItem('token') || null,
        tasks: [],
        task: {}
    },
    mutations:{
        setToken(state, tokenParam){
            state.token=tokenParam;
            localStorage.setItem('token', tokenParam);
        },
        removeToken(state){
            state.token=null;
            localStorage.removeItem('token');
        },
        setTasks(state, taskParam){
            state.tasks=taskParam;
        },
        setTask(state, taskParam){
            state.task=taskParam;
        },
        addTask(state, taskParam){
            state.tasks.push(taskParam);
        },
        removeTask(state, idParam){
            state.tasks=state.tasks.filter(t=>t.id!== idParam);
        }
    },
    actions:{
        async registerAction(_,userData){
            const data=await fetch('https://tasks-api-agws.onrender.com/users/register',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            if(data.status===201){
                window.location.href='/';
            }
        },
        async loginAction({commit}, userData){
            const data=await fetch('https://tasks-api-agws.onrender.com/users/login',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            const response= await data.json();
            commit('setToken', response);
        },
        async logoutAction({commit}){
            await commit('removeToken');
        },
        async fetchTasks({commit}, tokenParam){
            const request= await fetch('https://tasks-api-agws.onrender.com/tasks',{
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${tokenParam}`,
                    'content-type': 'application/json'
                }
            });
            const response=await request.json();
            commit('setTasks',response);
        },
        async fetchTask({commit}, pailoadParam){
            const request=await fetch(`https://tasks-api-agws.onrender.com/tasks/${pailoadParam.id}`,{
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${pailoadParam.token}`,
                    'content-type': 'application/json'
                }
            })
            const response=await request.json();
            commit('setTask', response);
        },
        async postTask({commit}, pailoadParam){
            const request=await fetch('https://tasks-api-agws.onrender.com/tasks/',{
                method: 'POST',
                headers:{
                    'Authorization': `Bearer ${pailoadParam.token}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(pailoadParam.userObj)
            });
            const response= await request;
            commit('addTask', response);
        },
        async putTask({commit}, payloadParam){
            const request=await fetch(`https://tasks-api-agws.onrender.com/tasks/${payloadParam.taskObj.id}`,{
            method:'PUT',
            headers:{
                'Authorization': `Bearer ${payloadParam.token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(payloadParam.taskObj)
            });;
            const response=await request;
            commit('setTask', response);
        },
        async deleteTask({commit},pailoadParam){
            const request=await fetch(`https://tasks-api-agws.onrender.com/tasks/${pailoadParam.id}`,{
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${pailoadParam.token}`
            }
            });
            const response=await request;
            commit('removeTask', pailoadParam.id)
        }
    },
    getters:{
        getToken: state=>state.token,
        getTasks: state=>state.tasks,
        getTask: state=>state.task
    }
})

export default store;