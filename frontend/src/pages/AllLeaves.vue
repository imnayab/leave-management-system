<template>
  <div class="flex flex-col items-center mt-10">
    <h2 class="text-2xl mb-4">All Leaves</h2>

    <div v-if="leaves.length === 0">
      No leave requests found
    </div>

    <div
      v-for="leave in leaves"
      :key="leave._id"
      class="border p-4 m-2 w-96"
    >
      <p><strong>Type:</strong> {{ leave.type }}</p>
      <p><strong>Reason:</strong> {{ leave.reason }}</p>
      <p><strong>Start:</strong> {{ leave.startDate }}</p>
      <p><strong>End:</strong> {{ leave.endDate }}</p>
      <p><strong>Status:</strong> {{ leave.status }}</p>

      <div class="mt-2">
        <button
          @click="updateStatus(leave._id, 'approved')"
          class="bg-green-500 text-white px-2 py-1 m-1"
        >
          Approve
        </button>

        <button
          @click="updateStatus(leave._id, 'rejected')"
          class="bg-red-500 text-white px-2 py-1 m-1"
        >
          Reject
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      leaves: []
    };
  },

  async mounted() {
    try {
      const res = await api.get("/api/leave/all");
      this.leaves = res.data;
    } catch (err) {
      console.log(err);
    }
  },

  methods: {
    async updateStatus(id, status) {
      try {
        await api.post(`/api/leave/update/${id}`, { status });
        alert("Updated ✅");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>