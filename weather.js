function myRoutine(){
    
    var request = new XMLHttpRequest();
    request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    request.send();

    request.onload = function ()
    {
        var data= JSON.parse(this.response);
    
        for(i=0;i<data.length;i++){

            var  lat= data[i].latlng[0];
            var  lon= data[i].latlng[1];

            var request1 = new XMLHttpRequest();
            request1.open('GET', "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=da27a811c1467d7059b20a5502c1f10e", true);
            request1.send();
            request1.onload = function ()
            {
                var temp= JSON.parse(this.response);
                console.log('Temperature of country '+ temp['main']['feels_like'] + '°C');
            }
        }
    }
}

/* Include error handling in your code. */

try {
    myRoutine();

} catch (e) {
    alert(e.name);
    alert(e.stack);
    console.log(e.name);
}




