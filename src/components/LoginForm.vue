<template>
    <div class="login">
      
      <form @submit.prevent="loginUser" class="my-4">
        <h2>Login</h2>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
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

                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('loggedInUser', response.data.username);

                    // Emit event to notify the parent component (App.vue) that the user is logged in
                    this.$emit('userLoggedIn');

                    // Clear form fields
                    this.email = '';
                    this.password = '';
                    alert(response.data.message)
                    // Reload the page
                    window.location.reload(); 

                })
                .catch(error => {
                    alert(error.response.data.message)
                });
        },
    },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}

form {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
  