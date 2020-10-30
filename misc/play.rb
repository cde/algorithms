require 'pry'
def play(deck)
  revesed_deck = deck.reverse
  p1 = 0
  p2 = 0
  revesed_deck.each_with_index do |card, i |
    if revesed_deck[i + 1] && card > revesed_deck[i + 1]
      p1 += 1
    else
      p2 += 1
    end
  end
  return[p1, p2]
end

play([1, 2, 9, 7, 4, 3, 5, 6, 10, 8])