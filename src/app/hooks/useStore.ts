import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StoreState } from "../typescript/interface/auth.interface";

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      user: null,
      allUsers: [],
      history: [],

      registerUser: (newUser) =>
        set((state) => ({
          allUsers: [...state.allUsers, newUser],
        })),

      login: (email) => set({ user: email }),

      logout: () => set({ user: null }),

      saveInvoice: (invoice) =>
        set((state) => ({
          history: [invoice, ...state.history],
        })),
    }),
    { name: "global-exam-storage" },
  ),
);
