var SpeechRecognition=Window.WebkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML=" ";
    recognition.start();
    
}
recognition.onresult=function(event){
console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
speak();
}
function speak(){
    var synth=window.speechSynthesis;
    setTimeout(function(){
        img_id="selfie1";
        take_snapshot();
        speak_data="Taking your selfie in 10 seconds";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },10000);

    setTimeout(function(){
        img_id="selfie2";
        take_snapshot();
        speak_data="Taking your selfie in 5 seconds";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },5000);

    setTimeout(function(){
        img_id="selfie3";
        take_snapshot();
        speak_data="Taking your selfie in 3 seconds";
        var utterThis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },3000);

    Webcam.attach(camera);

}

Webcam.set({
    width:360,
    height:250,
    image_format:'.png',
    png_quality:90
});

camera=document.getElementById("camera");

function take_snapshot(){
    console.log(img_id);

    webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("resuilt1").innerHTML='<img id="selfie1" src="'+data_uri+'">';
        }

        if(img_id=="selfie2"){
            document.getElementById("resuilt2").innerHTML='<img id="selfie2" src="'+data_uri+'">';
        }

        if(img_id=="selfie3"){
            document.getElementById("resuilt3").innerHTML='<img id="selfie3" src="'+data_uri+'">';
        }
    });
}
