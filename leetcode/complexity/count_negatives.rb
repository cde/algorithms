# https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
# Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.
#
#     Return the number of negative numbers in grid.
# Constraints:
# m == grid.length
# n == grid[i].length
# 1 <= m, n <= 100
# -100 <= grid[i][j] <= 100
#
def count_negatives(grid)
  neg = 0
  grid.each do | arr |
    arr.reverse_each do | num |
      break if num >= 0
      neg += 1
    end
  end
  neg
end

# grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
#
def count_negatives(grid)
  grid.flatten.count { |n| n if n < 0}
end
