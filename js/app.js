if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('sw.js')
    .then(function () {
        console.log('Service worker registered!');
    })
    .catch(function(err) {
        console.log(err);
    });
}

// NOTIFICATIONS
function displayFirstNotification(){
    $("#btnEnableNotifications").hide();
    $("#iconmelding").hide();

    var options = {
        body: "You are successfully subscribed to our notifications! Thank you very much!",
        icon: "android-icon-48x48.png",
        // Star Wars shamelessly taken from Peter Beverloo
          // https://tests.peter.sh/notification-generator/
        vibrate: [500,110,500,110,450,110,200,110,170,40,450,110,200,110,170,40,500]

    }

    navigator.serviceWorker.ready.then(function(registration){
        registration.showNotification("Successfully subscribed!!", options)
    })
}


function askForNotificationPermission(){
    Notification.requestPermission(function(result){
        console.log("user Choice", result);
        if(result != "granted"){
            console.log("No permission granted");
        } else {
            console.log("Permission granted!!!");
            displayFirstNotification();
        }

    })
}


$(function(){

    if('Notification' in window){
        $("#iconmelding").show();
        $("#iconmelding").click(askForNotificationPermission);
        $("#btnEnableNotifications").show();
        $("#btnEnableNotifications").click(askForNotificationPermission);
    }

})


//Camera functie
var videoPlayer;
function startVideo(){
	//enables the camera, if possible
	if('mediaDevices' in navigator){
		navigator.mediaDevices.getUserMedia({ video: true })
			.then(function(stream){
                
				//it will automatically ask for permission
				//if the user denies, it will give back an error

				//change the following querySelector to the id of the
				//object where you want to send the stream of the video
				videoPlayer = document.querySelector("#player");
				videoPlayer.srcObject = stream;
				document.getElementById("divSelfie").style.display = "block";
                document.getElementById('imgbox').style.display = "none";
                document.getElementById("pickImage").style.display = "none";
                document.getElementById('captureBtn').style.display = "block";
				//jquery variant om de selfie div weer te geven
				//$("#divSelfie").css("display", "block");

			})
			.catch(function(error){
				//all errors here
				console.log("There was an error", error);
				//then show the image picker, because the camera doesn't work
				document.getElementById("pickImage").style.display = "block";
                
				//jquery variant om de afbeelding selectie div weer te geven
				//$("#pickImage").css("display", "block");
			})
	}

}
function captureImage(){
	navigator.mediaDevices.getUserMedia({ video: true })
			.then(function(stream){
				var mediaStreamTrack = stream.getVideoTracks()[0];
			  	var imageCapture = new ImageCapture(mediaStreamTrack);
				var img = document.getElementById('imgbox');
				imageCapture.takePhoto()
					.then(blob => {
						img.src = URL.createObjectURL(blob);
						img.onload = () => { URL.revokeObjectURL(this.src); }
                        document.getElementById("divSelfie").style.display = "none";
                        document.getElementById("pickImage").style.display = "none";
                        document.getElementById('imgbox').style.display = "block";
                        document.getElementById('captureBtn').style.display = "block";
					})
					.catch(error => console.error('takePhoto() error:', error));
		});		
}

function pickImage(){
	stopStreaming();
	document.getElementById("pickImage").style.display = "block";
    document.getElementById('captureBtn').style.display = "none";
	//jquery variant om de afbeelding selectie div weer te geven
	//$("#pickImage").css("display", "block");
}
function stopStreaming(){
	if(videoPlayer){
		videoPlayer.srcObject.getVideoTracks() //gives access to the running video streams of the object
			.forEach(function(track){
				track.stop(); // stop all streams
			})
	}
	document.getElementById("divSelfie").style.display = "none";
    document.getElementById('captureBtn').style.display = "none";
	//jquery variant om de de selfie div te laten verdwijnen
	//$("#divSelfie").css("display", "none");
}

function captureImagePick(input){
	var reader = new FileReader();
    document.getElementById('captureBtn').style.display = "none";
	reader.onload = function(e) {
		// document.getElementById("pickImage").src = '"'+ e.target.result +'"';
		//Jquery variant om de genomen foto in het html element achter de src te plaatsen als value
    	$("#imgboxpicker").attr('src', e.target.result)
	    document.getElementById("pickImage").style.display = "none";
    };
	reader.readAsDataURL(input.target.files[0]);
}

(function() {
   // DOM ready?

	document.getElementById("selfieBtn").addEventListener('click', startVideo);
	document.getElementById("captureBtn").addEventListener('click', captureImage);
	document.getElementById("pickImgBtn").addEventListener('click', pickImage);
	document.getElementById("imagePicker").addEventListener('change', captureImagePick);

	//Jquery variaties van de bovenstaande events
	//$("#selfieBtn").click(startVideo);
	//$("#captureBtn").click(captureImage);
	//$("#pickImgBtn").click(pickImage);
	//$("#imagePicker").on('change', captureImagePick);
})();



//Share functie
document.addEventListener('DOMContentLoaded', function(){
    testShareFunctionaliteit();
}, false);

function testShareFunctionaliteit() {
    console.log("begin testSharing");

       // Controleren of de browser wel de Web Share API kent
      if ("share" in navigator) {
           console.log("sharing wordt ondersteund");
           klikEventsKoppelen(); //netter is om één functie te maken met parameters: knop, url, title, text. Scheelt regels
      } else {
          console.log("sharing wordt niet ondersteund");
          //Bericht aan de gebruiker dat sharing niet wordt ondersteund en verbergen van share knoppen.
          document.getElementById("shareOndersteuning").innerHTML += '<p>Helaas de share functie wordt niet ondersteund door deze browser...</p>';
          document.getElementById("btnDeel").style.visibility = 'hidden';
      }
}

function klikEventsKoppelen() {
    //hier kan men zelf meerdere elementen van de pagina toevoegen, mits die geklikt moeten kunnen worden.

    //hier hoef ik niet meer te controleren of sharing werkt, want dat heb ik al eerder gedaan.
    //Als deze nl. niet wordt ondersteund, hoeft deze code ook niet uitgevoerd te worden
    //en kan ik hem ook nog aanroepen als ik weer online kom.
    document.getElementById("btnDeel").addEventListener("click",function(ev){navigator.share({
             title: "Frustraties uiten? Gebruik deze nieuwe app RAENT",
             text: "Laten we gaan zeiken over het leven, dit moet je zien!",
             url: "index.html/#postpleister"
           })
           .then(console.log('Share is gelukt!'))
           .catch(function(error){
              console.log("Fout! " + error)
           })
    });
}


 











   
