import MainLayout from "@/layout/MainLayout";
import Account from "@/pages/Admin/Account/Account";
import ViewAccount from "@/pages/Admin/Account/ViewAccount";
import Login from "@/pages/auth/Login";
import Logout from "@/pages/auth/Logout";
import Branch from "@/pages/Admin/Branch/Branch";
import Dashboard from "@/pages/Admin/Dashboard/Dashboard";
import NotFound from "@/pages/NotFound/NotFound";
import Transaction from "@/pages/Admin/Transaction/Transaction";
import ViewTransaction from "@/pages/Admin/Transaction/ViewTransaction";
import CreateUser from "@/pages/Admin/User/CreateUser";
import UpdateUser from "@/pages/Admin/User/UpdateUser";
import User from "@/pages/Admin/User/User";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";


export const Data = [
    {
        path:"/auth/login",
        Component:Login
    },
    {
        path:"/",
        Component:ProtectedRoute,
        children:[
            {
                path:"",
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
            },
        ]
            }
        ]
       
    },
    {
        path:"*",
        Component:NotFound
    }
]

