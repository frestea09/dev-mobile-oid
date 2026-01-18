import { create } from 'zustand';

interface User {
    name: string;
    email: string;
    phone: string;
    bpjs: string;
    address: string;
    birthDate: string;
    gender: string;
    allergies?: string;
    bloodType?: string;
    medicalHistory?: string;
    nik?: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    registeredUsers: (User & { password?: string; username?: string })[];
    login: (userData: User) => void;
    register: (userData: User & { password?: string; username?: string }) => void;
    logout: () => void;
    updateProfile: (userData: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null, // Start null to force login
    isAuthenticated: false,
    registeredUsers: [],
    login: (userData) => set({ user: userData, isAuthenticated: true }),
    register: (userData) => set((state) => ({
        registeredUsers: [...state.registeredUsers, userData]
    })),
    logout: () => set({ user: null, isAuthenticated: false }),
    updateProfile: (userData) => set((state) => ({
        user: state.user ? { ...state.user, ...userData } : null
    })),
}));
