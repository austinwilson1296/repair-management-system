<template>
    <div class="job-container">
        <header>Job ID: {{ jobCardData.jobId }}</header>
        <div class="">
            <h3>Item SKU: {{ jobCardData.product.skuNumber }}</h3>
        </div>
        <div class="repair-data">
            <p>Repair Code: {{ jobCardData.repair.code }}</p>
            <p>Repair Time: {{ jobCardData.repair.allottedRepairTime }}</p>
        </div>
        
    </div>
</template>

<script setup lang="ts">
import type { JobCardData } from '@/types';

interface Props{
    jobCardData: JobCardData
}


const props = defineProps<Props>();



</script>

<style scoped>

.job-container{
    background: white;
    border-radius: 30px;
    border: solid;
    display: grid;
    grid-template-rows: 40px;
    padding: 20px;
    width: 200px;
    height: 150px;
    box-shadow: 2px 2px 2px #DEA47E;
    margin: 10px
    
    
}
header{
    text-align: center;
}
.repair-data{
    display: flex;
    justify-content: space-around;
    
}

</style>