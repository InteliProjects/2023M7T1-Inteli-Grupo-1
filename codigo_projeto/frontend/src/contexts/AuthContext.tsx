/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { successToast } from '../components/Toasts';

// Definindo o formato do contexto de autenticação
interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

// Criando o contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Componente para redirecionar automaticamente se o usuário não estiver autenticado
export const AutoRedirect = () => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        // Redireciona para a página de login se o usuário não estiver autenticado
        return <Navigate to="/login" />;
    }
}

// Provedor de contexto de autenticação
export function AuthProvider({ children }: { children: React.ReactNode }) {
    // Estado para rastrear se o usuário está autenticado
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean(sessionStorage.getItem('isLogged')));

    // Função para realizar o login do usuário
    const login = () => {
        setIsLoggedIn(true);
        sessionStorage.setItem('isLogged', 'true');
    };
    
    // Função para realizar o logout do usuário
    const logout = () => {
        localStorage.clear();
        // Exibe um toast de sucesso ao efetuar o logout
        successToast('Logout efetuado com sucesso.');
        setIsLoggedIn(false);
    };

    // Fornece o contexto de autenticação para os componentes filhos
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook para usar o contexto de autenticação
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
