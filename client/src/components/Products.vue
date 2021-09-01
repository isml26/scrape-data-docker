<template>
  <div id="app">
    <h1 class="head">PRODUCTS</h1>
    <hr />
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <b-card v-if="product.name.length > 40"
          :title="product.name.substring(0,40)+'...'"
          :img-src="product.imageUrl"
          img-alt="Image"
          img-top
          img-height=200
          tag="article"
          style="max-width: 20rem"
          class="mb-4"
        >
          <b-card-text>
            £{{ product.price }}
          </b-card-text>
          <b-button
            :href="'/product/'+product.id"
            variant="primary"
            @click="getProduct(product.id)"
            >Get Details</b-button
          >
        </b-card>
          <b-card v-else
          :title="product.name"
          :img-src="product.imageUrl"
          img-alt="Image"
          img-top
          img-height=200
          tag="article"
          style="max-width: 20rem"
          class="mb-4"
        >
          <b-card-text>
            £{{ product.price }}
          </b-card-text>
          <b-button
            :href="'/product/'+product.id"
            variant="primary"
            @click="getProduct(product.id)"
            >Get Details</b-button
          >
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      url: "",
    };
  },
  async created() {
    let apiURL = "http://localhost:5000/product/getAll";
    axios
      .get(apiURL)
      .then((res) => {
        console.log(res.data)
        this.products = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    async getProduct(id) {
      let url = `http://localhost:5000/product/${id}`;
      const response = await axios.get(url);
      console.log(response);
      this.$router.push(`http://localhost:5000/product/${id}`);
    },
  },
};
</script>

<style>
.head {
  text-align: center;
}
.container {
  display: inline-flex;
  flex-wrap: wrap;
  border: 1px solid black;
}
.products {
  display: flex;
  flex-wrap: wrap;
  padding-left: 5rem;
}
.product {
  list-style: none;
  flex: 0 0 33.3%;
}
@media screen and (max-width: 1100px) {
  .product {
    list-style: none;
    flex: 0 0 50%;
    width: 100%;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 700px) {
  .product {
    list-style: none;
    flex: 0 0 100%;
    width: 100%;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    padding-left: 3rem;
  }

}
</style>
