
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9Qf7GwRUiQgmujibniA-40QGw6_YnP1g",
    authDomain: "test-1-44eed.firebaseapp.com",
    databaseURL: "https://test-1-44eed.firebaseio.com",
    storageBucket: "test-1-44eed.appspot.com",
    messagingSenderId: "949669578896"
  };
  firebase.initializeApp(config);
  
  //trabajo
  
  function carga1(id)
  {
    var valor=document.getElementById(id);
    var objeto=firebase.database().ref().child('text');
    objeto.on('value',snap=>valor.innerText=snap.val());
    objeto.on('value',snap=>console.log(snap.val()));
  }
  function carga2(id,elemento)
  {
    var valor=document.getElementById(id);
     var objeto=firebase.database().ref().child(elemento);
      objeto.on('value',snap=>console.log(snap.val()));
      objeto.on('value',
          snap=>
         {valor.innerText=JSON.stringify(snap.val(),null,3)}
         );
     
  }
  function carga3()
  {
    var valor=document.getElementById('lista');
    var select=document.getElementById('lenguajes');
    var objeto=firebase.database().ref().child('objeto');
    var lista=objeto.child('habilidades');
    var lista2=objeto.child('habilidades');
    /*
    objeto.on('value',
          snap=>
             {
                var li =document.createElement('li');
               li.innerText=snap.val();
               valor.appendChild(li);
             }
         );
      */   
         
    lista.on('child_added',
          snap=>
            {
               var li =document.createElement('li');
               li.innerText=snap.val();
               li.id=snap.key;
               valor.appendChild(li); 
               ////document.getElementById('aca').innerHTML='Se ha agregado un registro<hr />';
            }
        ); 
         lista2.on('child_added',
          snap=>
            {
               var li =document.createElement('option');
               li.innerText=snap.val();
               li.value=snap.key;
               select.appendChild(li); 
               ////document.getElementById('aca').innerHTML='Se ha agregado un registro<hr />';
            }
        );
    lista.on('child_changed',snap=>
        {
            var listChanged=document.getElementById(snap.key);
            listChanged.innerText=snap.val();
            //document.getElementById('aca').innerHTML='Se ha editado un registro<hr />';
        }
    );    
    lista.on('child_removed',snap=>
        {
            var listRemove=document.getElementById(snap.key);
            listRemove.remove();
            //document.getElementById('aca').innerHTML='Se ha eliminado un registro<hr />';
        }
    );       
  }
  window.onload = carga3('lista','objeto');
