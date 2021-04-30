import {createRouter, createWebHistory} from "vue-router";

import { routes as root_router } from '@/router/routers/root_router';
import { routes as base_router } from '@/router/routers/base_router';
import { routes as chart_router } from '@/router/routers/chart_router';

const routesSet = new Set([...root_router,...base_router,...chart_router]);


const routes = Array.from(routesSet);
console.log(routes)
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;