import {
  DashboardIcon,
  LooksOneIcon,
  LooksTwoIcon,
  PeopleAltIcon,
  PersonIcon,
} from "@/assets/icons";
import { useInitialSetUp } from "@/context/initialSetUp";
import { getSidebarMenu, useDarkMode } from "@/utils/sideMenu";
import React from "react";
import { NavItemProps, Sidebar } from "./sidebar";

export const WithSideBar = () => {
  const { navigateTo } = useInitialSetUp();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const onSideBarChange = (data: NavItemProps) => {
    if (data?.route) {
      navigateTo(data?.route);
    }
  };

  const handleLogOut = () => {
    navigateTo("/signIn");
  };

  const getIcon = (key: string) => {
    switch (key) {
      case "Dashboard":
        return <DashboardIcon />;
      case "page1":
        return <LooksOneIcon />;
      case "student":
        return <PeopleAltIcon />;
      case "admin":
        return <PersonIcon />;
      case "page2":
        return <LooksTwoIcon />;
      default:
        return <></>;
    }
  };

  const defaultItems = React.useMemo(
    () =>
      getSidebarMenu()?.map((item) => ({
        ...item,
        icon: getIcon(item?.key),
      })),
    []
  );

  return (
    <>
      <Sidebar
        items={defaultItems}
        onSideBarChange={onSideBarChange}
        onPressColorMode={toggleDarkMode}
        onPressLogout={handleLogOut}
        isDarkMode={isDarkMode}
      />
    </>
  );
};
