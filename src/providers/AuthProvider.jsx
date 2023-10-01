import { createContext } from "react";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const a = {b: 'c'}
    return (
        <AuthContext.Provider value={a}>
{children}
        </AuthContext.Provider>
    );
};

// AuthProvider.propTypes = {
//     children: PropTypes.node  
// }


export default AuthProvider;