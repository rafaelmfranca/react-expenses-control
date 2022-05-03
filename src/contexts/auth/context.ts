import { createContext } from 'react';
import { IAuthContext } from '../../utils/types';

const AuthContext = createContext({} as IAuthContext);

export default AuthContext;
