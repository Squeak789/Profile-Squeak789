const text =
"Building AI + Robotics + Embedded Systems";

let index = 0;

function typeWriter() {

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 80);
    }
}

window.onload = typeWriter;