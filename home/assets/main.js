$(document).ready(function() {
      $("#poke1").mouseenter(function(){
        window.setTimeout(p1,175);
        function p1(){
        $("#poke1").hide();
        $("2").show();
        $("3").hide();
        }  
      });  
      $("#poke2").mouseenter(function(){
        window.setTimeout(p2,175);
        function p2(){
        $("#poke1").show();
        $("#poke2").hide();
        $("#poke3").show();
        };
      });
      $("#poke3").mouseenter(function(){
        window.setTimeout(p3,175);
        function p3(){
        $("#poke1").show();
        $("#poke2").show();
        $("#poke3").hide();
       };
      });
    });
      
    $(document).ready(function(){
      $("#kachow").mouseenter(function(){
        $("#mcqween").show();
        window.setTimeout(mcqween,2000);
        function mcqween(){
        $("#mcqween").hide();
        };
      });
    });

    $(document).ready(function(){
      $("#3t").mouseenter(function(){
        $("#block").show();
        window.setTimeout(blockhide,1000);
        function blockhide(){
          $("#block").hide();
        }
      });
    });

    $(document).ready(function(){
      $("#block").mouseenter(function(){
        alert("Hidden Easter Egg!!");
        if (confirm("Do you dare to Continue?")) {
          window.open("3t.html","_self")
      } else {
          alert("Canceled");
      }
      })
    })

//Restructured Navigation Bar Temporary Fix
$(document).ready(function(){
document.getElementById("li1").href = "index.html";
document.getElementById("li1").innerHTML = "MemeDealer Yeet";

document.getElementById("li2").href= "quarantine.html";
document.getElementById("li2").innerHTML = "2048 (Quarantined)";

document.getElementById("li3").href= "bubbles.html";
document.getElementById("li3").innerHTML = "Bubble Shooter";

document.getElementById("li4").href= "cat-mario.html";
document.getElementById("li4").innerHTML = "Cat Mario";

document.getElementById("li5").href= "fireboyandwatergirl.html";
document.getElementById("li5").innerHTML = "Fire Boy and Water Girl";

document.getElementById("li6").href= "fireboywatergirl2.html";
document.getElementById("li6").innerHTML = "Fireboy and Watergirl 2";

document.getElementById("li7").href= "sadwheels.html";
document.getElementById("li7").innerHTML = "Happy Wheels";

document.getElementById("li8").href= "NotNGame2.html";
document.getElementById("li8").innerHTML = "N-Game 2";

document.getElementById("li9").href= "possible_quiz.html";
document.getElementById("li9").innerHTML = "Possible Quiz";

document.getElementById("li10").href= "snek.html";
document.getElementById("li10").innerHTML = "Snake";

document.getElementById("li11").href= "dora.html";
document.getElementById("li11").innerHTML = "Spot the Numbers";

document.getElementById("li12").href= "basketballheads.html";
document.getElementById("li12").innerHTML = "Sports Basketball Heads";

document.getElementById("li13").href= "tetris.html";
document.getElementById("li13").innerHTML = "Tetris";

document.getElementById("li14").href= "#";
document.getElementById("li14").innerHTML = "";

document.getElementById("li15").href= "#";
document.getElementById("li15").innerHTML = "";

document.getElementById("li16").href= "#";
document.getElementById("li16").innerHTML = "";

document.getElementById("li17").href= "#";
document.getElementById("li17").innerHTML = "";

document.getElementById("li18").href= "#";
document.getElementById("li18").innerHTML = "";

document.getElementById("li19").href= "#";
document.getElementById("li19").innerHTML = "";

document.getElementById("li20").href= "#";
document.getElementById("li20").innerHTML = "";
//Create New Value for li1

//Need Help with this one

/*
var li3p = document.createElement("li");
var li3n = document.createTextNode("Yeet");
li3p.appendChild(li3n);
var li3 = document.getElementsByTagName("li")[0];
var att = document.createAttribute("id");
att.value = "li3";
li1.setAttributeNode(att);
var element = document.getElementById("nav");
var child = document.getElementById("li3");
element.appendChild(li3);
*/

})
