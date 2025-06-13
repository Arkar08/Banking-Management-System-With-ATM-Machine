import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { agentMenuItem, menuItem } from "@/utils/dummy"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import type { menuType } from "@/utils/type"
import { useNavigate } from "react-router-dom"
import { useMutateUser } from "@/hooks/useUser"

const SideLayout = () => {

     const route = window.location.pathname;
     const {open} = useSidebar();
     const [menuList,setMenuList] = useState<menuType[]>([])
     const navigate = useNavigate()
     const userId = localStorage.getItem("userId")
     const {getUserId} = useMutateUser({id:userId as string})
     const {data:user} = getUserId;

     useEffect(()=>{
      const role = localStorage.getItem('role');
      if(role === 'Admin'){
        setMenuList(menuItem)
      }else if(role === 'Agent'){
        setMenuList(agentMenuItem)
      }else{
        navigate('auth/login')
      }
     },[menuList,navigate])

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
            {
                open && (
                    <div className="my-4 flex flex-col justify-center items-center">
                        <Avatar className="w-[100px] h-[100px] shadow-lg">
                            <AvatarImage src={user?.profile} className="object-cover"/>
                        </Avatar>
                        <p className="mt-2 font-bold text-2xl">{user?.name}</p>
                    </div>
                )
            }
          <SidebarGroupContent>
            <SidebarMenu>
              {menuList.map((item) => (
                <SidebarMenuItem key={item.text}>
                  <SidebarMenuButton asChild isActive={route === item.route ? true:false}>
                    <a href={item.route} className="my-1 py-[20px]">
                      {/* <item.icon /> */}
                      <img src={item.image} alt="sidebarImage" />
                      <span>{item.text}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default SideLayout
