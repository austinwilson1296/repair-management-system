export type furnitureType = "Upholstery" | "Case-Good"
export type RepairStatus = "In Queue" | "Started" | "Finished" | "ReWork"



export interface Job {
    jobId: number,
    product: Product,
    repair: RepairCode,
    assignedTechnician: string,
    startTime: Date | null,
    endTime: Date | null,
    repairStatus: RepairStatus,
    repairImageURLs: string[]
}

export type JobCardData = Pick<Job,"jobId" | "product" | "repair">


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

