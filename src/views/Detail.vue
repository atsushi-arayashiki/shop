<template>
  <div>
    <Header />
    <div class="detail_shop_list">
     <p>{{ shop_id }}</p>
     <p>{{ shop_name }}</p>
      
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
    async detailget(){
      const item =await axios.get(
      "http://127.0.0.1:8000/api/shop/{shop_id}"
    );
    this.detail_list = item.data.data; 
    }
    
  },
  created(){
    this.detailget();
  },
  props: ["shop_id"]
};
</script>

<style>
.detail_shop_list{
  color: red;
}
  
</style>

