import Navigator from "@/navigator";
import { AuthProvider } from "@/providers/authProvider";

export default () => {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
};
