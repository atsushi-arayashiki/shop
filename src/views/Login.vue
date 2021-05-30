<template>
  <div>
    <Header />
    <div class="login">
      <p class="login-title">ログイン</p>
      <div class="rogin-form">
        <input placeholder="user_name" type="text" v-model="user_name">
        <input placeholder="Password" type="text" v-model="password">
      </div>
      <button >ログインする</button>
    </div>
  </div>
</template>

<script>

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
