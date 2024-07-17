var input

let snake = document.getElementById("snake");
// console.log(snake);
let water = document.getElementById("water");
// console.log(water);
let gun = document.getElementById("gun");
// console.log(gun);




//   let user
let cpu
async function computer() {
    let comp = Math.floor(3 * Math.random())
    //    console.log(comp)
    if (comp == 0) {
        cpu = "S"
    }
    else if (comp == 1) {
        cpu = "W"
    }
    else if (comp == 2) {
        cpu = "G"
    }

    console.log("CPU :", cpu)
}
async function wait(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(1)
        }, 100);
    })
}

async function match(user, cpu) {

    // console.log(input,cpu)
    if (user === cpu) {
        await wait()
        alert("Match tie")
        //   return "tie";
    } else if (user == "S" && cpu == "W") {
        //   return "user";
        await wait()
        alert("You won")
    } else if (user == "W" && cpu == "S") {
        //   return "cpu";
        await wait()
        alert("CPU won")
    } else if (user == "W" && cpu == "G") {
        //   return "user";
        await wait()
        alert("You won")
    } else if (user == "G" && cpu == "W") {
        //   return "cpu";
        await wait()
        alert("CPU won")
    } else if (user == "G" && cpu == "S") {
        //   return "user";
        await wait()
        alert("You won")
    } else if (user == "S" && cpu == "G") {
        //   return "cpu";
        await wait()
        alert("CPU won")
    } else {
        return "invalid";
    }
}



(async function main() {

    snake.addEventListener("click", () => {
        snake.style.backgroundColor = "green";
        water.style.backgroundColor = "white";
        gun.style.backgroundColor = "white";
        input = document.getElementById("snake").value;
        console.log("User :", input);
        computer()
        let result = match(input, cpu)
        console.log(result)
    });
    water.addEventListener("click", () => {
        snake.style.backgroundColor = "white";
        water.style.backgroundColor = "green";
        gun.style.backgroundColor = "white";
        input = document.getElementById("water").value;
        console.log("User :", input);
        computer()
        let result = match(input, cpu)
        console.log(result)
    });
    gun.addEventListener("click", () => {
        snake.style.backgroundColor = "white";
        water.style.backgroundColor = "white";
        gun.style.backgroundColor = "green";
        input = document.getElementById("gun").value;
        console.log("User :", input);
        computer()
        let result = match(input, cpu)
        console.log(result)
    });
})()