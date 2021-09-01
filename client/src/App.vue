<template>
  <div> 
<div>
  <b-navbar type="light" variant="info">
    <b-navbar-nav>
      <b-nav-item href="/">Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item href="/products" text="Lang" left>
      Products
      </b-nav-item>

    </b-navbar-nav>
  </b-navbar>
</div>
  <router-view></router-view>
</div>    

  
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      products:[],
      url:"",
    };
  },
 
  
}
</script>

