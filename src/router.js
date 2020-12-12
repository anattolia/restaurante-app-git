import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import Cliente from './components/Cliente'
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
                path: '/cliente/:cliente',
                name: "cliente",
                component: Cliente
            },
            {
                path: '/cliente/crear/:cliente',
                name: "crear_cliente",
                component: CrearCliente
            },
        ]
    })

export default router
