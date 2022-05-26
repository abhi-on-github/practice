//https://helloacm.com/comparing-left-and-right-branch-of-a-complete-binary-tree/

const solution = (arr) => {
  if (!arr) return "";
  if (arr.length === 0) return "";    
  const sum = (arr, idx) => {
      if (idx - 1 < arr.length) {
          if (arr[idx - 1] === -1) return 0;
          return arr[idx - 1] + sum(arr, idx * 2) + sum(arr, idx * 2 + 1);
      }
      return 0;
  };
  const left = sum(arr, 2);
  const right = sum(arr, 3);
  return (left == right) ? "" : (left > right ? "Left" : "Right");
};

console.log(solution([3, 6, 2, 9, -1, 10]));

