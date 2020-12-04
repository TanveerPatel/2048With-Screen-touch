//creating variable
let grid;
let grid_new;
let score = 0;
let flag1 , flag2 , flag3;

var canvas
var leftButton,rightButton,upButton,downButton
var swipeDirection;
var spriteCode
function setup(){
 canvas=createCanvas(400,500);
// canvas= createCanvas(windowWidth , windowHeight);
  noLoop();
  leftButton=createSprite(50,450,20,20)
  leftButton.shapeColor="red"
 
  rightButton=createSprite(150,450,20,20)
  rightButton.shapeColor="green"
 
  upButton=createSprite(250,450,20,20)
  upButton.shapeColor="blue"
 
  downButton=createSprite(350,450,20,20)
  downButton.shapeColor="orange"
 
  //creating grid
  grid = blankGrid();
  grid_new = blankGrid();
      addNumber();
      addNumber();
      updateCanvas();
}
//Arrow key movement for laptop
function keyPressed(){
  let flipped = false;
  let rotated = false;
   played = true;
   //let dir = 1;

  if(keyCode===DOWN_ARROW){

  }
  else if (keyCode===UP_ARROW){
       grid = flipGrid(grid);
       flipped = true;
  }

  else if(keyCode===RIGHT_ARROW){
       grid = transposeGrid(grid , 1);
       rotated = true;
  }

  else if(keyCode===LEFT_ARROW){
       //dir = -1;
      grid = transposeGrid(grid , 1);
      grid = flipGrid(grid);
      rotated = true;
      flipped = true;
  }
  else{
      played = false;
  }
                              //  switch(keyCode){
                              //    case DOWN_ARROW:
                              //    //do nothing
                              //     break;

                              //    case UP_ARROW:
                              //    grid = flipGrid(grid);
                              //    flipped = true;
                              //    break;

                              //    case RIGHT_ARROW:
                              //    grid = transposeGrid(grid , 1);
                              //    rotated = true;
                              //    break;

                              //    case LEFT_ARROW:
                              //    //dir = -1;
                                
                              //   grid = transposeGrid(grid , 1);
                              //   grid = flipGrid(grid);
                              //   rotated = true;
                              //   flipped = true;
                              //    break;
                              //   default:
                              //     played = false;
                              //}

   if (played){
    let past = copyGrid(grid);
     for ( let i = 0; i<4; i++){
      grid[i] = operate(grid[i]);
     }
     let changed = compare(past , grid);

     if(flipped){
       grid = flipGrid(grid);
     }
     if(rotated){
      grid = transposeGrid(grid , -1);
     // grid = transposeGrid(grid);
     // grid = transposeGrid(grid);
    }
     if(changed){
       addNumber();
  }
  updateCanvas(); 

  let gameover = isGameOver();
  if( gameover){
    alert("GAME OVER");
  }

  let gamewon = isGameWon();
  if (gamewon){
    alert("GAME WON")
  }
  }

   }//END OF KEY PRESSED
  
function updateCanvas(){
  background(255);
  drawGrid();
  select ('#Score').html("Score: " + score);
  addEventListener('touchstart',checkTouch,false)
  drawSprites();
  fill("blue")
  textSize(22)
  text("L",50,470)
  text("R",150,470)
  text("U",250,470)
  text("D",350,470)

}
//screen touch movement by using sprite objects as arrow keys 
function checkTouch(e){
  console.log(e.touches[0])
  var x=e.touches[0].clientX
  var y=e.touches[0].clientY
  console.log("x= "+x, " y= "+y)
  if(x>330 && x<370){
    spriteCode="left"
  }else if (x>430 && x<470){
    spriteCode="right"
  }
  else if (x>530 && x<570){
    spriteCode="up"
  }
  else if (x>630 && x<670){
    spriteCode="down"
  }
  else{
    spriteCode
  }
  console.log(spriteCode)
  if(spriteCode!=undefined){
      let flipped = false;
      let rotated = false;
       played = true;
       //let dir = 1;
    
      if(spriteCode==="down"){
    
      }
      else if (spriteCode==="up"){
           grid = flipGrid(grid);
           flipped = true;
      }
    
      else if(spriteCode==="right"){
           grid = transposeGrid(grid , 1);
           rotated = true;
      }
    
      else if(spriteCode==="left"){
           //dir = -1;
          grid = transposeGrid(grid , 1);
          grid = flipGrid(grid);
          rotated = true;
          flipped = true;
      }
      else{
          played = false;
      }
       if (played){
        let past = copyGrid(grid);
         for ( let i = 0; i<4; i++){
          grid[i] = operate(grid[i]);
         }
         let changed = compare(past , grid);
    
         if(flipped){
           grid = flipGrid(grid);
         }
         if(rotated){
          grid = transposeGrid(grid , -1);
         // grid = transposeGrid(grid);
         // grid = transposeGrid(grid);
        }
         if(changed){
           addNumber();
      }
      updateCanvas(); 
    
      let gameover = isGameOver();
      if( gameover){
        alert("GAME OVER");
      }
    
      let gamewon = isGameWon();
      if (gamewon){
        alert("GAME WON")
      }
      }
  }
  }



//styling of the grid
function drawGrid(){
let w = 100;
  for (let i=0; i<4; i++){
    for (let j=0; j<4; j++){
      noFill();
      strokeWeight(2);
      let val = grid[i][j];
      let s =  val.toString();
      
      if(grid_new[i][j] === 1){
        stroke(200,0,200);
        strokeWeight(5);
        grid_new[i][j] = 0;
      }else {
       // strokeWeight(5);
        stroke(0);
      }
      if(val !== 0){
     
      fill(colorsSizes[s].color);
      } else {
        noFill();
      }
     rect(i*w , j*w, w , w , 50);
     
     if(grid[i][j] !==0){
    textAlign(CENTER,CENTER);
   
    
   // let len = s.length - 1;
   // let sizes = [64,64,36,18];
   // let fs = map(log(val),0,log(2048),64,16);
   // console.log(fs);
   
    noStroke();
    fill(0);
    textSize(colorsSizes[s].size);
    text(val , i*w + w/2 , j*w + w/2);

     }
    }
  }
}