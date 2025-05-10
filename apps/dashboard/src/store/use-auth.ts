import { create } from 'zustand';
import { axiosClient } from '@/services/axios';
import { createJSONStorage, persist } from 'zustand/middleware';
import cookiesStorage from '@/helpers/cookie-storage';
import { User } from '@/types/User';

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

type AuthStore = {
  isAuthenticated: boolean;
  accessToken: string | null;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
};

export const useAuth = create(
  persist<AuthStore>(
    (set) => ({
      accessToken: null,
      isAuthenticated: false,

      login: async (payload: LoginPayload) => {
        const response = await axiosClient.post<{ 
          access_token?: string; 
          user?: { role: string };
        }>(
          '/auth/sign-in',
          payload
        );

        const userRole = response.data.user?.role;

        if(userRole !== 'Admin') {
          throw new Error('Acesso negado. Apenas administradores podem acessar a dashboard.');
        }

        set({ isAuthenticated: true, accessToken: response.data.access_token });
      },
      register: async (payload: RegisterPayload) => {
        await axiosClient.post<User>(
          '/users/sign-up',
          payload
        );

        const loginResponse = await axiosClient.post<{ access_token?: string }>(
          '/auth/sign-in',
          payload
        );

        set({ isAuthenticated: true, accessToken: loginResponse.data.access_token });
      },
      logout: async () => {
        set({ isAuthenticated: false, accessToken: null });
      },
    }),
    {
      name: 'lab-quest-auth',
      storage: createJSONStorage(() => cookiesStorage),
    }
  )
);
