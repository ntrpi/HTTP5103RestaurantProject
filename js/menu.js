//LISTEN FOR load EVENT
window.onload = goNow;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function goNow(){

    //GET DOM ELEMENTS WE'LL NEED
    var liMain = document.getElementById('mainLI');
    var liAppetizer = document.getElementById('appetizersLI');
    var liSalad = document.getElementById('saladLI');
    var liDessert = document.getElementById('dessertsLI');
    var liDrink = document.getElementById('drinksLI');

    //SETUP LISTENERS
    liMain.onclick = scrollDown;
    liAppetizer.onclick = scrollDown1;
    liSalad.onclick = scrollDown2;
    liDessert.onclick = scrollDown3;
    liDrink.onclick = scrollDown4;

    //CREATE THE FUNCTIONS WE'LL NEED
    function scrollDown(){
        window.scroll({ top:532, left:0, behavior: 'smooth'});
    };
    function scrollDown1(){
        window.scroll({ top:2200, left:0, behavior: 'smooth'});
    };
    function scrollDown2(){
        window.scroll({top:3230, left:0});
    };
    function scrollDown3(){
        window.scroll({top:3800, left:0});
    };
    function scrollDown4(){
        window.scroll({top:5000, left:0});
    };
}