  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBty-rVNIiY2osPC0txFi6NhwRmNbvZ2mQ",
    authDomain: "xtapp-4526d.firebaseapp.com",
    databaseURL: "https://xtapp-4526d.firebaseio.com",
    projectId: "xtapp-4526d",
    storageBucket: "xtapp-4526d.appspot.com",
    messagingSenderId: "459764929036"
  };
  firebase.initializeApp(config);
/*para usuario ya registrado*/
var email = document.getElementById('email');
var password = document.getElementById('pass');
var btnlogin = document.getElementById('btnlogin');  
/*para usuario nuevo*/
var emailRegistrarse = document.getElementById('email-registrate');
var passwordRegistrarse = document.getElementById('pass-registrate');
var btnregistrar = document.getElementById('btnregistrar');
//agregamos el evento login
btnlogin.addEventListener('click', e =>{
  const correo = email.value;
  const llave = password.value;
  const auth = firebase.auth();
  //login
  const promise = auth.signInWithEmailAndPassword(correo,llave);
  promise.catch(e => console.log(e.message));
  
});
//crear usuario
btnregistrar.addEventListener('click', e =>{
  const correo = emailRegistrarse.value;
  const llave = passwordRegistrarse.value;
  const auth = firebase.auth();
  //login
  const promise = auth.createUserWithEmailAndPassword(correo,llave);
  promise.catch(e => console.log(e.message));
});

//agregamos un listener en tiepo real
firebase.auth().onAuthStateChanged(firebaseUser =>{
  if (firebaseUser) {
    console.log(firebaseUser);
    window.location="XT.html";
  }else{
    console.log('no esta logeado');
   //window.location="login.html";
  };
});
//autenticacion con google
btnloginGoogle.addEventListener('click', e =>{
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  });
});
