<template>
    <div>
      <p>Logged in as: {{ userEmail }}</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        userEmail: '',
      };
    },
    mounted() {
      this.fetchUserEmail();
    },
    methods: {
      fetchUserEmail() {
        axios.get('/api/getuser')
          .then(response => {
            this.userEmail = response.data;
          })
          .catch(error => {
            // Handle error or redirect to login page
          });
      },
      logout() {
        axios.post('/api/logout')
          .then(response => {
            localStorage.removeItem('token');
            // Redirect to login page or perform any other action
          })
          .catch(error => {
            // Handle logout error
          });
      },
    },
  };
  </script>
  