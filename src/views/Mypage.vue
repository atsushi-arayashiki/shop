<template>
<div>
   <Header />
   <div class="user_name">
      <p>{{ $user_name }}様</p>
   </div>
   <div class="mypage">
     <div class="reservations">
      <p>予約状況</p>
      <div class="reservations-card">
       <p>予約{}</p>
      </div>
     </div>
     <div class="like-shop">
       <p>お気に入り店舗</p>
       <div class="like-shop-list">

       </div>
     </div>
   </div>
</div>
</template>

<script>
import Header from "../components/Header";
export default {
  components:{
    Header
  },
  data() {
    return {
     user_name:""
    };
  }
};
</script>

<style>
.user_name{
  position: absolute;
  top:25%;
  left:85%;
}
 .reservations{
   position: absolute;
   top:45%;
   left:20%;
 }

 .reservations-card{
   padding:30px;
   background-color:white;
   border-radius: 20%;
 }
 .like-shop{
   position: absolute;
   top:45%;
   left:50%;
 }
</style>
