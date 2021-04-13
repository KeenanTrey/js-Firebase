import React, {useState} from 'react';

const AuthContext = React.createContext()

  /* would not accept children without props.children */
const AuthProvider = (props) => {
    // const [user, setUser] = useState({role:"admin", uid:null, authentication:false})
    return ( 
        <AuthContext.Provider value={{role:"admin", username:null, authentication:false}}>
            {props.children}          
        </AuthContext.Provider>
     );
}
 
export {AuthProvider};

export default AuthContext