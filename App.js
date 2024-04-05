import AppLayout from "./AppLayout";
import { UserProvider } from "./app/contexts/UserContext";

export default function App() {
  return (
    <UserProvider>
      <AppLayout />
    </UserProvider>
  );
}
