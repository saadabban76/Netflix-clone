import { useState, useEffect } from 'react';
import { auth } from '../firebase';

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) return savedValue;

    if(savedValue instanceof Function) return savedValue;
    return initialValue;
}

export default function useLocalStorage() {
    const [user, setUser] = useState(() => {
        return getSavedValue('authUser', '');
    });

    useEffect(() => {
        const listener = auth.onAuthStateChanged((authuser) => {
            if(authuser){
                localStorage.setItem('authUser', JSON.stringify(user));
                setUser(authuser);
            }else{
                localStorage.removeItem('authUser', JSON.stringify(user));
                setUser(null);
            }
        })
        return () => listener();
    },[user])

    return user;
}