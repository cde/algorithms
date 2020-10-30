function longestPalindromeSubseq(str) {
    const reversedString = str.split("").reverse().join("");
    let len = str.length
    let dp = []
    for(let i=0; i<=len; i++){
        dp[i]= new Array(len+1).fill(0);
    }
    console.log(dp)
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(str.charAt(i) === reversedString.charAt(j)){
                dp[i][j]= dp[i][j]+1;
            }else{
                dp[i][j] = Math.max(dp[i][j], dp[i][j])
            }
        }

    }
    console.log(dp)
    return dp[len][len]

}
// console.log("bbbab".split("").reverse().join(""))
console.log(longestPalindromeSubseq("bbbab"))

/*

[
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]
]
[
  [ 1, 0, 1, 1, 1, 0 ],
  [ 1, 0, 1, 1, 1, 0 ],
  [ 1, 0, 1, 1, 1, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 0, 1, 1, 1, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]
]
 */