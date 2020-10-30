# https://leetcode.com/problems/dice-roll-simulation/
#
# var dieSimulator = function(n, rollMax) {
#
#
# };
#
def dice_simulator(n, roll_max)
  return 0 if roll_max.length > 6
  # limit of the value as stated in the prompt
  mod=10**9+7

  dp = Array.new(n+1) {Array.new(roll_max.size + 1, 0)}
  dp[0][0] = 1
  (1..n).each do |i|
    roll_max.each.with_index(1) do |rm, j|
      byebug
      dp[i][j] = dp[i-1][0]

      dp[i][j] -= dp[i-rm-1][0] - dp[i-rm-1][j] if rm < i
      dp[i][0] = (dp[i][0] + dp[i][j]) % mod
    end
  end
  dp[-1][0]
end


