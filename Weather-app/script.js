document.querySelector(".search Button").addEventListener('click', (e) =>{
    e.preventDefault();
    getWeather(document.querySelector(".searchBar").value);
    (".searchBar").value=' ';
});
document.querySelector(".searchBar").addEventListener('keyup', (e) =>{
    e.preventDefault();
    if(e.key == "Enter"){
        getWeather(document.querySelector(".searchBar").value);
        (".searchBar").value=' '; 
    }
   
});
const getWeather = async(city) =>{
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f82fe2d3e3d16e5efe5b396b62910d5b`,
           { mode:'cors'}
        );
        const data = await response.json();
        const {name} = data;
                //this will get the data.weather object and extract the icon and description and we will be able to use them as variables
                const { icon,description } = data.weather[0];
                const { temp,humidity } = data.main;
                //data.wind contains speed so speed is going to be taken out of the object and made into variable.
                const { speed } = data.wind;
                // console.log(name,icon,description,temp,humidity,speed);
                document.querySelector(".city").innerHTML=" Weather in " + name;
                document.querySelector(".temp").innerHTML= temp + " °C ";
                document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
                document.querySelector(".description").innerHTML= description;
                document.querySelector(".humidity").innerHTML= "Humidity: " +humidity ;
                document.querySelector(".wind").innerHTML= "Wind Speed: " +speed+ " km/hr";
        
    }
    catch(error){
        alert("City not found");
    }
};
window.addEventListener("load",()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy="https://cors-anywhere.herokuapp.com/";
            const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&&appid=f82fe2d3e3d16e5efe5b396b62910d5b`
            fetch(api)
            .then((response) => response.json())      //return data into json format
            .then((data) => 
            {
                //to get the city name out of the data extract name from the object
                //get data from the api and store it in name variable.
                const {name} = data;
                //this will get the data.weather object and extract the icon and description and we will be able to use them as variables
                const { icon,description } = data.weather[0];
                const { temp,humidity } = data.main;
                //data.wind contains speed so speed is going to be taken out of the object and made into variable.
                const { speed } = data.wind;
                // console.log(name,icon,description,temp,humidity,speed);
                document.querySelector(".city").innerHTML=" Weather in " + name;
                document.querySelector(".temp").innerHTML= temp + " °C ";
                document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
                document.querySelector(".description").innerHTML= description;
                document.querySelector(".humidity").innerHTML= "Humidity: " +humidity ;
                document.querySelector(".wind").innerHTML= "Wind Speed: " +speed+ " km/hr";

            })

            // this.displayWeather(data));   //convert json data into normal 
        },
            
    )}
})



{/* f82fe2d3e3d16e5efe5b396b62910d5b
 https://api.openweathermap.org/data/2.5/weather?
q=Delhi&units=metric&appid=f82fe2d3e3d16e5efe5b396b62910d5b */}