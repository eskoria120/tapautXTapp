function hazclick(){
	var list = document.querySelectorAll( 'input[type=checkbox]' );
    let item;
    arritem = [];

    for (item of list){
    	if (item.checked) {
    		swal("Buen trabajo!", "Haz terminado la rutina de este dia!", "success");
    		arritem.push(item.id);
    	};
    }
    console.log(arritem);

    if (typeof(Storage) !== "undefined") {

    	localStorage.setItem("semana",arritem);

    	function contar(){
    		if (arritem.length === 7) {
    			console.log("haz llegado a siete dias");
    			swal({
    				title: "Felicidades",
    				text: "Haz terminado esta semana!",
    				icon: "success",
    				button: "guardar progreso!",
    			})
    			.then(button =>{
    				if (button && document.getElementById("c7")) {

    					var finalizadoref = db.colection("programaXT").doc("semana01");

    					return finalizadoref.update({
    						finalizado : true
    					})

    					.then(function(){
    						console.log("Document successfully updated!");
    					})

    					catch(function(error){
    						console.error("Error updating document: ", error);
    					})

    					console.log("captura eveto");
    					swal("Felicitaciones!", "tu progreso ha sido guardado!", "success");
    				};
    			})
    		};
    	}

    }else{
          // LocalStorage no soportado en este navegador
          console.log("no esta dispnible localstorage")
      }
contar(); 

}