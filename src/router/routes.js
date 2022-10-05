const routes = [{
    path: "/",
    redirect: "/main",
}, {
    path: "/main",
    component: () =>
        import ("@/views/main/Main.vue"),
    children: [{
        path: "liveData",
        children: [{
                path: "",
                redirect: "/main/liveData/room"
            },
            {
                path: "room",
                component: () =>
                    import ("@/views/main/LiveData/RoomData.vue")
            }, {
                path: "consumer",
                component: () =>
                    import ("@/views/main/LiveData/ConsumerData.vue")
            }
        ]
    }, {
        path: "/main/OrderData",
        component: () =>
            import ("@/views/main/OrderData.vue")
    }, {
        path: "/main/UserCenter",
        component: () =>
            import ("@/views/main/UserCenter.vue")
    }, ]
}, ];
export default routes;