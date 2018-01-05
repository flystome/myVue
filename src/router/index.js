import Vue from 'vue';
import Router from 'vue-router';
import shopList from '@/components/shopList';
import address from '@/components/address';


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [ 
    {
      path: '/address',
      name: 'address',
      component: address
    }, 
    {
      path: '/',
      name: 'shopList',
      component: shopList
    },  
       
  ]
});
