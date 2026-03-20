<template>
  <div class="p-5">
    <h2 class="text-xl mb-4">All Leaves</h2>

    <div v-for="leave in leaves" :key="leave._id" class="border p-3 m-2">
      <div class="border p-3 m-2 rounded">
  <p><b>Reason:</b> {{ leave.reason }}</p>
  <p><b>Type:</b> {{ leave.type }}</p>
  <p><b>From:</b> {{ leave.startDate }}</p>
  <p><b>To:</b> {{ leave.endDate }}</p>
  <p><b>Status:</b> {{ leave.status }}</p>

  <button @click="update(leave._id, 'Approved')"
    class="bg-green-500 text-white px-2 py-1 m-1 rounded">
    Approve
  </button>

  <button @click="update(leave._id, 'Rejected')"
    class="bg-red-500 text-white px-2 py-1 m-1 rounded">
    Reject
  </button>
</div>

      <button @click="update(leave._id, 'Approved')" class="bg-green-500 text-white p-1 m-1">Approve</button>
      <button @click="update(leave._id, 'Rejected')" class="bg-red-500 text-white p-1 m-1">Reject</button>
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
    const res = await api.get("/leave/all");
    this.leaves = res.data;
  },
  methods: {
    async update(id, status) {
      await api.post(`/leave/update/${id}`, { status });
      location.reload();
    }
  }
};
</script>