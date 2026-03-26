<template>
    <div class="sidebar" >
      <div v-for="job in repairJobs" :keys="job.jobId">
        <JobCard :job-data="job" />
      </div>
        
    </div>
</template>

<script setup lang="ts">

import { repairJobs } from '@/data/testData';
import JobCard from './JobCard.vue'


</script>

<style scoped>
.sidebar {
  background: #433A3F;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  ;
  
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