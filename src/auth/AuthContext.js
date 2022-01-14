define([
  'react',
  'jsx!src/auth/Firebase'
],
function(React, {Firebase}) {
  const { createContext, useContext, useState, useEffect } = React

  const authContext = createContext()
  
  const useAuth = () => {
    return useContext(authContext)
  }

  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const [ano, setAno] = useState(String(new Date().getFullYear()))
    
    useEffect(() => {
      const unsubscribe = Firebase.auth().onAuthStateChanged((user) => {
        if (user) setUser(user)
        else setUser(false)
      })
      return () => unsubscribe()
    }, [])
  
    const signIn = (email, password, ano) => {
      return new Promise(async (resolve, reject) => {
        try {
          const { user } = await Firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          setAno(ano)
          setUser(user)        
          resolve(user)
        } catch (e) {
          reject(e)
        }
      })
    }

    const signOut = () => {
      return new Promise(async (resolve, reject) => {
        try {
          await Firebase.auth().signOut()
          setUser(null)
          resolve()
        } catch (e) {
          reject(e)
        }
      })
    }
    return (
      <authContext.Provider value={{ user, ano, signIn, signOut }}>
        { children }
      </authContext.Provider>
    )
  }
  return { AuthProvider, useAuth }
})