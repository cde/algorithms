var dieSimulator = function(n, rollMax) {
    if (!n) return 0;

    // create a cache for each dice roll value
    const cache = [{}, {}, {},{},{},{}];

    // limit of the value as stated in the prompt
    const limit = 10 ** 9 + 7;

    // create depth first search function
    const dfs = (totalRolls, consecutiveRolls, prevRoll) => {

        // create a unique string to check if all three cases are the same and if they are in the cache, return the value
        const rollString = `${totalRolls}-${consecutiveRolls}`;
        if (cache[prevRoll][rollString]) return cache[prevRoll][rollString];

        // if the we have rolled the total number of rolls, return 1 (possibility)
        if (totalRolls === n) return 1;

        // calculate the number of total rolls outside of iteration so that it can be saved
        const nextTotalRolls = totalRolls + 1;

        // create a variable to count all possibilities from next rolls
        let currCount = 0;

        // attempt to roll each value of the dice
        for (let nextRoll = 0; nextRoll < 6; nextRoll++) {
            // if the value is not the same as the previous value, roll the dice with the consecutive rolls as 1
            if (nextRoll !== prevRoll) currCount += dfs(nextTotalRolls, 1, nextRoll);

                // if we are still under the number of consecutive rolls allowed for the dice value, roll it and increase the
            // consecutive rolls by 1
            else if (consecutiveRolls < rollMax[nextRoll]) currCount += dfs(nextTotalRolls, consecutiveRolls + 1, nextRoll);
        }

        // store the value in the cache and return the value;
        return cache[prevRoll][rollString] = currCount % limit;
    }
    return dfs(0,0,0);
};