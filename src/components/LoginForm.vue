<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="loginUser">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      loginUser() {
        const userData = {
          email: this.email,
          password: this.password,
        };
  
        axios.post('http://localhost:8000/login', userData)
          .then(response => {
            console.log(response)
            console.log("testttt")
          })
          .catch(error => {
            console.log(error)
          });
      },
    },
  };
  </script>
  