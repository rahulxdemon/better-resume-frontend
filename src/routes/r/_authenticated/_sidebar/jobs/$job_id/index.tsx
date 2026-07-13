import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/r/_authenticated/_sidebar/jobs/$job_id/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/r/_authenticated/jobs/$job_id/"!</div>;
}
