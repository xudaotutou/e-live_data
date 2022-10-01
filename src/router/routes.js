const routes = [{
    path: "/",
    redirect: "/main",
}, {
    path: "/main",
    component: () =>
        import ("@/views/main/Main.vue"),
    children: [{
        path: "/main/LiveData",
        component: () =>
            import ("@/views/main/LiveData.vue")
    }, {
        path: "/main/UserCenter",
        component: () =>
            import ("@/views/main/UserCenter.vue")
    }]
}, ];
export default routes;