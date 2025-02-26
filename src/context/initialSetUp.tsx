import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface InitialSetUpState {
  URLPath: string;
  navigateTo: (path: string) => void;
  isSideBarOpen: boolean;
  setIsSideBarOpen: (status: boolean) => void;
}

// Create context (initially undefined to enforce usage inside the provider)
const UseInitialSetUpStore = React.createContext<InitialSetUpState | undefined>(
  undefined
);

// Provider Component
export const InitialSetUpStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSideBarOpen, setIsSideBarOpen] = React.useState<boolean>(true);

  // Toggle sidebar on mobile screens
  React.useEffect(() => {
    const handleResize = () => setIsSideBarOpen(window.innerWidth > 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <UseInitialSetUpStore.Provider
      value={{
        URLPath: location.pathname,
        navigateTo: navigate,
        isSideBarOpen,
        setIsSideBarOpen,
      }}
    >
      {children}
    </UseInitialSetUpStore.Provider>
  );
};

// Custom Hook to use the context
export const useInitialSetUp = () => {
  const context = React.useContext(UseInitialSetUpStore);
  if (!context) {
    throw new Error(
      "useInitialSetUp must be used within an InitialSetUpStoreProvider"
    );
  }
  return context;
};
