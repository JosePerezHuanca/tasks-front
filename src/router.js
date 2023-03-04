import { createRouter,createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Lista from './components/Lista.vue';
import Add from './components/Add.vue';
import Details from './components/Details.vue'
import Edit from './components/Edit.vue'

const routes=[
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/tasks',
        name:'tasks',
        component: Lista
    },
    {
        path: '/tasks/details/:id',
        name: 'details',
        component: Details
    },
    {
        path: '/tasks/edit/:id',
        name: 'edit',
        component: Edit
    },
    {
        path: '/login',
        name:'login',
        component: Login
    },
    {
        path: '/add',
        name:'add',
        component: Add
    }
];

const router=createRouter({
      history: createWebHistory(),
      routes
})

export default router;