AFRAME.registerComponent("markerhandler", {
    
    init: async function () {
  
      
        this.el.addEventListener("markerFound", () => {
        console.log("marker is found")
        // this.handleMarkerFound();
      });
  
      
      this.el.addEventListener("markerLost", () => {
        console.log("marker is lost")
        // this.handleMarkerLost();
      });
    },

    handleMarkerFound: function () {


      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";



    // Handling Click Events
    

   
    },
    
    handleMarkerLost: function () {

      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "none";

    },
})