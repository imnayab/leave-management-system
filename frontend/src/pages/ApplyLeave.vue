<template>
  <div class="flex flex-col items-center mt-10">
    <h2 class="text-2xl mb-4 font-semibold">Apply Leave</h2>

    <input v-model="type" placeholder="Type"
      class="border p-2 m-2 rounded text-black w-64"/>

    <input v-model="startDate" type="date"
      class="border p-2 m-2 rounded text-black w-64"/>

    <input v-model="endDate" type="date"
      class="border p-2 m-2 rounded text-black w-64"/>

    <input v-model="reason" placeholder="Reason"
      class="border p-2 m-2 rounded text-black w-64"/>

    <button @click="applyLeave"
      class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2">
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
      startDate: "",
      endDate: "",
      reason: ""
    };
  },
  methods: {
    async applyLeave() {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        await api.post("/leave/apply", {
          ...this.$data,
          userId: user._id
        });

        alert("Leave applied ✅");

        // ✅ CLEAR FORM (IMPORTANT)
        this.type = "";
        this.startDate = "";
        this.endDate = "";
        this.reason = "";

      } catch (err) {
        console.error(err);
        alert("Something went wrong ❌");
      }
    }
  }
};
</script>