 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCRVJy1cqymmkNmCcw4QNydLnNZRB1jXpE",
    authDomain: "rinno-apumanque2.firebaseapp.com",
    databaseURL: "https://rinno-apumanque2.firebaseio.com",
    projectId: "rinno-apumanque2",
    storageBucket: "rinno-apumanque2.appspot.com",
    messagingSenderId: "800634273065"
  };
  firebase.initializeApp(config);
  
  
   function carga_ajax(ruta,valor1,div) 
        {
           if(valor1=='0')
           {
                document.getElementById(div).innerHTML='';
                return false;
           }
           //alert(valor1 );
           $.post(ruta,{valor1:valor1},function(resp)
           {
                $("#"+div+"").html(resp);
           });
           return false;
           
        }
 
  function carga(nodo)
  {
    var valor=document.getElementById(nodo);
    var objeto=firebase.database().ref().child('Categories');
    //objeto.on('value',snap=>console.log(snap.val()));
    //var lista=objeto.child('Categories');
    objeto.on('child_added',
          snap=>
            {
               var li =document.createElement('li');
               li.innerText=snap.val();
               li.id=snap.key;
               //valor.appendChild(li); 
               //document.getElementById('aca').innerHTML='Se ha agregado un registro<hr />';
               
            }
        ); 
     
  }
  function getUsuario(nodo)
  {
    var valor=document.getElementById(nodo);
    var objeto=firebase.database().ref().child('Users/9L9SXh9k76YyupY7W0dpf7l15ik2/account/email');
     objeto.on('value',
          snap=>
            {
               valor.innerHTML=snap.val()+'('+snap.key+')';
            }
        ); 
  }
  function getUsuarios(nodo)
  {
    //https://rinno-apumanque2.firebaseapp.com/Users/9L9SXh9k76YyupY7W0dpf7l15ik2/account/email
    var valor=document.getElementById(nodo);
    var objeto=firebase.database().ref();
     objeto.on('value',
          snap=>
            {
                var obj = JSON.parse(JSON.stringify(snap.val(),null,1));
               
               //var str = JSON.stringify(obj.Users);
               var str = JSON.stringify(obj.Users, null, 4);
               carga_ajax('apumanque_array.php',str,nodo);
            }
        ); 
  }
  function AuthAccess()
  {
    firebase.auth().onAuthStateChanged
                                    (function(user)
                                    {
                                      if (user) 
                                      {
                                        var isAnonymous = user.isAnonymous;
                                        var uid = user.uid;
                                        
                                      } else {
                                        var user=firebase.auth().signInAnonymously();
                                        var uid = user.uid;
                                      }
                                    }
                                    );
  }
  function crud(quehago)
  {     
        AuthAccess();
        switch(quehago)
        {
            case 'set'://modificar
            /********************************/
            firebase.database().ref('/Users/-KiVAl4_uSWyGW4ZAE1J/account').set
            (
                {
                    email: 'peligrosamente@gmail.com',
                    rut  : '11111111-1',
                }
            );
            console.log('Insertado éxito!!!');
            /********************************/
            break;
            case 'push'://insertar
            /********************************/
            var postData1 = {
                email: 'yo@cesarcancino.com',
                rut  : '14005460-7',
              };
            var postData2 = {
                address: 'Santa Isabel 176, Santiago, Chile',
                birthday  : '1980-05-24',
                country   : 'Chile', 
                name   : 'Juan Pérez', 
                numero : 1,
                vacio  : null,
              };
              // Get a key for a new Post.
              var id = firebase.database().ref().child('cat3').push().key;
            
              // Write the new post's data simultaneously in the posts list and the user's post list.
              var updates = {};
              updates['/Users/' + id+'/account'] = postData1;
              //updates[''  + id] = postData;
              updates['/Users/' + id+'/profile'] = postData2;
            
              firebase.database().ref().update(updates);
              console.log('push correcto ñandú '+id);
            /********************************/
            break;
            case 'update':
            /********************************/
            
            /********************************/
            break;
            case 'delete':
            /********************************/
            
            /********************************/
            break;
        }
  }
  
  /**
  cargamos los datos
  */
  window.onload = function()
  {
    //console.log('no paja naaa ñadú');
    crud('push');
    
  }; 