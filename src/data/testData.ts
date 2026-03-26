import type { Product,Job,RepairCode } from '@/types'


export const product1: Product = {
    skuNumber: 'B697-31',
    description: 'Tall Dresser',
    type : "Case-Good"
}
export const product2: Product = {
    skuNumber: 'W201-11',
    description: 'Entertainment Stand',
    type : "Case-Good"
}
export const product3: Product = {
    skuNumber: '8670341',
    description: 'RAF Sofa',
    type : "Upholstery"
}

export const repair1: RepairCode = {
    code: "SS",
    allottedRepairTime: 15,
    description: "surface scratch"
}
export const repair2: RepairCode = {
    code: "CC",
    allottedRepairTime: 30,
    description: "crushed corner"
}
export const repair3: RepairCode = {
    code: "UH",
    allottedRepairTime: 30,
    description: "hole in fabric"
}

export const job1: Job = {
    jobId: 1,
    product: product1,
    repair: repair1,
    assignedTechnician: 'Austin',
    startTime: null,
    endTime: null,
    repairStatus: "In Queue",
    repairImageURLs: []
}
export const job2: Job = {
    jobId: 2,
    product: product2,
    repair: repair2,
    assignedTechnician: 'Austin',
    startTime: null,
    endTime: null,
    repairStatus: "In Queue",
    repairImageURLs: []
}
export const job3: Job = {
    jobId: 3,
    product: product3,
    repair: repair3,
    assignedTechnician: 'Austin',
    startTime: null,
    endTime: null,
    repairStatus: "In Queue",
    repairImageURLs: []
}

export const repairJobs: Job[] = [job1,job2,job3]
