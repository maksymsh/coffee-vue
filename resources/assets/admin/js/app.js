require('./bootstrap');

import Vue from 'vue'
import store from './store'
import router from './router'
import { i18n, loadLanguageAsync } from './lang'
import { sync } from 'vuex-router-sync'

import App from './components/App'

sync(store, router);

router.beforeEach((to, from, next) => {
    const lang = to.params.lang;

    loadLanguageAsync(lang).then(() => {
        $.get(to.path).done(data => {
            store.commit('setData', data);
            next();
        }).fail(() => {

        }).always(() => {

        });
    })

});

new Vue({
    store,
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')
