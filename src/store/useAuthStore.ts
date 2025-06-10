import { Session, User } from '@supabase/supabase-js';
import { create } from 'zustand';

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  session: Session | null;
  setSession: (session: Session) => void;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useAuthStore = create<UserState>()((set) => ({
  user: null,
  isLoggedIn: false,
  session: null,
  setUser: (user: User) => {
    set({ user, isLoggedIn: true });
  },
  setSession(session: Session) {
    set({ session });
  },

  clearUser: () => set({ user: null, isLoggedIn: false, session: null }),
}));

export default useAuthStore;
