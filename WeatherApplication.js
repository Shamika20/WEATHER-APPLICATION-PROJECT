let weather = {
    apiKey: "7b6add479f172044a673bf3d1d8b369a",
    fetchFunction: function (cityName) {
        let p = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`)
        p.then(
            (response) => {
                // console.log(response)
                if (!response.ok) {//since if response.ok = true then ! means not so !response.ok=false
                    alert("Weather Not detected")//try useing catch as well after 2nd then
                }
                return response.json()
            }
        ).then(
            (FinalData) => {
                // console.log(FinalData.name)
                // console.log(FinalData.main.temp)
                // console.log(FinalData.weather[0].description)
                // console.log(FinalData.weather[0].icon)
                // console.log(FinalData.main.humidity)
                // console.log(FinalData.wind.speed)
                idName.innerHTML = `Weather in ${FinalData.name}`
                idTemp.innerHTML = `${FinalData.main.temp}°C`
                idIcon.src = `https://openweathermap.org/img/wn/${FinalData.weather[0].icon}.png`
                idDesc.innerHTML = `${FinalData.weather[0].description}`
                idHumidity.innerHTML = `Humidity: ${FinalData.main.humidity}%`
                idWindSpeed.innerHTML = `Wind Speed: ${FinalData.wind.speed}km/h`
                document.body.style.backgroundImage = "url(https://source.unsplash.com/1600x900/?" + cityName + ""
                document.querySelector(".Weather").classList.remove("LoadingMsg")
            }
        ).catch(
            (error)=>{
                console.log("Error cannot find")
            }
        )
    
    },
    search : function(){
                          weather.fetchFunction(`${inputId.value}`)
                       }
}

weather.fetchFunction("Denver")//default passed city name
buttonId.addEventListener(
    "click",
    function () {
        weather.search()
    }
)

//enter hone pe search hoga:-
document.querySelector("#inputId").addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            weather.fetchFunction(`${inputId.value}`)
        }
    }
)

/*
we used document.querySelector("#inputId") and not inputId.value
becaz aagar inputId.value pe addEventListener lagaya tooo
input ke aandar ke text koo addEventListener laag raha hai
and hame pure input box koo lagana hai addEventListener
so we have to get the entire element.

also,
document.querySelector("#inputId").addEventListener(
    "keyup",
    function(event){
        console.log("event :- ",event)
    }
)
ismai keyup haar ek key koo refer kar raha hai
like if i am typing this sentnce all key's are refered and
haar ek key ke liye pura addEventListener run hoo raha hai
and so  we need to specify the specific key i.e enter.
and observer properly in the above code when console.log("event :- ",event)
runs event object is printed and their we have a key-value pair :- 
key: "s" , where i pressed key s so this displayed and if i pressed another key
that key is refered as key kee value soo,
enter key koo refer karne ke liye event.key = "enter"

Loading concept:-
now what'a happening is when we are typing cities and when api is fetching it
it's taking time to load and till then the baground screen is blank
soo will apply logic for loading as well
*/
