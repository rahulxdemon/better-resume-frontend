import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/r/_authenticated/_sidebar/jobs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/r/_authenticated/jobs/"!</div>
}
