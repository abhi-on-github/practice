function grid_validate (grid, string) {
  let initialPos = {x:0, y:0}, k=0, character = string[k];
  
    (function() {
      for(let i=0; i<grid.length; i++){
        for(let j=0, max = grid[i].length; j<max; j++){
          if(string[k] == grid[i][j]){
            initialPos = {x:i, y:j};
            character = string[++k];
            return;
          }
        }
      }    
    })();
     
  
    while(k < string.length){
      console.log(string[k])
      //console.log([initialPos.x])
      //console.log([initialPos.y])
      //console.log(grid[initialPos.x][initialPos.y-1])
      //console.log(grid[initialPos.x][initialPos.y-1])
      //console.log(grid[initialPos.x][initialPos.y+1])
      //console.log(grid[initialPos.x+1][initialPos.y])
      if(grid[initialPos.x-1] && grid[initialPos.x-1][initialPos.y] && character == grid[initialPos.x-1][initialPos.y]){
        character = string[++k];  
        initialPos = [x-1, y];
        continue;
      }          
      if(grid[initialPos.x][initialPos.y-1] && 
                                        (character == grid[initialPos.x][initialPos.y-1])){
        character = string[++k];  
        initialPos = {x: initialPos.x, y: initialPos.y-1};
        continue;
      }          
      if(grid[initialPos.x][initialPos.y+1] && 
                                        (character == grid[initialPos.x][initialPos.y+1])){
        character = string[++k];  
        initialPos = {x: initialPos.x, y: initialPos.y+1};
        continue;
      }          
      if(grid[initialPos.x+1] &&  grid[initialPos.x+1][initialPos.y] && 
                                        (character == grid[initialPos.x+1][initialPos.y])){
        character = string[++k];  
        initialPos = {x: initialPos.x+1, y: initialPos.y};
        continue;
      }   
      return false;
    }
    
    return true; 
  }
  
  grid_validate([
        ['W','Y','Q'],
        ['H','X','E'],
        ['I','S','K']
      ], 'WHISKEY')