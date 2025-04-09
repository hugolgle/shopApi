import { UserProfile, UserProfileForm } from "./userProfile.interface";

export interface AuthContextType {
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  loading: boolean;
  register: (data: UserProfileForm) => Promise<void>;
}
