<template>
    <div>
        <h2>Register</h2>
        <form @submit.prevent="registerUser">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Register</button>
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
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                });
        },
    },
};
</script>
