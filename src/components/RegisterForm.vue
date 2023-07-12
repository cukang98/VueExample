<template>
    <div class="register">
      
      <form @submit.prevent="registerUser" class="my-4">
        <h2>Register</h2>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
  </template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        registerUser() {
            const userData = {
                name: this.name,
                email: this.email,
                password: this.password,
            };

            axios.post('http://localhost:8000/register', userData)
                .then(response => {
                    alert(response.data.message)
                })
                .catch(error => {
                    alert(error.response.data.message)
                });
        },
    },
};
</script>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40;
}

form {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
