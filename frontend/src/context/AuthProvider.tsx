import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import axios from "axios";

import {
  UserProfile,
  UserProfileForm,
} from "@/interface/userProfile.interface";
import { toast } from "sonner";
import { AuthContextType } from "@/interface/authContextType.interface";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProfile = useCallback(async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}profile`,
        {
          withCredentials: true,
        }
      );
      setUser(res.data.result);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const login = useCallback(
    async (email: string, password: string) => {
      const url = `${import.meta.env.VITE_BACKEND_URL}login`;
      await axios.post(
        url,
        { data: { email, password } },
        { withCredentials: true }
      );

      await fetchProfile();
      toast.success("Connexion réussie !");
    },
    [fetchProfile]
  );

  const register = useCallback(
    async (data: UserProfileForm) => {
      const url = `${import.meta.env.VITE_BACKEND_URL}user`;
      await axios.post(url, { data });

      await fetchProfile();
    },
    [fetchProfile]
  );

  const logout = useCallback(async () => {
    const url = `${import.meta.env.VITE_BACKEND_URL}logout`;
    await axios.post(url, {}, { withCredentials: true });
    setUser(null);
    toast.success("Déconnexion réussie !");
  }, []);

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, loading, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used inside an AuthProvider");
  }
  return context;
};
