//https://teachablemachine.withgoogle.com/models/-fIDZuFJl///
var camera=document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})
Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='img_self' src='"+data_uri+"'>";
    });
}
console.log("ml5 versão: ", ml5.version);
var classificadora=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-fIDZuFJl/model.json", modelo_carregado);

function modelo_carregado(){
    console.log("o modelo foi carregado");
}
function check(){
    var img=document.getElementById("result");
    classificadora.classify(img, resultado_pegado);
}
function resultado_pegado(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultObjectName").innerHTML=results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}