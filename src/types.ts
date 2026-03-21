export type furnitureType = "Upholstery" | "Case-Good"
export type RepairStatus = "In Queue" | "Started" | "Finished"



export interface Job {
    jobId: number,
    product: Product,
    repair: RepairCode,
    assignedTechnician: string,
    startTime: Date,
    endTime: Date,
    repairStatus: RepairStatus
}

export interface Product {
    skuNumber: string,
    description: string,
    type: furnitureType

}

export interface RepairCode{
    code: string,
    description: string,
    allottedRepairTime: number
}