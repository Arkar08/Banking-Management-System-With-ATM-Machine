export type menuType = {
    route:string,
    text:string
}

export type UserTable = {
    _id:string,
    profile?:string,
    name:string,
    email:string,
    phoneNumber:string,
    branch:string,
    role:string,
    address:string,
    createdAt:string
}

export type CreateUser = {
    profile:string,
    name:string,
    email:string,
    phoneNumber:string,
    branchName:string,
    role:string,
    address:string
}

export type UpdateUser = {
    _id?:string,
    profile?:string,
    name?:string,
    email?:string,
    phoneNumber?:string,
    branchName?:string,
    role?:string,
    address?:string
}

export type BranchTable = {
    _id:string,
    branchName:string,
    branchLocation:string,
    createdAt:string
}

export type createBranch = {
    branchName:string,
    branchLocation:string
}

export type updateBranch = {
    _id:string,
    branchName:string,
    branchLocation:string
}

export type AtmTable = {
    _id:string,
    atmName:string,
    branchName:string,
    amount:number,
    limit:number,
    atmLocation:string,
    createdAt:string
}

export type TransactionTable = {
    _id:string,
    transactionNo:string,
    fromCustomerName:string,
    toCustomerName:string,
    transactionType:string,
    transactionTime:string,
    amount:number,
    status:TransactionStatus,
    createdAt:string
}

export type TransactionStatus = "Pending" | "Completed";

export type AccountTable = {
    _id:string,
    accountNo:string,
    customerName:string,
    accountType:string,
    balance:number,
    status:AccountStatus,
    createdAt:string
}

export type AccountStatus = "Active" | "Inactive";