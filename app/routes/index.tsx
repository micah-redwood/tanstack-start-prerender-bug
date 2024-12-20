import { createFileRoute, Link, linkOptions } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const link = linkOptions({ to: "/page-1/" });
  return <Link {...link}>Page 1</Link>;
}
