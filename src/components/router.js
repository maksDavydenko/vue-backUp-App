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
            component: Devices,
            // props: true
        },
        {
            path: '/data:selected',
            name: 'data',
            component: Files,
            props: true
        }
    ]
})

export default router;
