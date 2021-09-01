import Vue from 'vue'
import VueRouter from "vue-router";
import Products from "./components/Products.vue"
import AddProduct from "./components/AddProduct.vue"
import Product from "./components/Product.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
    mode:'history',
    routes : [
        {path:"/products",component:Products},
        {path:'/',component:AddProduct},
        {path:'/product/:id',component:Product},
        { path : "*", redirect : "/"}
    ]
});