import { InitialSetUpStoreProvider } from "@/context/initialSetUp";
import { AppRoutes } from "@/router/routes";
function App() {
  return (
    <InitialSetUpStoreProvider>
      <AppRoutes />
    </InitialSetUpStoreProvider>
  );
}

export default App;
