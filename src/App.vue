<template>
  <div>
    <div v-if="loggedInUser">
      <!-- Home page content -->
      <h1>Welcome, {{ loggedInUser }}</h1>
      <button @click="logout">Logout</button>
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
    this.checkUserLoggedIn();
  },
  methods: {
    checkUserLoggedIn() {
      axios.get('http://localhost:8000/getuser', { withCredentials: true })
        .then(response => {
          this.loggedInUser = response.data;
          console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA")
        })
        .catch(error => {
          console.log(error);
          this.loggedInUser = null;
        });
    },
    logout() {
      axios.post('http://localhost:8000/api/logout', {}, { withCredentials: true })
        .then(response => {
          console.log(response)
          this.loggedInUser = null;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  components: {
    RegisterForm,
    LoginForm,
  },
};
</script>
