import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import UserInventario from './components/UserInventario'
import App from './App'
const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            path: '/user/balance/:username',
            name: "user_balance",
            component: UserBalance
        },
        {
            path: '/user/inventario/:username',
            name: "user_inventario",
            component: UserInventario
        }
    ]
})
export default router