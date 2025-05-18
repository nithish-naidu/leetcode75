function subsets(arr) {
  let results = []; // stores all subsets
  let subset = []; // current building subset

  function dfs(i) {
    // i = current index in array
    if (i >= arr.length) {
      results.push([...subset]); // copy current subset
      return;
    }

    subset.push(arr[i]); // include current element
    dfs(i + 1); // explore further with it

    subset.pop(); // backtrack: remove last element
    dfs(i + 1); // explore path without it
  }

  dfs(0); // start DFS from index 0
  return results;
}

// This binary decision tree leads to 2^n subsets for n elements.
console.log(subsets([1, 2, 3, 4]));
