// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB3oPjsoEMiWcToc28gEP5gUj9XKunPnGo",
    authDomain: "prueba-de-cesar.firebaseapp.com",
    databaseURL: "https://prueba-de-cesar.firebaseio.com",
    storageBucket: "prueba-de-cesar.appspot.com",
    messagingSenderId: "794317513501"
  };
  firebase.initializeApp(config);
  /*
  function carga1(id)
  {
    var valor=document.getElementById(id);
    var objeto=firebase.database().ref().child('texto');
    objeto.on('value',snap=>valor.innerText=snap.val());
    objeto.on('value',snap=>console.log(snap.val()));
  }
  
  function carga2(id)
  {
    var valor=document.getElementById(id);
    
    var objeto=firebase.database().ref().child('objeto');
    objeto.on('value',snap=>console.log(snap.val()));
     objeto.on('value',
          snap=>
         {valor.innerText=JSON.stringify(snap.val(),null,3)}
         );
  }
  function carga3(id)
  {
    var valor=document.getElementById(id);
    var objeto=firebase.database().ref().child('objeto');
    //objeto.on('value',snap=>console.log(snap.val()));
    var lista=objeto.child('habilidades');
    lista.on('child_added',
          snap=>
            {
               var li =document.createElement('li');
               li.innerText=snap.val();
               li.id=snap.key;
               valor.appendChild(li); 
               document.getElementById('aca').innerHTML='Se ha agregado un registro<hr />';
            }
        ); 
      lista.on('child_changed',snap=>
        {
            var listChanged=document.getElementById(snap.key);
            listChanged.innerText=snap.val();
            document.getElementById('aca').innerHTML='Se ha editado un registro<hr />';
        }
    );    
    lista.on('child_removed',snap=>
        {
            var listRemove=document.getElementById(snap.key);
            listRemove.remove();
            document.getElementById('aca').innerHTML='Se ha eliminado un registro<hr />';
        }
    ); 
  }
  */
  
  function autenticar()
  {
    //login registro salir correo pass
    var correo=document.getElementById('correo');
    var pass=document.getElementById('pass');
    var login=document.getElementById('login');
    var registro=document.getElementById('registro');
    var salir=document.getElementById('salir');
    //añadir evento click al login
    login.addEventListener
                        (
                            'click',
                            e=>
                            {
                                var auth=firebase.auth();
                                var promise=auth.signInWithEmailAndPassword(correo.value,pass.value);
                                promise.catch(e=>console.log(e.message));
                            }
                        );
    registro.addEventListener
                        (
                            'click',
                            e=>
                            {
                                var auth=firebase.auth();
                                var promise=auth.createUserWithEmailAndPassword(correo.value,pass.value);
                                promise.catch(e=>console.log(e.message));
                            }
                        );
    salir.addEventListener
                        (
                            'click',
                            e=>
                            {
                                firebase.auth().signOut();
                            }
                        );
    firebase.auth().onAuthStateChanged
                        (
                            firebaseUser=>
                            {
                                if(firebaseUser)
                                {
                                    console.log(firebaseUser);
                                    salir.classList.remove('hide');
                                }else
                                {
                                    salir.classList.add('hide');
                                }
                            }
                        );                    
  }
  
  /**
  cargamos los datos
  */
  window.onload = autenticar(); 