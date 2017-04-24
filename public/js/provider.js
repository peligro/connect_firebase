var config = {
    apiKey: "AIzaSyCRVJy1cqymmkNmCcw4QNydLnNZRB1jXpE",
    authDomain: "rinno-apumanque2.firebaseapp.com",
    databaseURL: "https://rinno-apumanque2.firebaseio.com",
    projectId: "rinno-apumanque2",
    storageBucket: "rinno-apumanque2.appspot.com",
    messagingSenderId: "800634273065"
  };
  firebase.initializeApp(config);
  
  function carga(id)
  {
    var valor=document.getElementById(id);
    var objeto=firebase.database().ref().child('Categories');
    //objeto.on('value',snap=>console.log(snap.val()));
    //var lista=objeto.child('Categories');
    objeto.on('child_added',
          snap=>
            {
               var li =document.createElement('li');
               li.innerText=snap.val();
               li.id=snap.key;
               valor.appendChild(li); 
               //document.getElementById('aca').innerHTML='Se ha agregado un registro<hr />';
            }
        ); 
     
  }
  
  
  /**
  cargamos los datos
  */
  window.onload = carga('lista'); 