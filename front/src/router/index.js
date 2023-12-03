import HomeApp from '../views/HomeApp.vue'
import {createRouter, createWebHistory} from "vue-router";
import store from '../store'
import AdminRoot from "../components/AdminRoot.vue";

const routes = [
    {
        path: `/log-in`,
        name: 'LogIn',
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/LogIn.vue')
        }
    },
    {
        path: `/`,
        component: AdminRoot,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: ``,
                name: 'HomeApp',
                component: HomeApp
            },
            // {
            //     path: `about/`,
            //     name: 'AboutApp',
            //     component: function () {
            //         return import(/* webpackChunkName: "about" */ '../views/AboutApp.vue')
            //     }
            // },
            // {
            //     path: `info/`,
            //     name: 'InfoApp',
            //     component: function () {
            //         return import(/* webpackChunkName: "about" */ '../views/InfoApp.vue')
            //     }
            // }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isLoggedIn) {
//             return next()
//         }
//         next('/log-in')
//     } else {
//         next()
//     }
// })

export default router;
