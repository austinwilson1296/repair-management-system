<template>
    <div class="sidebar">
    <JobCard :job-card-data="jobData"/>
    </div>
</template>

<script setup lang="ts">

import type { JobCardData,RepairCode,Product } from '../types';
import JobCard from './JobCard.vue'

const repairData: RepairCode = {
    code: "SS",
    description: "Surface Scratch",
    allottedRepairTime: 30
}

const productData: Product = {
    skuNumber: "B631-31",
    description: "A really nice dresser.",
    type: "Case-Good"
}

const jobData: JobCardData = {
  jobId: 1,
  product: productData,
  repair: repairData
}
</script>

<style scoped>
.sidebar {
  background: #ffffff;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  height: 100vh;
}

.sidebar a {
  color: #64748b; /* Slate grey */
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 12px;
}

.sidebar a:hover {
  background-color: #f8fafc;
  color: #0f172a;
}

.sidebar a.active {
  background-color: #6366f1; /* Indigo */
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}
</style>