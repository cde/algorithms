# def letter_combination(n)
#   phone = {'2': %w[a b c],
#            '3': %w[d e f],
#            '4': %w[g h i],
#            '5': %w[j k l],
#            '6': %w[m n o],
#            '7': %w[p q r s],
#            '8': %w[t u v],
#            '9': %w[w x y z]}
#
#   backtrack = lambda do |combination, next_digits|
#     if next_digits.size.zero?
#       output.push(combination)
#     else
#       phone.each do |letter|
#
#       end
#     end
#   end
# end
#
def letter_combinations(digits)
  return [] if !digits || digits == ''

  letters = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  combos = []

  backtrack = lambda do |combo|
    puts combo
    if combo.size == digits.size
      combos.push(combo)
    else
      i = digits[combo.size].to_i
      puts letters[i]
      letters[i].each_char do |char|
        backtrack.call(combo + char)
      end
    end
  end
  backtrack.call('')
  combos
end


def letter_combinations(digits)
  map = "- - abc def ghi jkl mno pqrs tuv wxyz".split
  charsets = digits.chars.map { |d| map[d.to_i].chars }
  digits == "" ? [] : [''].product(*charsets).map(&:join)
end