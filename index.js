const container = document.querySelector("#container");


 let rc =  16;
 let rows = rc ;
 let cols = rc ;

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell  = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(rows,cols);
drawColor();
// const btn = document.querySelector('.pad');
// btn.addEventListener('click',() =>
// {
//   makeDrawingPad();
//   drawColor();
// });

const btnClear = document.querySelector('.cle');
btnClear.addEventListener('click',() => {

  const allEle = Array.from(document.querySelectorAll(".grid-item"));
    
    allEle.map(singleEle => {
        singleEle.style.backgroundColor = "#ffffff";
      });

});

const btnErase = document.querySelector('.era');
btnErase.addEventListener('click',() =>
{
  deleteColor();
});

function makeDrawingPad(rc)
{
  const allEle = Array.from(document.querySelectorAll(".grid-item"));


  allEle.map(singleEle => {
    singleEle.remove();
  });

  //  rc = prompt("Enter the number of rows and cols you want");
   rows = rc;
   cols = rc ;

  if(rows > 100 || cols > 100)
  {
    for (let i = 1; i > 0; i++) {
      
      alert("Rows and cols must be less than or equall to 100");
      rc = prompt("Enter the number of rows and cols you want");
      rows = rc;
      cols = rc ;
      if (rows <= 100 && cols <=100) {
          break;
      };
    }

    makeRows(rows,cols);
  } else {
    makeRows(rows,cols);
  };

};


function drawColor(color)
{

      let draw = false;

      const allCell = Array.from(document.querySelectorAll(".grid-item"));

      allCell.map(singleCell => {
        singleCell.addEventListener('mousedown', () => {
          
          // singleCell.style.backgroundColor = 'red';
          //   console.log(singleCell.style.backgroundColor);
          draw = true;

        });
      });


      allCell.map(singleCell => {
        singleCell.addEventListener('mousemove', () => {
          if(draw === true)
          {
            singleCell.style.backgroundColor = color;
            console.log(singleCell.style.backgroundColor);
          }
        })
      });

      window.addEventListener('mouseup', () => {
          draw = false;
      })




}



function deleteColor()
{

      let draw = false;

      const allCell = Array.from(document.querySelectorAll(".grid-item"));

      allCell.map(singleCell => {
        singleCell.addEventListener('mousedown', () => {
          
          // singleCell.style.backgroundColor = 'red';
          //   console.log(singleCell.style.backgroundColor);
          draw = true;

        });
      });


      allCell.map(singleCell => {
        singleCell.addEventListener('mousemove', () => {
          if(draw === true)
          {
            singleCell.style.backgroundColor = 'white';
            console.log(singleCell.style.backgroundColor);
          }
        })
      });

      window.addEventListener('mouseup', () => {
          draw = false;
      })




}

function generateRandomColor(){
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal; 
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function() {
  output.innerHTML = `${this.value} x ${this.value}`;
  makeDrawingPad(this.value);
  let zColor = generateRandomColor();
  drawColor(zColor);
}