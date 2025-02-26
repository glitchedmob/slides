import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

import { reveal } from '@/composables/useReveal.ts';
import './styles/main.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');

if (import.meta.hot) {
    import.meta.hot.on('vite:afterUpdate', () => {
        if (reveal.value !== undefined) {
            window.location.reload();
        }
    });
}
