let inputValue=document.getElementById('search')
let search=document.getElementById('btn')
let cityName=document.getElementById('cityName')
let tempValue=document.getElementById('tempValue')
let humidityValue=document.getElementById('humidityValue')
let windValue= document.getElementById('windValue')

let  getInfo= async (e)=>{
	//alert('Welcome')
	e.preventDefault()
	let cityValue=inputValue.value;
	if (cityValue =="") {
		alert("Please Enter the city Name")
	} else {
		try {
			let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
			let response = await fetch(url);
			let data=await response.json();
			// console.log(response);
			cityName.textContent =`${data.name}/${data.sys.country}`;
			tempValue.textContent=`${data.main.temp}`;
			humidityValue.textContent=`${data.main.humidity}`;
			windValue.textContent=`${data.wind.speed}`;
		} catch{
			alert("Please enter the valid city")
		}
	}
}
search.addEventListener("click",getInfo);	