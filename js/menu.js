//LISTEN FOR load EVENT
window.onload = goNow;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function goNow(){

    //GET DOM ELEMENTS WE'LL NEED
    var liAppetizer = document.getElementById('appetizersLI');
    var liSalad = document.getElementById('saladLI');
    var liDessert = document.getElementById('dessertsLI');
    var liDrink = document.getElementById('drinksLI');

    //SETUP LISTENERS
    liAppetizer.onclick = scrollDown1;
    liSalad.onclick = scrollDown2;
    liDessert.onclick = scrollDown3;
    liDrink.onclick = scrollDown4;

    //CREATE THE FUNCTIONS WE'LL NEED
    function scrollDown1(){
        window.scrollBy(0, 2200)
    };
    function scrollDown2(){
        window.scrollBy(0, 3230)
    };
    function scrollDown3(){
        window.scrollBy(0, 3800)
    };
    function scrollDown4(){
        window.scrollBy(0, 5000)
    };
}