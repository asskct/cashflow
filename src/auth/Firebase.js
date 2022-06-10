define(() => {
  const Firebase = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  })

  const Firestore = firebase.firestore()
  
  return { Firebase, Firestore }
})
