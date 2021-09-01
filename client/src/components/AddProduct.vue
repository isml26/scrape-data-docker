<template>
  <div id="add">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hr />
    <h1 class="hover-cut" data-text="Enter etsy url">Enter etsy url</h1>
    <p class="note">Make sure that url starts with=> etsy.com/uk/listing/....</p>
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          class="input"
          v-model="url"
          type="text"
          placeholder="Enter url..."
        />
      </div>
      <div class="control">
        <a class="button is-info" @click="addItem">Add</a>
      </div>
    </div>
    <div v-if="loading" >
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div v-if="error" class="control alert alert-danger">
      <h4>Ooops....</h4>
      {{ error }}. Please enter valid etsy product url
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
      error: "",
      loading: false,
    };
  },

  methods: {
    async addItem() {
      this.error = "";
      this.loading=true;
      await axios
        .post("http://localhost:5000/product/add", {
          url: this.url,
        })
        .then(() => {
          this.$router.push("/products");
        })
        .catch((err) => {
          console.log(err);
          this.error = err;
        })
        .finally(()=>{
          this.loading = false;
        })
    },
  },
};
</script>

<style>
#add {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
.icon {
  cursor: pointer;
}

.wrap {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 25px;
}
.hover-cut {
  color: #333;
  position: relative;
  width: max-content;
  margin: 0 auto;
  transform: skewX(0deg) translateX(0px);
  cursor: pointer;
  transition: 0.3s;
}
.hover-cut:hover {
  transform: skewX(-15deg) translateX(18px);
  color: aquamarine;
}
.hover-cut::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  height: 6px;
  width: 0%;
  background: #fff;
  overflow: hidden;
  transition: 0.3s;
  z-index: 1;
  transform: rotate(5deg);
}
.hover-cut:hover::before {
  width: 110%;
  left: -5%;
}
.hover-cut::after {
  content: attr(data-text);
  position: absolute;
  left: -5%;
  top: 0;
  height: 50%;
  overflow: hidden;
  transform: skewX(0deg);
  background: #fff;
  width: 110%;
  transition: 0.3s;
  color: #333;
}
.hover-cut:hover::after {
  transform: skewX(25deg) translateX(-15px);
  color: rgb(72, 82, 76);
}
p.note
{
     -moz-border-radius: 6px;
     -webkit-border-radius: 6px;
     background-color: #f0f7fb;
     background-position: 9px 0px;
     background-repeat: no-repeat;
     border: solid 1px #3498db;
     border-radius: 6px;
     line-height: 18px;
     overflow: hidden;
     padding: 15px 60px;
}
</style>
