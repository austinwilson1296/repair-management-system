<template>
    <div>
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
div{
    border: 5px;
    background-color: #E7D7C1;
}
</style>