<template>
  <div style="padding: 20px;">
    <h2>All Leaves</h2>

    <div v-if="leaves.length === 0">
      No leave requests found
    </div>

    <div
      v-for="leave in leaves"
      :key="leave._id"
      style="border:1px solid gray; margin:10px; padding:10px;"
    >
      <p><b>User:</b> {{ leave.userId }}</p>
      <p><b>Type:</b> {{ leave.type }}</p>
      <p><b>Reason:</b> {{ leave.reason }}</p>
      <p><b>Start:</b> {{ leave.startDate }}</p>
      <p><b>End:</b> {{ leave.endDate }}</p>
      <p><b>Status:</b> {{ leave.status }}</p>

      <!-- 🔥 SHOW BUTTONS ONLY IF PENDING -->
      <div v-if="leave.status === 'pending'" style="margin-top:10px;">
        <button
          @click="updateStatus(leave._id, 'approved')"
          style="background:green; color:white; padding:5px; margin-right:5px;"
        >
          Approve
        </button>

        <button
          @click="updateStatus(leave._id, 'rejected')"
          style="background:red; color:white; padding:5px;"
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
    await this.getLeaves();
  },

  methods: {
    async getLeaves() {
      try {
        const res = await api.get("/leave/all");
        console.log("Leaves:", res.data);
        this.leaves = res.data;
      } catch (err) {
        console.error(err);
        alert("Error fetching leaves ❌");
      }
    },

    async updateStatus(id, status) {
      try {
        await api.post(`/leave/update/${id}`, { status });

        alert("Status updated ✅");

        // reload leaves
        await this.getLeaves();
      } catch (err) {
        console.error(err);
        alert("Error updating status ❌");
      }
    }
  }
};
</script>