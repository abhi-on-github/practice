class maxHeap{
  constructor(values = []){
      this.values = values;
  }

  insert(value){
      this.values.push(value);
      this.bubbleUp();
  }

  removeMax(){
      const max = this.values[0];
      this.values[0] = this.values.pop();
      this.bubbleDown();
      return max;

  }
  
  bubbleUp(){
      let idx = this.values.length - 1;
      while(idx >0){
          let idxVal = this.values[idx];
          let parentIdx = Math.floor((idx-1)/2);
          let parentVal = this.values[parentIdx];
          if(parentVal >= idxVal){
             break; 
          } else {
             this.values[parentIdx] = idxVal;
             this.values[idx] = parentVal;
             idx = parentIdx;
          }  
      }
  }

  bubbleDown(){
      let idx = 0;
      let idxVal = this.values[idx];
      let length = this.values.length;
      while(true){
          let leftChildIdx = 2*idx + 1;
          let rightChildIdx = 2*idx + 2;
          if(leftChildIdx < length){
              
          }
          let leftChildVal = this.values[leftChildIdx];
          let rightChildVal = this.values[rightChildIdx];           
          if(idxVal < leftChildVal && idxVal < rightChildVal){
              if(leftChildVal > rightChildVal){
                  this.values[idx] = leftChildVal;
                  this.values[leftChildIdx] = idxVal;   
              } else {
                  this.values[idx] = rightChildVal;
                  this.values[rightChildIdx] = this.idxVal;
              }
          } else if( idxVal < leftChildVal ){
              this.values[idx] = leftChildVal;
              this.values[leftChildIdx] = idxVal;
          } else if(idxVal < rightChildVal){
                  this.values[idx] = rightChildVal;
                  this.values[rightChildIdx] = this.idxVal;
          } else if(idxVal > leftChildVal && idxVal > rightChildVal 
          || this.leftChildIdx) {
                              
          }
      }
  }



}

let heap = new maxHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);


