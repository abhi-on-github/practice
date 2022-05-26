// Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0. The image you get is known to have a single rectangle of 0s on a background of 1s.

// Write a function that takes in the image and returns one of the following representations of the rectangle of 0's: top-left coordinate and bottom-right coordinate OR top-left coordinate, width, and height.

// image1 = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 0, 0, 0, 1],
//   [1, 1, 1, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1],
// ]

// Sample output variations (only one is necessary):

// findRectangle(image1) =>
//   x: 3, y: 2, width: 3, height: 2
//   2,3 3,5 -- row,column of the top-left and bottom-right corners

// Other test cases:

// image2 = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 0],
// ]

// findRectangle(image2) =>
//   x: 6, y: 4, width: 1, height: 1
//   4,6 4,6

// image3 = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 0, 0],
//   [1, 1, 1, 1, 1, 0, 0],
// ]

// findRectangle(image3) =>
//   x: 5, y: 3, width: 2, height: 2
//   3,5 4,6
  
// image4 = [
//   [0, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
// ]

// findRectangle(image4) =>
//   x: 0, y: 0, width: 1, height: 1
//   0,0 0,0

// image5 = [
//   [0],
// ]

// findRectangle(image5) =>
//   x: 0, y: 0, width: 1, height: 1
//   0,0 0,0

// n: number of rows in the input image
// m: number of columns in the input image

var image1 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

var image2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
];

var image3 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0],
];

var image4 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

var image5 = [
  [0],
];

function findRectangle(image) {
  const startingCoords = {x:0, y: 0};
  let endingCoords = {x:0, y: 0};
  const findRectangleDimensions = (i, j) => {
    while(!image[i][j]){
      if(i+1 >= image.length || typeof image[i+1][j] === 'undefined'){
        break;
      }
      ++i;
    }
    //--i;    
    while(!image[i][j]){
      if(j+1 >= image[i].length || typeof image[i][j+1] === "undefined"){
        break;
      }
      ++j;
    }
    //--j;
    return {i, j}; 
  }
  
  
  for(let i=0; i<image.length; i++){  
    for(let j=0, length = image[i].length; j<length; j++){
      const val = image[i][j];
      if(!val){
        startingCoords.x = i;
        startingCoords.y = j;
        endingCoords = findRectangleDimensions(i, j);
        return {...startingCoords, ...endingCoords};
      }
    }    
  }
  
}
console.log(findRectangle(image1));