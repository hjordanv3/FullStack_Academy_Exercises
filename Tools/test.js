const weather = {
    latitude: 40.75,
    longitude: -74,
    elevation: 27,
    temperature: 23.4
 };
 
if ("elevation" in weather){
    console.log(`The elevation is ${weather.elevation}`);
 }else {
    console.log("Elevation not available.");
 }