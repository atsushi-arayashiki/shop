<template>
  <div>
    <Header />
   <div class="user">
     <div class="card">
        <p>会員登録</p>
        <div class="form">
          <input placeholder="Username" type="text" v-model="username" />
          <input placeholder="Email" type="text" v-model="email" />
          <input placeholder="Password" type="text" v-model="password" />
          <button @click="auth">登録</button>
        </div>
      </div>
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
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    auth() {
      axios
      .post("https://git.heroku.com/api/register",{
       username: this.usrename,
       email: this.email,
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
};
</script>

<style>
 .card{
   position:absolute;
   background-color:white;
   padding:150px 100px;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border-radius:50%;
 }
 p{
   font-size:20px;
   margin-bottom:10px;
 }
 input{
   resize: both;
   height:30px;
   width: 300px;
   display:block;
 }
 button{
   margin-top:10px;
   background-color:white;
   border-width: 1px;
 }
 button:hover{
   background-color: rgb(226, 247, 232);
 }
</style>
