import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "js-example",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    children: [
      {
        path: "profile-1",
        name: "home-1",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
        children: [
          {
            path: "profile-2",
            name: "home-2",
            component: () =>
              import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
            children: [
              {
                path: "profile-3",
                name: "home-3",
                component: () =>
                  import(
                    /* webpackChunkName: "about" */ "../views/AboutView.vue"
                  ),
                children: [
                  {
                    path: "profile-4",
                    name: "home-4",
                    component: () =>
                      import(
                        /* webpackChunkName: "about" */ "../views/AboutView.vue"
                      ),
                    children: [
                      {
                        path: "profile-5",
                        name: "home-5",
                        component: () =>
                          import(
                            /* webpackChunkName: "about" */ "../views/AboutView.vue"
                          ),
                        children: [
                          {
                            path: "profile-6",
                            name: "home-6",
                            component: () =>
                              import(
                                /* webpackChunkName: "about" */ "../views/AboutView.vue"
                              ),
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/three-example",
    name: "three-example",
    component: () =>
      import(/* webpackChunkName: "threeHome" */ "../views/threeHome.vue"),
    children: [
      {
        path: "flutterPicture",
        name: "flutterPicture",
        component: () =>
          import(
            /* webpackChunkName: "flutterPicture" */ "../views/three/flutterPicture.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default {
  router,
  routes,
};
