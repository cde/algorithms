// var dieSimulator = function(n, rollMax) {
//
//     let memo = {}
//
//     function helper(rolls = n, lastRoll = null, times = 0) {
//         let state = rolls.toString() + ":" + lastRoll + ":" + times
//         console.log(state)
//         if (times > rollMax[lastRoll - 1]) {
//             return 0
//         }
//         if (memo[state]) return memo[state]
// //
//         if (rolls == 0) return 1
//         memo[state] = 0
//         for (let i = 1; i <= 6; i++) {
//             if (lastRoll && i == lastRoll) {
//                 memo[state] += helper(rolls - 1, lastRoll, times + 1) % M
//             } else memo[state] += helper(rolls - 1, i, 1) % M
//         }
//         return memo[state] % M
//     }
//
//     return helper() % (10 ** 9 + 7)
// }

var dieSimulator = function(n, rollMax) {
    const MOD = 10 ** 9 + 7;

    if (n <= 0) return 0;
    const dp = new Array(6);
    for (let i = 0; i < 6; ++i) {
        const sub = new Array(n);
        for (let j = 0; j < n; ++j) {
            sub[j] = new Array(rollMax[i] + 1).fill(j == 0 ? 1 : 0);
        }
        dp[i] = sub;
    }
    console.log(dp);

    for (let m = 1; m < n; ++m) {
        for (let i = 0; i < 6; ++i) {
            for (let k = 1; k <= rollMax[i]; ++k) {
                dp[i][m][k] = 0;
                for (let j = 0; j < 6; ++j) {
                    if (j == i) dp[i][m][k] += k > 1 ? dp[i][m - 1][k - 1] : 0;
                    else dp[i][m][k] += dp[j][m - 1][rollMax[j]];
                    dp[i][m][k] %= MOD;
                }
            }
        }
    }
    console.log("*******");
    console.log(dp);
    let ret = 0;
    for (let i = 0; i < 6; ++i) {
        ret += dp[i][n - 1][rollMax[i]];
        ret %= MOD;
    }
    console.log(ret)
    return ret;
};
let n = 3;
let rollMax = [1,1,1,2,2,3]
dieSimulator(n, rollMax)