import { create } from "zustand"

interface MobileMenuState {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useMobileMenuStore = create<MobileMenuState>((set) => ({
  open: false,
  setOpen: (open) => set({ open })
}))
