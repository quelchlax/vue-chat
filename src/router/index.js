import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true, // this will add props to be passed in the Chat vue file
      beforeEnter: (to, from, next) => {
        // console.log(to.params.nameProp)
        if(to.params.name){
          next()
        } else {
          next({name: 'Welcome'})
        }
      }
    }
  ]
})


// Notes: beforeEnter method with block of code basically forces 
// a user login or to be redirected to the user login screen 
// so they cant just type the hard url and access data etc 