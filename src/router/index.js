import Vue from 'vue'
import Router from 'vue-router'

import homePage from '../components/homePage.vue';
import typingPage from '../components/typingPage.vue';


Vue.use(Router);

export default new Router({
    //mode: "history",
    routes: [
        {
            path: "/",
            name: 'homePage',
            component: homePage
        },
        {
            path: "/typingPage",
            name: 'typingPage',
            component: typingPage
        },
    ],
})