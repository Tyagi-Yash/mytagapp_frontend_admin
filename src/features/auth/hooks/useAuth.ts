import { useSelector } from "react-redux";
import type { RootState } from "../../../app/store";

export function useAuth() {
  const token = useSelector((s: RootState) => s.auth.token);
  const user = useSelector((s: RootState) => s.auth.user);
  return { isAuthenticated: Boolean(token), user };
}
