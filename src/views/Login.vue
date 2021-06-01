<template>
  <div>
    <Header />
    <div class="login">
      <p class="login-title">ログイン</p>
      <div class="rogin-form">
        <input placeholder="user_name" type="text" v-model="user_name">
        <input placeholder="Password" type="text" v-model="password">
      </div>
      <button @click="auth">ログインする</button>
    </div>
  </div>
</template>

<script>
 import Header from "../components/Header";
import axios from "axios";
export default {
  components: {
    Header
  },
  data(){
    return {
      user_name: "",
      password: ""
    };
  },
  methods: {
    auth() {
      axios
      .post("https://shielded-ridge-86495.herokuapp.com/api/users",{
       user_name: this.user_name,
       password: this.password
      })
      .then(response => {
          console.log(response);
          this.$router.replace("/");
        })
        .catch(error => {
          alert(error);
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
