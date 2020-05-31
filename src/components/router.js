import Vue from 'vue'
import Router from 'vue-router'
import Files from './Files';
import Devices from './Devices';
import BackUp from './BackUp';
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'devices',
            component: Devices,
        },
        {
            path: '/data:selected',
            name: 'data',
            component: Files,
            props: true
        }, {
            path: '/backUp',
            name: 'backUp',
            component: BackUp,
            props: true
        }
    ]
})

export default router;
