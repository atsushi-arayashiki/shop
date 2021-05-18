<template>
  <div>
    <Header />
    <div class="done">
      <p class="done-text">ご予約ありがとうございます</p>
      <button class="back-button" @click="backClick">戻る</button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components:{
    Header
  },
  methods: {
   backClick(){
     this.$router.push('/')
   }
  }
}
</script>

<style>
 .done{
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   background-color:white;
   padding:100px 150px;
   border-radius:50%;
 }
 .back-button{
   text-align: center;
 }
</style>
