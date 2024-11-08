let url="https://api.openweathermap.org/data/2.5/weather?q=";
let apiId="057cc4953354b9518428514a89dcd270";

async function getfact(state){
    try{
        let res=await axios.get(url+state+`&appid=${apiId}`);
        console.log(res);
        return (res);
    }
    catch(e){
        console.log(e);
    }
}

let btn=document.querySelector(".btn");
btn.addEventListener("click",async ()=>{
    let selectval=document.querySelector(".input").value;
    let a=await getfact(selectval);
    document.querySelector("h1").innerHTML= Math.round(a.data.main.temp  - 273.15)+" °C";
    document.querySelector(".country").innerHTML= a.data.name;
    document.querySelector(".wind").innerText= a.data.wind.speed+" km/h";
    document.querySelector(".humidity").innerHTML= a.data.main.humidity+" %";
})
