import { auth } from "fireabaseConfig";
import { User } from "firebase/auth";
import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";

const AuthContext = createContext<{ user: User | null, loading: boolean }>({ user: null, loading: true });

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading)
        return <></>;

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};