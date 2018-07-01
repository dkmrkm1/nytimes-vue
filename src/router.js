import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './pages/Top';
import About from './pages/About';
import Contact from './pages/Contact';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Top
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default new VueRouter({ routes });