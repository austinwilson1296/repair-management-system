<template>
    <div class="sidebar">
    <JobCard 
        :job-id="data.jobId" 
        :product-s-k-u="data.productSKU"
        :repair-code="data.repairCode"
        :alloted-repair-time="data.allotedRepairTime"/>
    </div>
</template>

<script setup lang="ts">

import type { JobCardData } from '../types';
import JobCard from './JobCard.vue'

const data: JobCardData = {
  jobId: 1,
  productSKU: 'B697-31',
  repairCode: 'SS',
  allotedRepairTime: 20
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