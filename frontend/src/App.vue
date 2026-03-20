<template>
  <div class="text-center p-5">

    <!-- NAVBAR -->
    <div v-if="user" class="flex justify-between mb-5 px-10">
      <h2 class="text-lg font-bold">
        Logged in as: {{ user.email }} ({{ user.role }})
      </h2>
      <button @click="logout"
        class="bg-red-500 text-white px-3 py-1 rounded">
        Logout
      </button>
    </div>

    <!-- AUTH SECTION -->
    <div v-if="!user" class="flex flex-col items-center">
      <Signup />
      <Login />
    </div>

    <!-- EMPLOYEE -->
    <div v-if="user && user.role === 'employee'">
      <ApplyLeave />
    </div>

    <!-- EMPLOYER -->
    <div v-if="user && user.role === 'employer'">
      <AllLeaves />
    </div>

  </div>
</template>

<script>
import AllLeaves from "./pages/AllLeaves.vue";
import ApplyLeave from "./pages/ApplyLeave.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";

export default {
  components: { Signup, Login, ApplyLeave, AllLeaves },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      window.location.reload();
    }
  }
};
</script>