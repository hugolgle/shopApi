import { useState, useEffect, useCallback } from "react";
import axios from "axios";

interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  role: {
    id: number;
    name: string;
  };
  commands: Array<{
    id: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  }>;
}

export const useAuth = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProfile = useCallback(async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}profile`,
        { withCredentials: true }
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
      return true;
    },
    [fetchProfile]
  );

  const logout = useCallback(async () => {
    const url = `${import.meta.env.VITE_BACKEND_URL}logout`;
    await axios.post(url, {}, { withCredentials: true });
    setUser(null);
  }, []);

  const isAuthenticated = !!user;

  return {
    user,
    login,
    logout,
    isAuthenticated,
    loading,
  };
};
