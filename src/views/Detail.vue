<template>
  <div>
    <Header />
    <div class="detail_shop_list">
     <p>{{ shop_id }}</p>
     <p>{{ shop_name }}</p>
     <p>{{shop_area}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue";
export default {
  components: {
   Header
  },
  data(){
    return{
      detail_list:[
      {shop_id:""},
      {shop_image: ""},
      {shop_name: ""},
      {shop_area: ""},
      {shop_genre: ""}
      ]

    };
  },
  methods:{
    async getDetail(){
      const item =await axios.get(
      "http://127.0.0.1:8000/api/shop/"+this.shop_id
    );
    this.detail_list = item.data.data; 
    console.log(this.detail_list);
    }
    
  },
  created(){
    this.getDetail();
  },
  props: ["shop_id"]
};
</script>

<style>
.detail_shop_list{
  color: red;
}
  
</style>

