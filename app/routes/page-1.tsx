import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/page-1')({
  component: Page,
})

function Page() {
  return <div>...</div>
}
