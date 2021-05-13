function updateMap(){
    
    fetch("data.json")
     .then(response => response.json())
     .then(r =>{
         console.log(r.data)
         r.data.forEach(element =>{
             latitude = element.latitude
             longitude = element.longitude

             cases =element.infected
             if(cases>300){
                 color="rgb(255,0,0)"
                }
             else if(cases>100){
                 color="rgb(100,0,0)"
                }
             else{
                 color=`rgb(${cases},0,0)`
             }
             //Mark on map
             new mapboxgl.Marker({
                draggable: false,
                color:color
               }).setLngLat([longitude, latitude]).addTo(map) 
         })
     })
}
console.log("Updating Map with realtime data!")
updateMap()
//or
// setInterval( updateMap, 5000); 



