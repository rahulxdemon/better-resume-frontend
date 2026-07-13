import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/r/_authenticated/_sidebar/resumes/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/r/_authenticated/resumes/"!</div>
}
