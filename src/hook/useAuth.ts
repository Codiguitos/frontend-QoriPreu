import { useState } from "react";
import { loginRequest, registerRequest } from "../api/authApi";
import type { LoginPayload, RegisterPayload } from "../api/authApi";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (rol: string, data: LoginPayload) => {
    setLoading(true);
    try {
      const res = await loginRequest(data);
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterPayload) => {
    setLoading(true);
    try {
      const res = await registerRequest(data);
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  return { loading, login, register };
};
