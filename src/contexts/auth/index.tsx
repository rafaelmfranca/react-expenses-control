import React, { useState, useEffect } from 'react';
import AuthContext from './context';
import { firebase, auth } from '../../services/firebase';
import { IUser } from '../../utils/types';
import { useNavigate } from 'react-router-dom';

type AuthProviderProps = {
  children?: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const [signInLoading, setSignInLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid, displayName, photoURL } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing user information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });

        navigate('/overview');
      } else {
        navigate('/'); // Toast: You must be logged to access this page, redirecting to login page
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    try {
      setSignInLoading(true);
      const provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await auth.signInWithPopup(provider);

      if (user) {
        const { uid, displayName, photoURL } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing user information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });

        navigate('/overview');
      }
    } catch (err) {
      console.log(err); // Toast error
    } finally {
      setSignInLoading(false);
    }
  };

  const signOut = async () => {
    await auth.signOut();
    setUser(undefined);
  };

  const contextValue = {
    user,
    signInWithGoogle,
    signOut,
    signInLoading
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
