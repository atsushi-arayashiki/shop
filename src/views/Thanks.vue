<template>
<div>
  <Header />
  <div class="thanks">
   <p>会員登録ありがとうございます</p>
   <div class="login-button">
       <router-link :to="{name:'Login'}"><button>ログインする</button></router-link>
   </div>
  </div>
</div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style>
  .thanks{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:white;
    padding:150px 100px;
    border-radius:50%;
  }
  .login-button{
   text-align: center;
  }
</style>


