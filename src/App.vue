<template>
  <div>
    <RegisterForm />
    <LoginForm />
  </div>
</template>

<script>
import RegisterForm from './components/RegisterForm.vue';
import LoginForm from './components/LoginForm.vue';

export default {
  components: {
    RegisterForm,
    LoginForm,
  },
};
</script>
