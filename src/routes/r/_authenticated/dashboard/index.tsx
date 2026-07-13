import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/r/_authenticated/dashboard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/r/_authenticated/dashboard/"!</div>;
}
