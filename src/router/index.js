import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/movie',
      },
      
  {
    path: '/movie',
    name: 'movie',
    component:  () => import(/* webpackChunkName: "about" */ '../views/move/Movie.vue'),
    redirect: '/movie/showing',
    children:[
        {
        path: 'showing',
        name: 'showing',
        component:  () => import(/* webpackChunkName: "about" */ '../views/move/showing/Showing.vue'),
    },
    {
        path: 'upcoming',
        name: 'upcoming',
        component:  () => import(/* webpackChunkName: "about" */ '../views/move/upcoming/Upcoming.vue'),
    },
]
  },
  {
    path: '/main',
    name: 'main',
    component:  () => import(/* webpackChunkName: "about" */ '../views/main/Main.vue')
  },
  {
    path: '/cinema',
    name: 'cinema',
    component:  () => import(/* webpackChunkName: "about" */ '../views/cinema/Cinema.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:  () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component:  () => import(/* webpackChunkName: "about" */ '../views/detail/Detail.vue')
  },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



// router.beforeEach((to,from,next)=>{
//     // console.log(to.meta.requireAuth,'------------');
//     if(to.meta){
//         if (localStorage.getItem('token')) {
//             next()  // 进入页面
//           } else {
//             next({
//               path: '/login'
//             })
//           }
//         } else {
//           next() // 进入其他页面
        
//     }
// })
export default router
