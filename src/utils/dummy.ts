import type { AccountTable, AtmTable, BranchTable, menuType, TransactionTable, UserTable } from "./type"

export const menuItem:menuType[] = [
    {
        route:"/dashboard",
        text:"Dashboard",
        image:"/images/dashboard.svg"
    },
    {
        route:"/user",
        text:"Manage User",
        image:"/images/person.svg"
    },
    {
        route:"/account",
        text:"Manage Account",
        image:"/images/account.svg"
    },
    {
        route:"/branch",
        text:"Manage Branch",
        image:"/images/branch.svg"
    },
    {
        route:"/transaction",
        text:"Transaction",
        image:"/images/transaction.svg"
    },
    {
        route:"/logout",
        text:"Logout",
        image:"/images/logout.svg"
    }
]

export const agentMenuItem:menuType[]=[
   {
        route:"/agent/dashboard",
        text:"Dashboard",
        image:"/images/dashboard.svg"
    },
    {
        route:"/agent/user",
        text:"Manage User",
        image:"/images/person.svg"
    },
    {
        route:"/agent/account",
        text:"Manage Account",
        image:"/images/account.svg"
    },
    {
        route:"/agent/transaction",
        text:"Transaction",
        image:"/images/transaction.svg"
    },
    {
        route:"/logout",
        text:"Logout",
        image:"/images/logout.svg"
    }
]

export const userDummy:UserTable[] = [
  {
    _id:"1",
     profile:"",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phoneNumber: "+1-555-1234",
    branch: "New York",
    role: "Manager",
    address: "123 Main St, New York, NY",
    createdAt: "2024-01-15T10:30:00Z",
    cardNo:{
      cardNo:''
    }
  },
  {
    _id:"2",
     profile:"",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    phoneNumber: "+1-555-2345",
    branch: "Los Angeles",
    role: "Developer",
    address: "456 Elm St, Los Angeles, CA",
    createdAt: "2024-02-10T09:45:00Z",
     cardNo:{
      cardNo:''
    }
  },
  {
    _id:"3",
     profile:"",
    name: "Carol White",
    email: "carol.white@example.com",
    phoneNumber: "+1-555-3456",
    branch: "Chicago",
    role: "HR",
    address: "789 Oak St, Chicago, IL",
    createdAt: "2024-03-12T14:20:00Z",
     cardNo:{
      cardNo:''
    }
  },
  {
    _id:"4",
     profile:"",
    name: "Dav_id Brown",
    email: "dav_id.brown@example.com",
    phoneNumber: "+1-555-4567",
    branch: "Houston",
    role: "Sales",
    address: "321 Pine St, Houston, TX",
    createdAt: "2024-04-05T12:15:00Z",
     cardNo:{
      cardNo:''
    }
  },
  {
    _id:"5",
     profile:"",
    name: "Emma Davis",
    email: "emma.davis@example.com",
    phoneNumber: "+1-555-5678",
    branch: "Phoenix",
    role: "Admin",
    address: "654 Cedar St, Phoenix, AZ",
    createdAt: "2024-05-01T11:10:00Z",
     cardNo:{
      cardNo:''
    }
  },
  {
    _id:"6",
     profile:"",
    name: "Frank Wilson",
    email: "frank.wilson@example.com",
    phoneNumber: "+1-555-6789",
    branch: "Philadelphia",
    role: "Developer",
    address: "987 Spruce St, Philadelphia, PA",
    createdAt: "2024-05-15T08:30:00Z",
     cardNo:{
      cardNo:''
    }
  },
  {
    _id:"7",
     profile:"",
    name: "Grace Lee",
    email: "grace.lee@example.com",
    phoneNumber: "+1-555-7890",
    branch: "San Antonio",
    role: "Manager",
    address: "111 Maple St, San Antonio, TX",
    createdAt: "2024-06-01T13:00:00Z",
     cardNo:{
      cardNo:''
    }
  },
  {
    _id:"8",
     profile:"",
    name: "Henry Clark",
    email: "henry.clark@example.com",
    phoneNumber: "+1-555-8901",
    branch: "San Diego",
    role: "Support",
    address: "222 Birch St, San Diego, CA",
    createdAt: "2024-06-02T15:30:00Z",
     cardNo:{
      cardNo:''
    }
  },
  {
    _id:"9",
     profile:"",
    name: "Ivy Lewis",
    email: "ivy.lewis@example.com",
    phoneNumber: "+1-555-9012",
    branch: "Dallas",
    role: "HR",
    address: "333 Walnut St, Dallas, TX",
    createdAt: "2024-06-03T16:45:00Z",
     cardNo:{
      cardNo:''
    }
  },
  {
    _id:"10",
    profile:"",
    name: "Jack Martin",
    email: "jack.martin@example.com",
    phoneNumber: "+1-555-0123",
    branch: "San Jose",
    role: "Admin",
    address: "444 Chestnut St, San Jose, CA",
    createdAt: "2024-06-04T10:20:00Z",
     cardNo:{
      cardNo:''
    }
  }
]

export const branchDummy:BranchTable[] = [
  {
    _id:"1",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"2",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"3",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"4",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"5",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"6",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"7",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"8",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"9",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"10",
    branchName:"Insein",
    branchLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  }
]

export const atmDummy:AtmTable[] = [
  {
    _id:"1",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"2",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"3",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"4",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"5",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"6",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"7",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"8",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"9",
    atmName:"inseinATM",
    branchName:"Insein",
    amount:10000,
    limit:100000,
    atmLocation:"Insein",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"10",
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
    _id:"1",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Pending",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"2",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    _id:"3",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    _id:"4",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    _id:"5",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Aung Aung",
    transactionType:"Transfer",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    _id:"6",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    _id:"7",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    _id:"8",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:"Ko Ko",
    transactionType:"Deposit",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
   {
    _id:"9",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:'',
    transactionType:"Withdraw",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  },
  {
    _id:"10",
    transactionNo:"1293948484",
    fromCustomerName:"Arkar",
    toCustomerName:'',
    transactionType:"Withdraw",
    transactionTime:"2024-06-04T10:20:00Z",
    amount:10000,
    status:"Completed",
    createdAt:"2024-06-04T10:20:00Z"
  }
]

export const accountDummy:AccountTable[] = [
  {
    _id:"1",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z",
    qrCode:''
  },
  {
    _id:"2",
    accountNo:"1293994484",
    customerName:"Ko Ko",
    accountType:"checking",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z",
    qrCode:''
  },
  {
    _id:"3",
    accountNo:"1293994484",
    customerName:"Kyaw Kyaw",
    accountType:"saving",
    balance:10000,
    status:"Inactive",
    createdAt:"2024-06-04T10:20:00Z",
    qrCode:''
  },
  {
    _id:"4",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z",
    qrCode:''
  },
  {
    _id:"5",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z",
    qrCode:''
  },
  {
    _id:"6",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z",
    qrCode:''
  },
  {
    _id:"7",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z",
    qrCode:''
  },
  {
    _id:"8",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z",
    qrCode:''
  },
  {
    _id:"9",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z",
    qrCode:''
  },
   {
    _id:"10",
    accountNo:"1293994484",
    customerName:"Arkar",
    accountType:"saving",
    balance:10000,
    status:"Active",
    createdAt:"2024-06-04T10:20:00Z",
    qrCode:''
  },
]