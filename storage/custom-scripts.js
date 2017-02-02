// $(function() {


// });

(function(){
    var uploader = document.getElementById('uploader');
    var fileUploadBtn = document.getElementById('fileBtn');
    console.log(uploader); 
    fileUploadBtn.addEventListener('change',function(e){
        console.log('asdasd');
        //get file 
        var file = e.target.files[0];

        //set storge
        var storageRef = firebase.storage().ref('folder_name/'+file.name);
        var task = storageRef.put(file);
        task.on('state_changed',
            function progress(snapshot){
                var percentage = (snapshot.bytesTransferred/snapshot.totalBytes) *100;
                uploader.value = percentage;
            },
            function err(err){

            },
            function complete(){

            }
        );

    });
})();