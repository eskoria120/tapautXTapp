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
// Inicializamos Cloud Firestore
var db = firebase.firestore();
  //agregamos un listener en tiepo real
/*firebase.auth().onAuthStateChanged(firebaseUser =>{
  if (firebaseUser) {
    console.log(firebaseUser);

  }else{
    console.log('no esta logeado');
  };
});*/

//manejador de eventos para cerrar sesión (logout)
document.getElementById('btnlogout').addEventListener('click', function() {
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  console.log("has terminado .")
  window.location="login.html";
}).catch(function(error) {
  // An error happened.
});
  
})


//este es otra forma de estar atento al cambio de estatus del usuario si esta logeado o no
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
    console.log("te has logeado con :"+ emailVerified);
    var muestraNombre = document.getElementById('muestraNombre');
    var muestraImagen = document.getElementById('muestraImagen');

    muestraNombre.textContent = displayName;
    muestraImagen.style.backgroundImage = "url("+photoURL+")";
  } else {
    // User is signed out.
    // ...
  }
});
//leer datos de la db
var semanas = document.getElementById('semanas');

db.collection("programaXT").get().then((querySnapshot) => {
  semanas.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().dia1}`);


        semanas.innerHTML += 
        `<div id="semanas">  
            <div class="tituloSemanas">
              
              <button id="${doc.id}" class="button is-success is-small gs" onclick="mandarId(this.id)" style="disabled">
                Guardar Semana
              </button>

              <span>${doc.id}</span>

            </div>
              <div class="columns">
                <div class="column">${doc.data().dia1}<br>
                  <label class="checkbox">
                    <input name="checkbox"  id="c1" type="checkbox" onclick="hazClick()">
                        Rutina Exitosa.
                    </label>                  
                </div>
                <div class="column">${doc.data().dia2}<br>
                  <label class="checkbox">
                    <input name="checkbox" id="c2" type="checkbox" onclick="hazClick()">
                        Rutina Exitosa.
                    </label>                                  
                </div>
                <div class="column">${doc.data().dia3}<br>
                  <label class="checkbox">
                    <input name="checkbox" id="c3" type="checkbox" onclick="hazClick()">
                        Rutina Exitosa.
                    </label>                
                </div>
                <div class="column">${doc.data().dia4}<br>
                  <label class="checkbox">
                    <input name="checkbox" id="c4" type="checkbox" onclick="hazClick()">
                        Rutina Exitosa.
                    </label>              
                </div>
                <div class="column">${doc.data().dia5}<br>
                  <label class="checkbox">
                    <input name="checkbox" id="c5" type="checkbox" onclick="hazClick()">
                        Rutina Exitosa.
                    </label>               
                </div>
                <div class="column">${doc.data().dia6}<br>
                  <label class="checkbox">
                    <input name="checkbox" id="c6" type="checkbox" onclick="hazClick()">
                        Rutina Exitosa.
                    </label>               
                </div>
                <div class="column">${doc.data().dia7}<br>
                  <label class="checkbox" id="label7">
                    <input name="checkbox" id="c7" type="checkbox" onclick="hazClick()">
                        Rutina Exitosa.
                    </label>                
                </div>
              </div>
          </div>`
    });
});




//funcion para el boton de semanas donde se captura su id
var btnsemanaidarreglo = [];

 function mandarId(id){
 
 var btnsemanaid = id;

  switch (btnsemanaid) {
    case "semana01":
        // bloque de código 
         swal("Bien empezemos!", "Haz iniciado la " +btnsemanaid+ " !", "success");
         document.getElementById("semana01").style.color ="red";
        // document.getElementById("label7").innerHTML = "<span>haz guardado esta semana :=)</span> "; 
        btnsemanaidarreglo.push(btnsemanaid);
        break;
        case "semana02":
        // bloque de código
         swal("Bien empezemos!", "Haz iniciado la " +btnsemanaid+ " !", "success");
         document.getElementById("semana02").style.color ="red"; 
         btnsemanaidarreglo.push(btnsemanaid);         
        break;
        case "semana03":
        // bloque de código
         swal("Bien empezemos!", "Haz iniciado la " +btnsemanaid+ " !", "success");
         document.getElementById("semana03").style.color ="red";
         btnsemanaidarreglo.push(btnsemanaid);          
        break;
        case "semana04":
        // bloque de código
         swal("Bien empezemos!", "Haz iniciado la " +btnsemanaid+ " !", "success");
         document.getElementById("semana04").style.color ="red";
         btnsemanaidarreglo.push(btnsemanaid);          
        break;
        case "semana05":
        // bloque de código
         swal("Bien empezemos!", "Haz iniciado la " +btnsemanaid+ " !", "success");
         document.getElementById("semana05").style.color ="red";
         btnsemanaidarreglo.push(btnsemanaid);          
        break;
        case "semana06":
        // bloque de código
         swal("Bien empezemos!", "Haz iniciado la " +btnsemanaid+ " !", "success");
         document.getElementById("semana06").style.color ="red";
         btnsemanaidarreglo.push(btnsemanaid);          
        break;
        case "semana07":
        // bloque de código
         swal("Bien empezemos!", "Haz iniciado la " +btnsemanaid+ " !", "success");
         document.getElementById("semana07").style.color ="red";
         btnsemanaidarreglo.push(btnsemanaid);          
        break;
        case "semana08":
        // bloque de código
         swal("Bien empezemos!", "Haz iniciado la " +btnsemanaid+ " !", "success");
         document.getElementById("semana08").style.color ="red";
         btnsemanaidarreglo.push(btnsemanaid);          
        break;
        case "semana09":
        // bloque de código
         swal("Bien empezemos!", "Haz iniciado la " +btnsemanaid+ " !", "success");
         document.getElementById("semana09").style.color ="red";
         btnsemanaidarreglo.push(btnsemanaid);          
        break;
        case "semana10":
        // bloque de código
         swal("Bien empezemos!", "Haz iniciado la " +btnsemanaid+ " !", "success");
         document.getElementById("semana10").style.color ="red";          
        break;
        case "semana11":
        // bloque de código
         swal("Bien empezemos!", "Haz iniciado la " +btnsemanaid+ " !", "success");
         document.getElementById("semana11").style.color ="red";
         btnsemanaidarreglo.push(btnsemanaid);          
        break;
        case "semana12":
        // bloque de código
         swal("Bien empezemos!", "Haz iniciado la " +btnsemanaid+ " !", "success");
         document.getElementById("semana12").style.color ="red";
         btnsemanaidarreglo.push(btnsemanaid);          
        break;
    //default:
        // bloque de código
    }
    //return mibtnid;
console.log(btnsemanaidarreglo);
}


//console.log("hola " + mandarId.btnsemanaid);
//funcion para haz click en el checbox
// var arritem = [];
function hazClick(){
  var list = document.querySelectorAll( 'input[type=checkbox]' );
    let item;
   var arritem = [];

    for (item of list){
      if (item.checked) {
        swal("Buen trabajo!", "Haz terminado la rutina de este dia!", "success");
        arritem.push(item.id);
      };
    }
//aqui se concatenan los dos arregles para formar uno solo
    var arrconcatenado = btnsemanaidarreglo.concat(arritem);
    //console.log(arritem);

    if (typeof(Storage) !== "undefined") {

      localStorage.setItem("semana",arrconcatenado);

      function contar(){
        if (arrconcatenado.length === 8) {
          //document.getElementById("btnsemanaid").style.display="block";
          console.log("haz llegado a siete dias");
          swal({
            title: "Felicidades",
            text: "Haz terminado esta semana!",
            icon: "success",
            button: ":)!",            
          })

          .then(button =>{
            /*if (button && document.getElementById("c7")) {

              var finalizadoref = db.collection("programaXT").doc("semana01");

              return finalizadoref.update({
                finalizado : true
              })

              .then(function(){
                console.log("Document successfully updated!");
              })

              .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
                });

              console.log("captura eveto");
              swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
            }*/

                      switch (arrconcatenado[0]) {
                          case "semana01":
                              // bloque de código
                               var finalizadoref = db.collection("programaXT").doc("semana01");

                                    return finalizadoref.update({
                                      finalizado : true
                                    })

                                    .then(function(){
                                      console.log("Document successfully updated!");
                                    })

                                    .catch(function(error) {
                                      // The document probably doesn't exist.
                                      console.error("Error updating document: ", error);
                                      });

                                    console.log("captura eveto");
                                    swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");      
                              break;
                          case "semana02":
                              // bloque de código
                               var finalizadoref = db.collection("programaXT").doc("semana02");

                                          return finalizadoref.update({
                                            finalizado : true
                                          })

                                          .then(function(){
                                            console.log("Document successfully updated!");
                                          })

                                          .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                            });

                                          console.log("captura eveto");
                                          swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
                              break;
                          case "semana03":
                              // bloque de código
                               var finalizadoref = db.collection("programaXT").doc("semana03");

                                          return finalizadoref.update({
                                            finalizado : true
                                          })

                                          .then(function(){
                                            console.log("Document successfully updated!");
                                          })

                                          .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                            });

                                          console.log("captura eveto");
                                          swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
                              break;
                          case "semana04":
                              // bloque de código
                               var finalizadoref = db.collection("programaXT").doc("semana04");

                                          return finalizadoref.update({
                                            finalizado : true
                                          })

                                          .then(function(){
                                            console.log("Document successfully updated!");
                                          })

                                          .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                            });

                                          console.log("captura eveto");
                                          swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
                              break;
                          case "semana05":
                              // bloque de código
                               var finalizadoref = db.collection("programaXT").doc("semana05");

                                          return finalizadoref.update({
                                            finalizado : true
                                          })

                                          .then(function(){
                                            console.log("Document successfully updated!");
                                          })

                                          .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                            });

                                          console.log("captura eveto");
                                          swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
                              break;
                          case "semana06":
                              // bloque de código
                               var finalizadoref = db.collection("programaXT").doc("semana06");

                                          return finalizadoref.update({
                                            finalizado : true
                                          })

                                          .then(function(){
                                            console.log("Document successfully updated!");
                                          })

                                          .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                            });

                                          console.log("captura eveto");
                                          swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
                              break;
                          case "semana07":
                              // bloque de código
                               var finalizadoref = db.collection("programaXT").doc("semana07");

                                          return finalizadoref.update({
                                            finalizado : true
                                          })

                                          .then(function(){
                                            console.log("Document successfully updated!");
                                          })

                                          .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                            });

                                          console.log("captura eveto");
                                          swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
                              break;
                          case "semana08":
                              // bloque de código
                               var finalizadoref = db.collection("programaXT").doc("semana08");

                                          return finalizadoref.update({
                                            finalizado : true
                                          })

                                          .then(function(){
                                            console.log("Document successfully updated!");
                                          })

                                          .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                            });

                                          console.log("captura eveto");
                                          swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
                              break;
                          case "semana09":
                              // bloque de código
                               var finalizadoref = db.collection("programaXT").doc("semana09");

                                          return finalizadoref.update({
                                            finalizado : true
                                          })

                                          .then(function(){
                                            console.log("Document successfully updated!");
                                          })

                                          .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                            });

                                          console.log("captura eveto");
                                          swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
                              break;
                          case "semana10":
                              // bloque de código
                               var finalizadoref = db.collection("programaXT").doc("semana10");

                                          return finalizadoref.update({
                                            finalizado : true
                                          })

                                          .then(function(){
                                            console.log("Document successfully updated!");
                                          })

                                          .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                            });

                                          console.log("captura eveto");
                                          swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
                              break;
                          case "semana11":
                              // bloque de código
                               var finalizadoref = db.collection("programaXT").doc("semana11");

                                          return finalizadoref.update({
                                            finalizado : true
                                          })

                                          .then(function(){
                                            console.log("Document successfully updated!");
                                          })

                                          .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                            });

                                          console.log("captura eveto");
                                          swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
                              break;
                          case "semana12":
                              // bloque de código
                               var finalizadoref = db.collection("programaXT").doc("semana12");

                                          return finalizadoref.update({
                                            finalizado : true
                                          })

                                          .then(function(){
                                            console.log("Document successfully updated!");
                                          })

                                          .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                            });

                                          console.log("captura eveto");
                                          swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
                              break;                                                                                                                                                                                                                                                                                                            
                          default:
                              // bloque de código
                      }

          })
        };
      }

    }else{
          // LocalStorage no soportado en este navegador
          console.log("no esta dispnible localstorage")
      }
contar(); 

      

      console.log(arrconcatenado);



}    










