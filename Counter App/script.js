let count = 0;

document.getElementById("decbtn").onclick = function() {
    count -=1;
    document.getElementById("countlabel").innerHTML=count;
    document.getElementById("countlabel").style.color="#FF4500";

}

document.getElementById("resetbtn").onclick = function() {
    count=0;
    document.getElementById("countlabel").innerHTML=count;
    document.getElementById("countlabel").style.color="#0000CD";
}

document.getElementById("incbtn").onclick = function() {
    count +=1;
    document.getElementById("countlabel").innerHTML=count;
    document.getElementById("countlabel").style.color="#006400";
}