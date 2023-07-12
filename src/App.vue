<template>
  <div>
    <div v-if="loggedInUser">
      <!-- Home page content -->
      <h1>Welcome, {{ loggedInUser }}</h1>
      <button class="btn btn-primary" @click="logout">Logout</button>
    </div>
    <div v-else>
      <!-- Register and Login forms -->
      <RegisterForm @userRegistered="checkUserLoggedIn" />
      <LoginForm @userLoggedIn="checkUserLoggedIn" />
    </div>
  </div>
</template>

<script>
import RegisterForm from './components/RegisterForm.vue';
import LoginForm from './components/LoginForm.vue';
import axios from 'axios';

export default {
  data() {
    return {
      loggedInUser: null,
    };
  },
  mounted() {
  // Check if the authentication token exists in local storage
  const token = localStorage.getItem('token');

  if (token) {
    // Set the authorization header for subsequent API requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    this.loggedInUser = localStorage.getItem('loggedInUser');
  } else {
    // User is not logged in, redirect to the login page or perform other actions
  }
},
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.loggedInUser = null;
      window.location.reload();
    },
  },
  components: {
    RegisterForm,
    LoginForm,
  },
};
</script>
