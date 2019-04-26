const antares = require('./index.js');

antares.setAccessKey('b4e89ce2436b9d90:202c7b14b849c084');

const data = {
  temp: 33,
  hum: 45
}

// LATEST DATA
//antares.get()
//.then(function(response) {
//  console.log(response);  
//})

// CREATE DEVICE
//antares.createDevice('weather-station', 'newerest-station')
//.then(function(response) {
//  console.log(response);
//});

// GET ALL DEVICE
antares.getAllDevices('weather-station')
.then(function(response) {
  console.log(response);
});

// SEND DATA
// antares.send(data, 'weather-station', 'station1')
// .then(function(response) {
//  console.log(response);
// })

// SEND BY ID
//antares.sendById(data, 'cnt-478686259')
//.then(function(response) {
//  console.log(response);
//});

// GET ALL DATA
//antares.getAll('weather-station', 'station1', 100)
//.then(function(response) {
//  console.log(response);
//})

// GET ALL DATA ID
//antares.getAllId('weather-station', 'station1', 100)
//.then(function(response) {
//  console.log(response);
//})

// GET SPECIFIC DATA
//antares.getSpecific('/antares-cse/antares-id/weather-station/station1/cin_320501647')
//.then(function(response) {
//  console.log(response);
//})


