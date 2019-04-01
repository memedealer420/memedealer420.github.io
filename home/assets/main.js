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

//Restructured Navigation Bar
$(document).ready(function(){
document.getElementById("li1").href = "https://memedealer420.github.io/home";
document.getElementById("li1").innerHTML = "MemeDealer Yeet";
document.getElementById("li2").href= "bubbles.html";
document.getElementById("li2").innerHTML = "Bubble Shooter";
//Create New Value for li1
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



})