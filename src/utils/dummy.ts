import type { AccountTable, AtmTable, BranchTable, menuType, TransactionTable, UserTable } from "./type"

export const menuItem:menuType[] = [
    {
        route:"/dashboard",
        text:"Dashboard"
    },
    {
        route:"/user",
        text:"Manage User"
    },
    {
        route:"/account",
        text:"Manage Account"
    },
    {
        route:"/branch",
        text:"Manage Branch"
    },
    // {
    //     route:"/atm",
    //     text:"Manage ATM Machine"
    // },
    {
        route:"/transaction",
        text:"Transaction"
    },
    {
        route:"/logout",
        text:"Logout"
    }
]

export const userDummy:UserTable[] = [
  {
    id:"1",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phoneNumber: "+1-555-1234",
    branchName: "New York",
    role: "Manager",
    address: "123 Main St, New York, NY",
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    id:"2",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    phoneNumber: "+1-555-2345",
    branchName: "Los Angeles",
    role: "Developer",
    address: "456 Elm St, Los Angeles, CA",
    createdAt: "2024-02-10T09:45:00Z"
  },
  {
    id:"3",
    name: "Carol White",
    email: "carol.white@example.com",
    phoneNumber: "+1-555-3456",
    branchName: "Chicago",
    role: "HR",
    address: "789 Oak St, Chicago, IL",
    createdAt: "2024-03-12T14:20:00Z"
  },
  {
    id:"4",
    name: "David Brown",
    email: "david.brown@example.com",
    phoneNumber: "+1-555-4567",
    branchName: "Houston",
    role: "Sales",
    address: "321 Pine St, Houston, TX",
    createdAt: "2024-04-05T12:15:00Z"
  },
  {
    id:"5",
    name: "Emma Davis",
    email: "emma.davis@example.com",
    phoneNumber: "+1-555-5678",
    branchName: "Phoenix",
    role: "Admin",
    address: "654 Cedar St, Phoenix, AZ",
    createdAt: "2024-05-01T11:10:00Z"
  },
  {
    id:"6",
    name: "Frank Wilson",
    email: "frank.wilson@example.com",
    phoneNumber: "+1-555-6789",
    branchName: "Philadelphia",
    role: "Developer",
    address: "987 Spruce St, Philadelphia, PA",
    createdAt: "2024-05-15T08:30:00Z"
  },
  {
    id:"7",
    name: "Grace Lee",
    email: "grace.lee@example.com",
    phoneNumber: "+1-555-7890",
    branchName: "San Antonio",
    role: "Manager",
    address: "111 Maple St, San Antonio, TX",
    createdAt: "2024-06-01T13:00:00Z"
  },
  {
    id:"8",
    name: "Henry Clark",
    email: "henry.clark@example.com",
    phoneNumber: "+1-555-8901",
    branchName: "San Diego",
    role: "Support",
    address: "222 Birch St, San Diego, CA",
    createdAt: "2024-06-02T15:30:00Z"
  },
  {
    id:"9",
    name: "Ivy Lewis",
    email: "ivy.lewis@example.com",
    phoneNumber: "+1-555-9012",
    branchName: "Dallas",
    role: "HR",
    address: "333 Walnut St, Dallas, TX",
    createdAt: "2024-06-03T16:45:00Z"
  },
  {
    id:"10",
    name: "Jack Martin",
    email: "jack.martin@example.com",
    phoneNumber: "+1-555-0123",
    branchName: "San Jose",
    role: "Admin",
    address: "444 Chestnut St, San Jose, CA",
    createdAt: "2024-06-04T10:20:00Z"
  }
]

export const branchDummy:BranchTable[] = [
  {
    id:"1",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"2",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"3",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"4",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"5",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"6",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"7",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"8",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"9",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"10",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  }
]

export const atmDummy:AtmTable[] = [
  {
    id:"1",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"2",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"3",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"4",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"5",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"6",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"7",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"8",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"9",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"10",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
]

export const transactionDummy:TransactionTable[] = [
  {
    id:"1",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    atm:null,
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Pending",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"2",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    atm:null,
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    id:"3",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    atm:null,
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    id:"4",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    atm:null,
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    id:"5",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Aung Aung",
    atm:null,
    transactionType:"Transfer",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    id:"6",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    atm:null,
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    id:"7",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    atm:null,
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    id:"8",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    atm:null,
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    id:"9",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:null,
    atm:"Insein",
    transactionType:"Withdraw",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"10",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:null,
    atm:"Insein",
    transactionType:"Withdraw",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  }
]

export const accountDummy:AccountTable[] = [
  {
    id:"1",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"2",
    accountNo:"1293994484",
    customerName:"Ko Ko",
    accountType:"checking",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"3",
    accountNo:"1293994484",
    customerName:"Kyaw Kyaw",
    accountType:"saving",
    balance:10000,
    status:"Inactive",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"4",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"5",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"6",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"7",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"8",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    id:"9",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    id:"10",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z"
  },
]