<template>
  <div>
    <Header />
    <p>{{shop_image}}</p>
    <p>{{shop_name}}</p>
    <p>{{shop_area}}</p>
    <p>{{shop_genre}}</p>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
export default {
  components:{
    Header
  },
  data() {
    return {
      shop_image: "",
      shop_name: "",
      shop_area: "",
      shop_genre: ""
    };
  },
  async create() {
    const item = await axios.get(
      "http://127.0.0.1:8000/api/shops",
    );
    const shop_list = item.data;
    this.shop_image = shop_list.shop_image;
    this.shop_name = shop_list.shop_name;
    this.shop_area = shop_list.shop_area;
    this.shop_genre = shop_list.shop_genre;
  }
  };
</script>

