// import firebase from 'firebase';

const useAuthentication = () => {
  const getToken = () => {
    return localStorage.getItem("token");
  };

  const setToken = (token) => {
    localStorage.setItem("token", token);
  };

  const getUser = () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
  
      if (user) {
        const role = user.role === "c9cb1a54-3c62-4976-977f-5a1b5a8e494c"
          ? "admin"
          : "employee";
        
        return { ...user, authenticated: true, role };
      } else {
        return { authenticated: false };
      }
    } catch (error) {
      console.error(error);
      return { authenticated: false };
    }
  };

  const setUser = (user) => {
    try {
      if (typeof user !== "object" || user === null) {
        throw new Error("User argument must be an object");
      }
  
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  
  const getRole = (user) => {
    
    
  };

  const unsetAuth = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // firebase.auth().signOut().then(function() {
    //   console.log('Successfully Signed out')
    // }).catch(function(){
    //   console.log('error Signed out')
    // })
  };

  return { getToken, setToken, setUser, getUser, unsetAuth};
};

export default useAuthentication;