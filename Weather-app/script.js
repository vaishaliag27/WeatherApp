//an object for storing the functions and variables necessary for using the API
let weather = {
    "apiKey":"f82fe2d3e3d16e5efe5b396b62910d5b",
    // function fetchWeather
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        //to get the city name out of the data extract name from the object
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
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();

});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})


{/* f82fe2d3e3d16e5efe5b396b62910d5b
 https://api.openweathermap.org/data/2.5/weather?
q=Delhi&units=metric&appid=f82fe2d3e3d16e5efe5b396b62910d5b */}