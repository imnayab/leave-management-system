<template>
  <div style="padding: 20px;">
    <h2>All Leaves</h2>

    <div v-if="leaves.length === 0">
      No leave requests found
    </div>

    <div v-for="leave in leaves" :key="leave._id" style="border:1px solid gray; margin:10px; padding:10px;">
      <p><b>User:</b> {{ leave.userId }}</p>
      <p><b>Type:</b> {{ leave.type }}</p>
      <p><b>Reason:</b> {{ leave.reason }}</p>
      <p><b>Start:</b> {{ leave.startDate }}</p>
      <p><b>End:</b> {{ leave.endDate }}</p>
      <p><b>Status:</b> {{ leave.status }}</p>
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
      const res = await api.get("/leave/all");
      console.log("Leaves:", res.data); // DEBUG
      this.leaves = res.data;
    } catch (err) {
      console.error(err);
    }
  }
};
</script>