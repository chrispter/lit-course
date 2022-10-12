import { Router } from '@vaadin/router';
import './src';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes([
    { path: '/', component: 'login-lit' },
    { path: '/view', component: 'view-lit' },
])