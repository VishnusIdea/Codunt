let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");
    let scrollContainer = document.querySelector(".gallery");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;

            scrollContainer.style.scrollBehavior = 'auto';
      

    });

    nextBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = 'smooth';
        scrollContainer.scrollLeft += 900;
    }); 

    backBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = 'smooth';
        scrollContainer.scrollLeft -= 900;
    }); 


   var contanier = 1;
   setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
    counter = 1;
    }
   }, 5000);


   var sidemenu = document.getElementById("sidemenu");

   function openmenu(){
     sidemenu.style.right = "0"
   }

   function closemenu(){
     sidemenu.style.right = "-200px "
   }