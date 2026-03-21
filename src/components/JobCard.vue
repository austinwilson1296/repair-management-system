<template>
    <div class="job-container">
        <header>Job ID: {{ jobId }}</header>
        <div class="">
            <h3>Item SKU: {{ productSKU }}</h3>
        </div>
        <div class="repair-data">
            <p>Repair Code: {{ repairCode }}</p>
            <p>Repair Time: {{ allotedRepairTime }}</p>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import type { JobCardData } from '@/types';


const props = defineProps<JobCardData>();



</script>

<style scoped>

.job-container{
    border-radius: 30px;
    border: solid;
    display: grid;
    grid-template-rows: 40px;
    padding: 20px;
    width: 200px;
    height: 150px;
    box-shadow: 0 0 0 2.5px#D9D9D9;
    margin: 10px;
    
}
header{
    text-align: center;
}
.repair-data{
    display: flex;
    justify-content: space-around;
    margin: 10px;
}

</style>