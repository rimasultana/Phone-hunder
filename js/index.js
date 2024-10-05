const loadAllPhones = async (status, brandName) => {
    console.log("wow 3 seconds gone");
    
   
    document.getElementById("spinner").style.display = "none";
  
    const response = await fetch(
      "https://openapi.programming-hero.com/api/phones?search=iphone"
    );
    const data = await response.json();
  
if(status){
    displayAllPhone(data.data)
}else{
    displayAllPhone(data.data.slice(0,6))
}

}


const displayAllPhone = (phones) =>{
    console.log(phones);
}



 const handleShowAll = () =>{
    loadAllPhones(true)
 }

const handleSearch = () => {
  document.getElementById("spinner").style.display = "block";

  setTimeout(function () {
    loadAllPhones();
  }, 3000);
};



loadAllPhones();