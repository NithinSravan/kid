  
//CREATING ARRAY AND RANDOMIZING IT
var grid_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function randomize() {      
    var l = grid_array.length;
    var temp;
    var index;
    while (l > 0) {  
       index = Math.floor(Math.random() * l);  
       l--;  
       temp = grid_array[l];          
       grid_array[l] = grid_array[index];          
       grid_array[index] = temp;
    }
  
}
randomize();
console.log(grid_array);
//ASSIGNING
var blocks = document.getElementsByClassName('box');
var assign = function(){
    for(let i=0; i<20; i++){
        blocks[i].innerHTML = grid_array[i];
    }
    numclick();
}
assign(grid_array);

//NEWGAME BUTTON


function numclick(i){
    for(let i=0; i<20; i++){
        blocks[i].addEventListener('click',function()
        {
            blocks[i].innerHTML=20+grid_array[i];
        })
    }      
}    