AFRAME.registerComponent("marker-handler",{
    init : async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker is found....!")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker is Lost....!")
            this.handleMarkerLost()
        })
    },
    handleMarkerFound : function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "flex"
        var ratebutton = document.getElementById("rating-button")
        var orderbutton = document.getElementById("order-button")
        ratebutton.addEventListener("click",()=>{
            swal({icon:"warning",title:"Rate Us!",text:"Please rate us for improvements."})
        })
        orderbutton.addEventListener("click",()=>{
            swal({icon:"https://i.imgur.com/4NZ6uLY.jpg",title:"Order Placed Successfully!",text:"Your order has been placed... Thank you! =>"})
        })
    },
    handleMarkerLost : function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "none"
    }
})