//CREATING ARRAY AND RANDOMIZING IT
var grid_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function randomize(myarr) {      
    var l = myarr.length;
    var temp;
    var index;
    while (l > 0) {  
       index = Math.floor(Math.random() * l);  
       l--;  
       temp = myarr[l];          
       myarr[l] = myarr[index];          
       myarr[index] = temp;
    }
    return myarr;
}
 var newarr = randomize(grid_array);

//ASSIGNING
var blocks = document.getElementsByClassName('box');
var assign = function(){
    for(i=0; i<20; i++){
        blocks[i].innerHTML = newarr[i];
    }
    return blocks;
}
assign(newarr);

//NEWGAME BUTTON
function resetbutton() {
    document.getElementById("newgameid").reset();
  }

/*CLICKING A NUMBER
funtion numclick(){
    ​  document.getElementsByClassName("box").innerHTML = "+=20";
}    */