const text = document.getElementById("text");
const btn = document.getElementById("button");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");
const para2 = document.getElementById("para");
const michels = document.getElementsByClassName("mechels")[0];
const Raya = document.getElementsByClassName("raya")[0];
const pedro = document.getElementsByClassName("pedro")[0];
const luca = document.getElementsByClassName("luca")[0];
const container = document.getElementsByClassName("container9")[0];
window.alert("write all first letters with upper case alphabet")
function answer(){
if(text.value == "afghanistan",text.value == "Afghanistan"){
window.alert("The answer is correct");
para.innerHTML = "what is the happieast country";
btn1.style.display = "inline";
btn.style.display = "none";
text.value = "";
}
else{
    window.alert("not correct");
}
}
function answer1(){
    if( text.value == "Usa"){
    window.alert("The answer is correct");
    para.innerHTML = "Who is the presedent of USA";
    btn2.style.display = "inline";
btn1.style.display = "none";
    text.value = "";
    }
    else{
        window.alert("not correct");
    }
    }
    function answer2(){
        if(text.value == "Tramp"){
        window.alert("The answer is correct ");
        btn3.style.display = "inline";
            para.innerHTML = "what is the talest mountain in afghanistan";
        btn2.style.display = "none";
        text.value = "";
        }
        else{
            window.alert("not correct");
        }
        }
        function answer3 (){
            if(text.value == "Hendo kosh"){
            window.alert("The answer is correct");
            btn4.style.display = "inline";
            para.innerHTML = "where is the harirode sea";
            btn3.style.display = "none";
            text.value = "";
            }
            else{
                window.alert("not correct");
            }
            }
            function answer4 (){
                if(text.value == "Herat"){
                window.alert("hoooooororrrrororororaaaaa you won the app");
                para.innerHTML = "where is the harirode sea";
                window.alert("Now you can whtch the animation");
                container.style.display = "flex";
                }
                else{
                    window.alert("not correct");
                }
                }

                function func1(){
                    michels.style.display = "block";
                    Raya.style.display = "none";
                    pedro.style.display = "none";
                    luca.style.display = "none";
                }
                function func2(){
                    michels.style.display = "none";
                    Raya.style.display = "block";
                    pedro.style.display = "none";
                    luca.style.display = "none";
                }

                function func3(){
                    michels.style.display = "none";
                    Raya.style.display = "none";
                    pedro.style.display = "block";
                    luca.style.display = "none";
                }

                function func4(){
                    michels.style.display = "none";
                    Raya.style.display = "none";
                    pedro.style.display = "none";
                    luca.style.display = "block";
                }