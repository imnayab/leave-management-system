<template>
  <div class="flex flex-col items-center mt-10">
    <h1 class="text-2xl mb-4">Signup</h1>

    <input v-model="name" placeholder="Name" class="border p-2 m-2"/>
    <input v-model="email" placeholder="Email" class="border p-2 m-2"/>
    <input v-model="password" type="password" placeholder="Password" class="border p-2 m-2"/>

    <select v-model="role" class="border p-2 m-2">
      <option value="employee">Employee</option>
      <option value="employer">Employer</option>
    </select>

    <button @click="signup" class="bg-green-500 text-white p-2">Signup</button>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      role: "employee"
    };
  },
  methods: {
    async signup() {
      await api.post("/auth/signup", this.$data);
      alert("Signup success");
    }
  }
};
</script>