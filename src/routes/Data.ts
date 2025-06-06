import MainLayout from "@/layout/MainLayout";
import Account from "@/pages/Account/Account";
import ViewAccount from "@/pages/Account/ViewAccount";
// import ATMMachine from "@/pages/ATM/ATMMachine";
// import CreateATM from "@/pages/ATM/CreateATM";
// import UpdateATM from "@/pages/ATM/UpdateATM";
import Login from "@/pages/auth/Login";
import Logout from "@/pages/auth/Logout";
import Branch from "@/pages/Branch/Branch";
import Dashboard from "@/pages/Dashboard/Dashboard";
import NotFound from "@/pages/NotFound/NotFound";
import Transaction from "@/pages/Transaction/Transaction";
import ViewTransaction from "@/pages/Transaction/ViewTransaction";
import CreateUser from "@/pages/User/CreateUser";
import UpdateUser from "@/pages/User/UpdateUser";
import User from "@/pages/User/User";


export const Data = [
    {
        path:"/auth/login",
        Component:Login
    },
    {
        path:"/",
        Component:MainLayout,
        children:[
            {
                path:"dashboard",
                Component:Dashboard
            },
            {
                path:"user",
                Component:User,
            },
            {
                path:"user/create",
                Component:CreateUser
            },
            {
                path:"user/:id",
                Component:UpdateUser
            },
            {
                path:"account",
                Component:Account
            },
            {
                path:"account/:id",
                Component:ViewAccount
            },
            {
                path:"branch",
                Component:Branch
            },
            // {
            //     path:"atm",
            //     Component:ATMMachine
            // },
            // {
            //     path:"atm/create",
            //     Component:CreateATM
            // },
            // {
            //     path:"atm/:id",
            //     Component:UpdateATM
            // },
            {
                path:"transaction",
                Component:Transaction
            },
            {
                path:"transaction/:id",
                Component:ViewTransaction
            },
            {
                path:"logout",
                Component:Logout
            }
        ]
    },
    {
        path:"*",
        Component:NotFound
    }
]

