import VueRouter from 'vue-router'
import TodoAdd from './pages/TodoAdd.vue'
import TodoList from './pages/TodoList.vue'

const routes =[
    {path:'/add', component: TodoAdd,},
    {path:'/list', component:TodoList,},
    {path:'/', component:TodoList,},
]

const router = new VueRouter({
    mode:'history',
    routes,
})

export default router