define(() => {
  const Firebase = firebase.initializeApp({
    apiKey: "AIzaSyBawxJUYZz1Nwx1M7yQY3Jy1TGD_tNg9Oo",
    authDomain: "commonjs.firebaseapp.com",
    projectId: "commonjs",
    storageBucket: "commonjs.appspot.com",
    messagingSenderId: "65803974707",
    appId: "1:65803974707:web:47f6d0e142cf7b7ce2cb46"
  })

  const Firestore = firebase.firestore()
  
  return { Firebase, Firestore }
})