# https://leetcode.com/problems/shortest-path-in-binary-matrix/
#
#
#
# @param {Integer[][]} grid
# @return {Integer}
#
require 'byebug'
def shortest_path_binary_matrix(grid)
  m = grid.length - 1 || 0
  n = m && grid[0].length - 1

  return -1 if m == 0 || n == 0 || grid[0][0] == 1 || grid[m][n] == 1

  dirs =[[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]
  queue =[[0,0,1]] #x,y,len

  while (queue.length > 0)
    x,y,len = queue.pop
    puts len
    return len if x == m && y == m
    dirs.each do |dir|
      dx, dy = dir[0],dir[1]
      row = x + dx
      column = y + dy

      puts "#grid[#{row}][#{column}] #{grid[row][column]}"

      # if (row >= 0 && column >= 0 && row < grid.length && column < grid[0].length && !grid[row][column])
      #   queue.push([row, column, len + 1])
      #   grid[row][column] = 1
      # end

      # if within_cell(row, column,  m, n) && grid[row][column] == 0
      #   queue.push([row, column, len+1])
      #   grid[row][column]=1
      # end
    end
  end
  return -1
end

def within_cell(x,y, m,n)
  0 <= x && 0 <= y && x < m && y < n
end

grid = [[0, 0, 0], [1, 1, 0], [1, 1, 0]]
puts shortest_path_binary_matrix(grid)
