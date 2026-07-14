import { createFileRoute } from '@tanstack/react-router';
import { BaseJobs } from '@/features/jobs/components/base-jobs';

export const Route = createFileRoute('/r/_authenticated/_sidebar/jobs/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='py-4'>
      <BaseJobs />
    </div>
  );
}
