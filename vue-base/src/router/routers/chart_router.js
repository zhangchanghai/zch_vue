export const routes = [
  {
    path: "/chart",
    name: "Test",
    component: () => import ("@/views/Home.vue"),
    children: [
      {
        path: "create",
        name: "test",
        meta: {
          title: '测试'
        },
        component: () => import ("@/views/Test/Test")
      }
    ]
  }
];
