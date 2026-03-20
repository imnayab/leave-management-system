<template>
  <div class="flex flex-col items-center mt-10">
    <h1 class="text-2xl mb-4">Login</h1>

    <input v-model="email" placeholder="Email" class="border p-2 m-2"/>
    <input v-model="password" type="password" placeholder="Password" class="border p-2 m-2"/>
    <p class="text-sm text-gray-400">
  Login with your registered account (role is auto-detected)
</p>
    <button @click="login" class="bg-blue-500 text-white p-2">Login</button>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      const res = await api.post("/auth/login", this.$data);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.reload();
    }
  }
};
</script>