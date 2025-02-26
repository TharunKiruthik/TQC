import {
  ArrowLeftIcon,
  DarkModeIcon,
  LightModeIcon,
  LogoutIcon,
} from "@/assets/icons";
import { useInitialSetUp } from "@/context/initialSetUp";
import { cn, Divider } from "@heroui/react";
import React, { useMemo } from "react";

export type NavItemProps = {
  id?: string;
  key: string;
  icon: React.ReactNode;
  route?: string;
};

export type SidebarProps = {
  items?: NavItemProps[];
  onSideBarChange: (data: NavItemProps) => void; // Callback for navigation change
  onPressColorMode?: () => void; // Toggle dark mode callback
  onPressLogout?: () => void; // Logout callback
  isColorMode?: boolean;
  isDarkMode?: boolean;
  className?: string;
  Logo?: React.ReactNode | string;
  profileImage?: React.ReactNode | string;
};

export const Sidebar = (props: SidebarProps) => {
  const {
    className,
    items = [],
    onSideBarChange = () => {},
    onPressColorMode = () => {},
    onPressLogout = () => {},
    profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&s",
    Logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12mA3zSzz_9SWnLm4B_0OocWAQhpAnaAzYA&s",
    isColorMode,
    isDarkMode,
  } = props;
  const { URLPath, isSideBarOpen, setIsSideBarOpen } = useInitialSetUp();

  // Sidebar action items (e.g., logout, dark mode toggle)
  const actionItems = useMemo(
    () =>
      [
        !isColorMode && {
          key: "colorMode",
          icon: isDarkMode ? <LightModeIcon /> : <DarkModeIcon />,
          onPress: onPressColorMode,
        },
        { key: "logout", icon: <LogoutIcon />, onPress: onPressLogout },
      ].filter(Boolean) as {
        key: string;
        icon: React.ReactNode;
        onPress?: () => void;
      }[],
    [onPressLogout, onPressColorMode]
  );

  return (
    <div className="relative">
      <div
        className={cn(
          "absolute bg-secondary w-6 h-6 rounded-full top-7 right-0 cursor-pointer z-10 border-3 border-background",
          isSideBarOpen
            ? "md:translate-x-[14px] translate-x-[78px]"
            : "rotate-180 translate-x-9 "
        )}
        role="button"
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
      >
        <div className="absolute top-[-5px] left-[-3px] text-background">
          <ArrowLeftIcon />
        </div>
      </div>
      <div
        className={cn(
          "transition-opacity duration-300 ease-in-out animate-fade-in absolute md:static",
          !isSideBarOpen && "hidden"
        )}
      >
        <div
          className="absolute bg-opacity-30 h-full w-[80vw] left-16 md:hidden block cursor-pointer"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          role="button"
        />
        <div
          className={cn(
            "h-screen gap-3 bg-background w-[4rem] flex flex-col items-center border-r-2 border-background-foreground z-10",
            className
          )}
        >
          {/* Sidebar Logo */}
          <div className="px-2 pb-1 pt-3.5 shrink-0 relative">
            <img
              alt="L"
              className="w-11 h-11 rounded-full"
              src={typeof Logo === "string" ? Logo : undefined}
            />
          </div>

          {/* Sidebar Navigation Items */}
          <div className="grow flex flex-col items-center gap-3">
            <Divider className="mb-1" />
            {items.map((item) => (
              <div key={item.key} className="relative">
                <div
                  className={cn(
                    "rounded-xl h-[2.75rem] w-[2.7rem] flex justify-center items-center text-content1",
                    URLPath === item.route && "bg-secondary bg-opacity-35"
                  )}
                  role="button"
                  onClick={() => onSideBarChange(item)}
                >
                  {item.icon}
                </div>
                <div
                  className={cn(
                    "absolute bg-secondary w-3.5 h-3.5 rounded-full top-[40%] right-0 translate-x-[18px] hidden",
                    URLPath === item.route && "block"
                  )}
                ></div>
              </div>
            ))}
          </div>

          {/* Sidebar Action Items */}
          <div>
            <Divider />
            <div className="w-full py-3 flex flex-col items-center gap-4">
              {actionItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl h-[2.75rem] w-[2.7rem] flex justify-center items-center bg-secondary bg-opacity-35 text-content1"
                  role="button"
                  onClick={() => item?.onPress?.()}
                >
                  {item.icon}
                </div>
              ))}
              <Divider />
            </div>
            {/* Profile Image */}
            <div className="py-3.5 flex justify-center">
              <img
                alt="P"
                className="rounded-full w-[46px] h-[46px] bg-secondary bg-opacity-35"
                src={
                  typeof profileImage === "string" ? profileImage : undefined
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
