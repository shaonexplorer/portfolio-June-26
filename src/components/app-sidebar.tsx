import * as React from "react";

import { Sidebar, SidebarRail } from "@/components/ui/sidebar";
import Chat from "@/modules/chat/Chat";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="z-50">
      <Chat />

      <SidebarRail />
    </Sidebar>
  );
}
