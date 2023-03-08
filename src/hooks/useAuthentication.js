// import firebase from 'firebase';

const useAuthentication = () => {
  const getToken = () => {
    return localStorage.getItem("token");
  };

  const setToken = (token) => {
    localStorage.setItem("token", token);
  };

  const getUser = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      if(user.role === "c9cb1a54-3c62-4976-977f-5a1b5a8e494c")
        user = { ...user, authenticated: true, role:"admin"};
      else
      user = { ...user, authenticated: true, role:"employee"};
    } else {
      user = { ...user, authenticated: false };
    }
    return user;
  };

  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user)  );
    
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