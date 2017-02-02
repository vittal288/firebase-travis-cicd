$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});


    //get elements 
   
    
    const registerBtn = $('#register-submit');


   $('#login-submit').click(()=>{
        const email = $('#username').val();
    const password = $('#password').val();
       console.log(email,password)

       var auth = firebase.auth();
       const promise  = auth.signInWithEmailAndPassword(email,password);

       promise.catch((err)=>{
           console.log(err.message);
       })
   });


   $('#register-submit').click(()=>{
         const email = $('#r-username').val();
    const password = $('#r-password').val();
       console.log(email,password)

       var auth = firebase.auth();
       const promise  = auth.createUserWithEmailAndPassword(email,password);

       promise
    //    .then((user)=>{
    //        console.log(user);
    //    })
       .catch((err)=>{
           console.log("ERROR", err.message);
       })
   });

   $('#logout').click(()=>{
       firebase.auth().signOut();
        //$('#logoutRow').removeClass('show').addClass('hide');
   });

   firebase.auth().onAuthStateChanged(fireBaseUser=>{
       if(fireBaseUser){
            console.log("Success",fireBaseUser);
            $('#logoutRow').removeClass('hide').addClass('show');
       }else{
           console.log('Not logged in');
           $('#logoutRow').removeClass('show').addClass('hide');
       }
       
   });

   

});

// function bodyOnload() {
//     //console.log('BODY Onload');

//     var text = document.getElementById('myTxt');
//     var btn = document.getElementById('myBtn');

//     btn.addEventListener('click',function(){
//         var firbaseRef = firebase.database().ref();
//         //console.log(text.value);

//         firbaseRef.child("textNode").set(text.value)
//     });

// }