const routes = [
  {
    path:"/",
    redirect:"/helloWorld"
  },
  {
    path: "/helloWorld",
    component: ()=>import("@/components/HelloWorld.vue"),
  },
];
export default routes;
