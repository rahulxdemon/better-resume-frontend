import { createFileRoute, Outlet } from '@tanstack/react-router';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AppSidebar } from '@/features/sidebar/components/app-sidebar';
import { SIDEBAR_HEADER, SIDEBAR_NAVIGATION } from '@/features/sidebar/data/sidebar';

export const Route = createFileRoute('/r/_authenticated/_sidebar')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <TooltipProvider delayDuration={0}>
      <SidebarProvider open={false} defaultOpen={false}>
        <AppSidebar sidebarHeader={SIDEBAR_HEADER} navGroup={SIDEBAR_NAVIGATION} />
        <SidebarInset className='min-w-0'>
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
