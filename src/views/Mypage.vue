<template>
<div>
   <Header />
   <p>{{ $user-name }}</p>
   <div class="mypage">
     <div class="reservations">
      <p>予約状況</p>
      <div class="reservations-card">
       <p>yoyakku</p>
      </div>
     </div>
     <div class="like-shop">
       <p>お気に入り店舗</p>

     </div>
   </div>
</div>
</template>

<script>
import Header from "../components/Header";
export default {
  component:{
    Header
  }
}
</script>
