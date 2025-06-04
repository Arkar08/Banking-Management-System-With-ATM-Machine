export type menuType = {
    route:string,
    text:string
}

export type UserTable = {
    name:string,
    email:string,
    phoneNumber:string,
    branchName:string,
    role:string,
    address:string,
    createdAt:string
}

export type BranchTable = {
    branchName:string,
    branchLocation:string,
    createdAt:string
}

export type AtmTable = {
    atmName:string,
    branchName:string,
    amount:number,
    limit:number,
    atmLocation:string,
    createdAt:string
}

export type TransactionTable = {
    transactionNo:string,
    fromCustomerName:string,
    toCustomerName:string | null,
    atm:string | null,
    transactionType:string,
    transactionTime:string,
    amount:number,
    status:TransactionStatus,
    createdAt:string
}

export type TransactionStatus = "Pending" | "Completed";

export type AccountTable = {
    accountNo:string,
    customerName:string,
    accountType:string,
    balance:number,
    status:AccountStatus,
    createdAt:string
}

export type AccountStatus = "Active" | "Inactive";