import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import TypeIn from "@/pages/Type/TypeIn"
import Person from "@/pages/Person/Person"
import BookShelf from "@/pages/Bookshelf/BookShelf"

Vue.use(Router)

export default new Router({
  routes: [
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










  ]
})
