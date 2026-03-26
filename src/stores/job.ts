import { defineStore } from "pinia";
import { ref } from 'vue' 
import type { Job } from "@/types";


export const useJobStore = defineStore('job', ()=>{
    
    const storedJob = ref<Job | null>(null)

    function setJob(job: Job) {
       storedJob.value = job

    }

    return{setJob, storedJob}
})