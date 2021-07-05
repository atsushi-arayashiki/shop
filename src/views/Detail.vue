<template>
  <div>
    <Header />
      <div class="detail shop">
       <div class="detail_shop_list">
        <p>{{ detail_list.shop_name }}</p>
        <img :src="detail_list.shop_image"  class="detail_img"/>
        <p>#{{ detail_list.shop_area }}</p>
        <p>#{{detail_list.shop_genre}}</p>
        <p>{{detail_list.shop_data}}</p>
      </div>
    </div>

    <div class="resavations">
      <div class="resavations-card">
       <p>予約</p>
      </div>
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
      {shop_genre: ""},
      {shop_data:""}
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
  width: 400px;
  height: 500px;
  background-color:rgb(85, 192, 85);
  position: absolute;
  top:150px;
  left: 13%;
  padding:30px;
}
.detail_img{
  width: 100%;
}
.resavations-card{
  width: 400px;
  height: 500px;
  background-color:rgb(85, 192, 85);
  position: absolute;
  top:150px;
  right:13%;
  padding:30px;
}
</style>

