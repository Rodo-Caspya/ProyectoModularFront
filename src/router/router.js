import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path:'/',
        redirect: '/login'
    },
    { 
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/home/pages/Login')
    },
    { 
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/home/pages/Register')
        
    },
    { 
        path: '/main',
        name: 'Main',
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/home/pages/Main')
        
    },
    { 
        path: '/resetPassword',
        name: 'ResetPassword',
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/home/pages/ResetPassword')
        
    },
    { 
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NotFoundPage" */ '@/modules/shared/pages/NotPageFound')
    },//pathMatch es una funcion del router para buscar cualquier ruta que no haga match
    
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router