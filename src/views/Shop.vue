<template>
  <div>
    <Header />
    <table>
      <tr v-for="item in shop_list" :key="item">
      <p>{{ item.shop_image }}</p>
      <p>{{ item.shop_name }}</p>
      <p>{{ item.shop_area }}</p>
      <p>{{ item.shop_genre }}</p>
      </tr>
    </table>
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
      shop_list: [
      {shop_image: ""},
      {shop_name: ""},
      {shop_area: ""},
      {shop_genre: ""},
      ]
      
    };
  },
  methods: {
    async created() {
    const item = await axios.get(
      `http://127.0.0.1:8000/api/shops`
    );
    this.shop_list = item.data.data;
    const shop_list = item;
    this.shop_image = shop_list.shop_image;
    this.shop_name = shop_list.shop_name;
    this.shop_area = shop_list.shop_area;
    this.shop_genre = shop_list.shop_genre;
  }
  }
  };
</script>

