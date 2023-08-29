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
