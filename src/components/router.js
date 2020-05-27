import Vue from 'vue'
import Router from 'vue-router'
import Files from './Files';
import Devices from './Devices';
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'devices',
            component: Devices
        },
        {
            path: '/date',
            name: 'date',
            component: Files
        }
    ]
})

export default router;
