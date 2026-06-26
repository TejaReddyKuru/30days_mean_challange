async function add(){
    try{
        let response = await fetch("https://official-joke-api.appspot.com/random_joke");
        let data = await response.json();
        console.log(data);
        document.getElementById('setup').innerHTML = data.setup;
        document.getElementById('PunchLine').innerHTML = data.punchline;
    }
    catch(err){
        console.log(err);
    }
}
let btn = document.getElementById("btn");
btn.addEventListener("click",add);