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
import { menuItem } from "@/utils/dummy"
import image from '/image.jpg'

import { Avatar, AvatarImage } from "@/components/ui/avatar"

const SideLayout = () => {

     const route = window.location.pathname;
     const {open} = useSidebar();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
            {
                open && (
                    <div className="my-4 flex flex-col justify-center items-center">
                        <Avatar className="w-[120px] h-[120px]">
                            <AvatarImage src={image}/>
                        </Avatar>
                        <p className="mt-2 font-bold text-2xl">Admin</p>
                    </div>
                )
            }
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItem.map((item) => (
                <SidebarMenuItem key={item.text}>
                  <SidebarMenuButton asChild isActive={route === item.route ? true:false}>
                    <a href={item.route} className="my-1 py-[20px]">
                      {/* <item.icon /> */}
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
