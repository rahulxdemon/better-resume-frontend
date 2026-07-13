import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/r/_authenticated/resumes/$resume_id/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/r/_authenticated/resumes/$resume_id/"!</div>;
}
