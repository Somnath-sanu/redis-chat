import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Preferences = {
  soundEnabled: boolean;
  setSoundEnabled: (soundEnabled: boolean) => void;
};

export const usePreferences = create<Preferences>()(
  persist(
    (set) => ({
      soundEnabled: true,
      setSoundEnabled: (soundEnabled: boolean) => set({ soundEnabled }),
    }),
    {
      name: "sound",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
