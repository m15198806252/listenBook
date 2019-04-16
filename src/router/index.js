import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import TypeIn from "@/pages/Type/TypeIn"
import Person from "@/pages/Person/Person"
import Login from "@/pages/Login/Login"
import Register from "@/pages/Login/Register"
const Vip =() => import( "@/pages/Person/Vip")
import BookShelf from "@/pages/Bookshelf/BookShelf"


Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/login',
      name: 'Login',
      component: Login
    },
     {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path:'/type',
        name:'TypeIn',
        component:TypeIn,
    },
    {
        path:"/person",
        name:'Person',
        component:Person,
    },
    {
        path:'/shelf',
        name:"BookShelf",
        component:BookShelf
    },
     {
        path:'/vip',
        name:"Vip",
        component:Vip,
        meta:{
              title:'开通VIP',

        }
    },










  ]
})
