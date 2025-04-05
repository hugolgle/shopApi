import { useState, useEffect, useCallback } from "react";
import * as jwt from "jwt-decode";
import axios from "axios";

const TOKEN_KEY = "auth_token";
const getTokenPayload = (token: string) => {
  try {
    const decoded = jwt.jwtDecode(token);
    console.log(decoded);
    return decoded;
  } catch (error) {
    console.error("Erreur de décodage du token", error);
    return null;
  }
};

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isTokenExpiredFlag, setIsTokenExpiredFlag] = useState<boolean>(false);

  const isTokenExpired = useCallback(() => {
    if (token) {
      const payload = getTokenPayload(token);
      if (payload && payload.exp) {
        const expirationDate = new Date(payload.exp * 1000);
        return expirationDate < new Date();
      }
    }
    return false;
  }, [token]);

  useEffect(() => {
    const storedToken = sessionStorage.getItem(TOKEN_KEY);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token && isTokenExpired()) {
      setIsTokenExpiredFlag(true);
      logout();
    } else {
      setIsTokenExpiredFlag(false);
    }
  }, [token, isTokenExpired]);

  const login = useCallback(async (email: string, password: string) => {
    const url = import.meta.env.VITE_BACKEND_URL + "login";
    const response = await axios.post(url, { data: { email, password } });
    const token = response.data.result;

    sessionStorage.setItem(TOKEN_KEY, token);
    setToken(token);

    return true;
  }, []);

  const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setIsTokenExpiredFlag(false);
  };

  const isAuthenticated = !!token && !isTokenExpiredFlag;

  const data = useCallback(() => {
    if (token) {
      const payload = getTokenPayload(token);
      if (payload) {
        return payload;
      }
    }
    return null;
  }, [token]);

  return { token, login, logout, isAuthenticated, data };
};
