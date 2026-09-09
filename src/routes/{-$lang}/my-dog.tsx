import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/{-$lang}/my-dog")({
  component: () => <Outlet />,
});
