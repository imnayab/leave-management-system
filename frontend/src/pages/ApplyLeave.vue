<template>
  <div class="flex flex-col items-center mt-10">
    <h2 class="text-2xl mb-4">Apply Leave</h2>

    <input
      v-model="type"
      placeholder="Type"
      class="border p-2 m-2"
    />

    <input
      v-model="startDate"
      type="date"
      class="border p-2 m-2"
    />

    <input
      v-model="endDate"
      type="date"
      class="border p-2 m-2"
    />

    <input
      v-model="reason"
      placeholder="Reason"
      class="border p-2 m-2"
    />

    <button
      @click="applyLeave"
      class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2"
    >
      Apply
    </button>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      type: "",
      reason: "",
      startDate: "",
      endDate: ""
    };
  },

  methods: {
    async applyLeave() {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
          alert("Please login again");
          return;
        }

        if (!this.type || !this.reason || !this.startDate || !this.endDate) {
          alert("Fill all fields");
          return;
        }

        await api.post("/leave/apply", {
          userId: user._id,
          type: this.type,
          reason: this.reason,
          startDate: this.startDate,
          endDate: this.endDate,
          status: "pending"
        });

        alert("Leave applied successfully ✅");
      } catch (err) {
        console.error(err);
        alert("Something went wrong ❌");
      }
    }
  }
};
</script>