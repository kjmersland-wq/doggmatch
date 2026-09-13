import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/{-$lang}/get-a-dog")({
  component: () => <Outlet />,
});
