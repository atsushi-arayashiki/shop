<template>
  <div>
    <Header />
    <div class="all">
     <js-accordion></js-accordion>
     <p>All genre</p>
     <input type="text" v-model="search">
    </div>
      <div class="shop_card">
        <tr v-for="item in shop_list" :key="item.item_id">
        <div class="shop_list">
          <img :src="item.shop_image"  class="img"/>
          <p class="shop_name">{{ item.shop_name }}</p>
          <div class="shop_item">
           <p class="shop_area">#{{ item.shop_area }}</p>
           <p class="shop_genre">#{{ item.shop_genre }}</p>
          </div>
          <button class="shop_button" @click="detail(item.shop_id)">詳しくみる</button>
          <button class="heart"></button>

        </div>
        </tr>
      </div>
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
      {shop_id:""},
      {shop_image: ""},
      {shop_name: ""},
      {shop_area: ""},
      {shop_genre: ""}
      ]
      
    };
  },
  methods: {
    async created() {
    const item = await axios.get(
      "http://127.0.0.1:8000/api/shops"
    );
    this.shop_list = item.data.data; 
    console.log(this.shop_list);
  },
   detail(shop_id) {
   this.$router.push({path: '/detail/'+shop_id,params:{shop_id:shop_id}});
  }
  },
    created(){
    this.created();
    },

  };
</script>

<style>
.shop_card{
  display:flex;
  flex-wrap: wrap;
  position: absolute;
  top:250px;
  justify-content: center;
}
.shop_list{
  width: 310px;
  height: 310px;
  overflow: hidden;
  border-radius: 10px;
  margin:0px 20px 20px 0px;
  background-color: white;
  border:2px solid rgb(85, 192, 85);
  
}
.img{
  width: 100%;
}
.shop_name{
  font-weight: bold;
  position: relative;
  top:20px;
  left:10px;
}
.shop_area{
  font-size:15px;
}
.shop_genre{
  font-size:15px;
  margin-left:5px;
}
.shop_item{
  display:flex;
  position:relative;
  top:20px;
  left:10px;
}
.shop_button{
  margin-top: 15px;
  margin-left:5px;
  padding:2px 25px;
  border-radius:10px;
  background-color:rgb(85, 192, 85);
  font-weight: bold;
}
.heart{
  background-color: white;
  width: 50px;
  height: 50px;
  position: absolute;
  top:250px;
  left:250px;
}
.heart:hover{
 background-color: red;
}
.all{
  position:absolute;
  top: 10%;
  left:50%;
  background-color:rgb(85, 192, 85);
  width: 550px;
  padding:10px 10px 0px 10px;
  display: flex;

}
</style>

