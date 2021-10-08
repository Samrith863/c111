Webcam.set({
    width:300,
    height:250,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("cam");
Webcam.attach(camera);

function cam_view(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    })
}
console.log("ml5 version",ml5.version);
