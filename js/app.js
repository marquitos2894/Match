// Login
var provider = new firebase.auth.GoogleAuthProvider();


$('#login').click(function(event) {
	firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result.user);
        guardaDatos(result.user);

	});
});	

function guardaDatos(user){
	var usuario  = {
		uid:user.uid,
		nombre:user.displayName,
		email:user.email,
		foto:user.photoURL
	}
	firebase.database().ref("match/" + user.uid)
	.set(usuario)
}

  var config = {
    apiKey: "AIzaSyClGVIAR2lig5ILpQwQmWWO0eBSfqi0Ycg",
    authDomain: "match-17d82.firebaseapp.com",
    databaseURL: "https://match-17d82.firebaseio.com",
    projectId: "match-17d82",
    storageBucket: "match-17d82.appspot.com",
    messagingSenderId: "159489925626"
  };
  firebase.initializeApp(config);

$('#Cerrar').click(function(event){
			firebase.auth().signOut()
			.then(function(){
				console.log("Se ha cerrado Sesion");
			})
			.catch(function(error){
				console.log(error);
			}) 	
});

function Redirect (url) {
        var ua        = navigator.userAgent.toLowerCase(),
            isIE      = ua.indexOf('msie') !== -1,
            version   = parseInt(ua.substr(4, 2), 10);

        // Internet Explorer 8 and lower
        if (isIE && version < 9) {
            var link = document.createElement('a');
            link.href = url;
            document.body.appendChild(link);S
            link.click();
        }
        // All other browsers
        else { window.location.href = url; }
    }

    function Observador(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                //window.location = 'info.html'
                setTimeout(Redirect('./info.html'), 5000);
                // ...
            }else{
                // User is signed out.
                console.log("No existe usuario activo");
            }
        });
    }


        //Metòdo Activo para saber el estado del Usuario
    Observador();   


    //firebase.auth().languageCode = 'pt';