<template>
  <div>
    <Header />
    <div class="login">
      <p class="login-title">ログイン</p>
      <div class="rogin-form">
        <input placeholder="Email">
        <input placeholder="Password">
      </div>
      <button class="">ログインする</button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  }
}
</script>

<style>
 .login{
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   background-color:white;
   padding:150px 100px;
   border-radius:50%;
 }
</style>
