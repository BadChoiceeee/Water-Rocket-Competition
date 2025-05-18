"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Thư viện ảnh", href: "/thu-vien-anh" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <Drawer open={isOpen} onOpenChange={onClose} direction="right">
      <DrawerContent className="h-full w-full max-w-md sm:max-w-lg">
        <div className="mx-auto h-full w-full max-w-lg px-4">
          <DrawerHeader className="flex flex-row items-center justify-between px-0 py-4">
            <div>
              <DrawerTitle className="text-xl">Điều hướng</DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </div>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <XIcon className="h-5 w-5" />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "font-bold text-sky-500"
                    : "hover:text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <DrawerFooter className="px-0 pt-2"></DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
