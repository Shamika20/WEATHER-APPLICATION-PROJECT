let weather = {
    apiKey: "7b6add479f172044a673bf3d1d8b369a",
    fetchFunction: function (cityName) {
        let p = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`)
        p.then(
            (response) => {
                // console.log(response)
                if (!response.ok) {
                    alert("Weather Not detected")
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


