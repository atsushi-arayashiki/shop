<template>
  <div>
    <Header />
    <div class="login">
      <p class="login-title">ログイン</p>
      <div class="rogin-form">
        <input placeholder="email" type="email" v-model="email" />
        <input placeholder="Password" type="password" v-model="password" />
      </div>
      <button @click="auth">ログインする</button>
    </div>
  </div>
</template>

<script>
 import Header from "../components/Header";
export default {
  components: {
    Header
  },
  data(){
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    auth() {
      this.$store.dispatch("login",{
        email: this.email,
        password: this.password
      });
    }
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
