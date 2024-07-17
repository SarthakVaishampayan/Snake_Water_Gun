
snake.addEventListener("click", () => {
    snake.style.backgroundColor = "green";
    var x = document.getElementById("snake").value;
    console.log(x);
    
    computer()
    match(user,cpu)
    // console.log("The winner is "+ result)


  });
  water.addEventListener("click", () => {
    water.style.backgroundColor = "green";
    var x = document.getElementById("water").value;
    console.log(x);

    computer()
   match(user,cpu)
    // console.log("The winner is " + result)

  });
  gun.addEventListener("click", () => {
    gun.style.backgroundColor = "green";
    var x = document.getElementById("gun").value;
    console.log(x);

    computer()
  match(user,cpu)
    // console.log("The winner is "+ result)

  });

async function computer(){
    let comp = Math.floor(3*Math.random())
 //    console.log(comp)
    if(comp==0){
     cpu = "S"
    }
    else if(comp==1){
     cpu = "W"
    }
    else if(comp==2){
     cpu ="G"
    }
 
    console.log(cpu)
 }
function match(user,cpu){
if (user==cpu) {
    console.log("Nobody")
}
else if(user=="S" && cpu=="W"){
    return "user"
}
else if(user=="S" && cpu=="G"){
    return "cpu"
}
else if(user=="W" && cpu=="S"){
    return "cpu"
}
else if(user=="W" && cpu=="G"){
    return "user"
}
else if(user=="G" && cpu=="W"){
    return "cpu"
}
else if(user=="G" && cpu=="S"){
    return "user"
}
}

