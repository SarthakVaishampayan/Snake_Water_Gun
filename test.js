var input
let b1 = document.getElementById("1");
let b2 = document.getElementById("2");
let b3 = document.getElementById("3");
let b4 = document.getElementById("4");
let b5 = document.getElementById("5");
let b6 = document.getElementById("6");
let unum = 0
let cpunum = 0



b1.addEventListener("click", () => {
    b1.style.backgroundColor = "green";
    b2.style.backgroundColor = "white";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "white";
    b5.style.backgroundColor = "white";
    b6.style.backgroundColor = "white";
     input = document.getElementById("1").value;
    // console.log(input);
    printNum()
    NumGen(input)
  });
b2.addEventListener("click", () => {
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "green";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "white";
    b5.style.backgroundColor = "white";
    b6.style.backgroundColor = "white";
     input = document.getElementById("2").value;
    // console.log(input);
    printNum()
    NumGen(input)
  });
b3.addEventListener("click", () => {
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white";
    b3.style.backgroundColor = "green";
    b4.style.backgroundColor = "white";
    b5.style.backgroundColor = "white";
    b6.style.backgroundColor = "white";
     input = document.getElementById("3").value;
    // console.log(input);
    printNum()
    NumGen(input)
  });
b4.addEventListener("click", () => {
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "green";
    b5.style.backgroundColor = "white";
    b6.style.backgroundColor = "white";
     input = document.getElementById("4").value;
    // console.log(input);
    printNum()
    NumGen(input)
  });
b5.addEventListener("click", () => {
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "white";
    b5.style.backgroundColor = "green";
    b6.style.backgroundColor = "white";
     input = document.getElementById("5").value;
    // console.log(input);
    printNum()
    NumGen(input)
  });
b6.addEventListener("click", () => {
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "white";
    b3.style.backgroundColor = "white";
    b4.style.backgroundColor = "white";
    b5.style.backgroundColor = "white";
    b6.style.backgroundColor = "green";
     input = document.getElementById("6").value;
    // console.log(input);
    printNum()
    NumGen(input)
  });





  function printNum(){
    console.log("Input:" +input);
  }

  function NumGen(input){
    let num = Math.floor(10*Math.random())
    console.log("CPU:" +num);
    if(num<input){
        console.log("Input won")
        unum++
    }
    else{
        console.log("Input lost")
        cpunum++
    }
   
    document.getElementById("cpu").innerHTML="CPU : "+num
    document.getElementById("userScore").innerHTML="User : "+unum
    document.getElementById("cpuScore").innerHTML="CPU : " + cpunum
    if(unum == 5){
        document.write("Game Over<br>User Won")
    }
    if(cpunum==5){
        document.write("Game Over<br>Cpu Won")
    }
    
  }

  



  
  