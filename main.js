var prediction1 = "";
var prediction2 = "";

Webcam.set({ 
    width: 350,
    height: 300,
    image_format: "jpg",
    jpg_quality: 90
});

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(pic_link){
        document.getElementById("snapshot").innerHTML = "<img src = '" + pic_link + "' id='image_result'>";
        //<img src = 'link' id = 'my_id'>
        
    })
}

console.log("ML5 loaded version is ", ml5.version);


classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iYawB4uEP/model.json", model_loaded);

function model_loaded(){
    console.log("My model is loaded");
}

function agent_speak(){
    var speak_agent = window.speechSynthesis;
    var my_data = "Prediction one is:" + prediction1 + " and Prediction two is: " + prediction2;
    var uttering = new SpeechSynthesisUtterance(my_data);
    speak_agent.speak(uttering);

}

function predict_hand_sign(){
    image = document.getElementById("image_result");
    classifier.classify(image, got_results);
}

function got_results(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        document.getElementById("prediction_1_name").innerHTML = prediction1;
        document.getElementById("prediction_2_name").innerHTML = prediction2;

        if(prediction1 == "Thumbs Up"){
            document.getElementById("prediction_1_emoji").innerHTML = "&#128077;";

        }
        if(prediction1 == "OK Sign"){
            document.getElementById("prediction_1_emoji").innerHTML = "&#128076;";
            
        }
        if(prediction1 == "Thumbs Down"){
            document.getElementById("prediction_1_emoji").innerHTML = "&#128078;";
            
        }
        if(prediction1 == "Heart"){
            document.getElementById("prediction_1_emoji").innerHTML = "&#128080;";
            
        }
        if(prediction1 == "Peace Sign"){
            document.getElementById("prediction_1_emoji").innerHTML = "&#9996;";
            
        }

        if(prediction2 == "Happy"){
            document.getElementById("prediction_2_emoji").innerHTML = "&#128513;";

        }
        if(prediction2 == "Sad"){
            document.getElementById("prediction_2_emoji").innerHTML = "&#128557;";
            
        }
        if(prediction2 == "Calm"){
            document.getElementById("prediction_2_emoji").innerHTML = "&#128524;";
            
        }
        if(prediction2 == "Mad"){
            document.getElementById("prediction_2_emoji").innerHTML = "&#128544;";
            
        }
        if(prediction2 == "Surprised"){
            document.getElementById("prediction_2_emoji").innerHTML = "&#128562;";
            
        }

        agent_speak();

        
    }
}


