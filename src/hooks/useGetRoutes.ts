import { MessageCircle, LogOut, Users2, type LucideIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export type Route = {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
  onClick?: () => void;
};

export default function useGetRoutes() {
  const pathname = usePathname();

  const routes: Route[] = useMemo(
    () => [
      {
        label: "Chat",
        href: "/chats",
        icon: MessageCircle,
        active: pathname?.includes("/chats"),
        style: {
          size: "48px",
          strokeWidth: "0.5px",
        },

        
      },
      {
        label: "Users",
        href: "/users",
        active: pathname === "/users",
        icon: Users2,
        style: {
          size: "48px",
          strokeWidth: "0.5px",
        },
      },
      { label: "Logout", href: "#", onClick: () => signOut(), icon: LogOut },
    ],
    [pathname]

  );

  return routes;
}
