'use strict';

var solution = function(arr){
    let ans = {};
    ans.max = arr.reduce(function(a,b){
        return Math.max(a, b);
    });;
    ans.min = arr.reduce(function(a,b){
        return Math.min(a,b);
    });
    ans.avg = arr.reduce(function(acc, cur){
        return acc + cur;
    });
    ans.avg = ans.avg/arr.length;
    console.log(ans);
    return ans;
}

solution([10,829,38,18,1]);