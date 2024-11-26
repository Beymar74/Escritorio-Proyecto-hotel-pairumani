import { getData } from '@/lib/getData';
import { create } from 'zustand';

type Usuario = {
    id: string;
    email: string;
    name: string;
    avatar: string;
    userName: string;
    password: string;
    nacimiento: string;
    direccion: string;
};

type AuthStore = {
    usuarios: Usuario[]; 
    fetchUsuarios: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
    usuarios: [],
    fetchUsuarios: async () => {
        const data = await getData("https://673629d5aafa2ef2222fb0a8.mockapi.io/usuarios");
        set({ usuarios: data });
    },
}));