#
# Your previous Plain Text content is preserved below:
#
# /*
# *************
# *** RULES ***
# *************
# - NxM grid composed of cells.
# - Each cell can either be alive or dead.
# - If a cell is currently dead and has exactly 3 live neighbors, it becomes alive in the next round.
# - If a cell is currently alive and has 2 or 3 live neighbors, it stays alive in the next round.
# - Otherwise, the cell will be dead in the next round.
# - Goal: write a function to transition from one round to the next.
#
# ***********************
# *** EXAMPLE ROUND 1 ***
# ***********************
# -----------
# | | | | | |
# -----------
# |X| | | | |
# -----------
# | |X|X| | |
# -----------
# | | | | | |
# -----------
#
# ***********************
# *** EXAMPLE ROUND 2 ***
# ***********************
# -----------
# | | | | | |
# -----------
# | |X| | | |
# -----------
# | |X| | | |
# -----------
# | | | | | |
# -----------
#
# */
#
#
# 0 -> dead
# 1 -> alive
# https://bitstorm.org/gameoflife/

class Cell

  attr_accessor :value

  def initialize(value, x, y, board = nil)
    @value = value # 0, 1
    @x = x
    @y = y
    @board = board
  end

  def neighbours
    neighbours = []

    neighbours.push(@board.value_at(@x, @y + 1))
    neighbours.push(@board.value_at(@x, @y - 1))

    neighbours.push(@board.value_at(@x + 1, @y - 1))
    neighbours.push(@board.value_at(@x + 1, @y + 1))
    neighbours.push(@board.value_at(@x + 1, @y))


    neighbours.push(@board.value_at(@x - 1,@y + 1))
    neighbours.push(@board.value_at(@x - 1,@y - 1))
    neighbours.push(@board.value_at(@x - 1, @y))

    neighbours
  end

  def dead?
    value.zero?
  end

  def alive?
    !dead?
  end

  def neighbours_alive
#     map all the neighbours_alive
    neighbours.select do |neighbour|
      neighbour && neighbour.alive?
    end
  end

  def live!
    self.value = 1
  end

end


class Board
  def initialize(n, m)
    @cells = []

    n.times do |x|
      @cells.push([])
      m.times do |y|
        # value = rand(0..1)
        value = 0 # leave it as cero to test it manually.
        @cells[x].push(Cell.new(value,x,y,self ))
      end
    end
  end

  def value_at(x,y)
    @cells[x][y] if @cells[x]
  end

  def cells
    @cells.flatten
  end

  def next_round()
    #iterate cells
    # current_cell.dead && cell.neighbordavlive < 1?  next
    # track alive

    will_be_affected = []

    cells.each do |cell|
      if(cell.dead? && cell.neighbours_alive.length == 3)
        will_be_affected.push(cell)
      end

      if(cell.alive? &&
          cell.neighbours_alive.length > 1 && cell.neighbours_alive.length < 4)
        will_be_affected.push(cell)
      end
    end
    will_be_affected.each(&:live!)
  end
end

board = Board.new(5,4)
board.value_at(0,1).live!
board.value_at(1,2).live!
board.value_at(2,2).live!
c4 = board.value_at(1,1) # dead cell
puts "c4'neighbours_alive #{c4.neighbours_alive.count}"

board.next_round
puts "c4.alive in next round:  #{c4.alive?}"

c1 = board.value_at(1,2) # cell alive with 2 neighbours
puts "cell stays alive #{c1.alive?}"

#Notes
# I'm not clear why the console doesn't work when I tried to test it manually but I tried on irb..
# so basically what I thougth was
# board = Board.new(5,4)  # => Initialize all with deads
# # or we do initialize randomly with 0 or 1 but for testing manually, I initialize to cero to start with
#
# Round one
# irb(main):2874:0> board = Board.new(5,4)
# irb(main):2875:0> board.value_at(0,1).live!
# => 1
# irb(main):2876:0> board.value_at(1,2).live!
# => 1
# irb(main):2877:0> board.value_at(2,2).live!

# irb(main):2882:0> c1.alive?
# => true
# irb(main):2883:0> c2.alive?
# => true
# irb(main):2884:0> c3.alive?
# => true

# irb(main):2888:0> c4 = board.value_at(1,1)
# irb(main):2889:0> c4.dead?
# => true
# irb(main):2891:0> c4.neighbours_alive.count
# => 3
# irb(main):2892:0> board.next_round
# irb(main):2893:0>  c4.alive?
# => true
