<template>
  <div v-if="product.id" id="app">
    <h1 class="head">PRODUCT DETAILS</h1>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ProductId</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">ImageUrl</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td><a v-bind:href=[product.imageUrl]>{{ product.imageUrl }}</a></td>
          <button
          v-if="product.id"
            type="button"
            class="btn btn-outline-danger"
            @click="deleteItem(product.id)"
          >
            Delete
          </button>
        </tr>
      </tbody>
    </table>

  </div>
      <div v-else id="app">
<h1 class="head">CANNOT FIND PRODUCT</h1>
  </div>
</template>
    
<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {},
    };
  },
  async created() {
    let apiURL = `http://localhost:5000/product${this.$route.params.id}`;
    await axios.get(apiURL).then((res) => {
      this.product = res.data;
    }).catch(err=>{
      this.error = err;
    });
  },
  methods: {
    async deleteItem(id) {
      let apiURL = `http://localhost:5000/product/${id}`;

      if (window.confirm("Do you really want to delete?")) {
        await axios.delete(apiURL).catch((error) => {
          console.log(error);
        });
      }
      this.$router.push("/products");
    },
  },
};
</script>


<style>
body {
  color: black;
}
.card-img-top {
    width: 100%;
    height: 20vw;
    object-fit: cover;
}
</style>
