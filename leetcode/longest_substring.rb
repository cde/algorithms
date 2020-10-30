# https://leetcode.com/problems/longest-substring-without-repeating-characters/
#
# # @param {String} s
# # @return {Integer}
require 'set'
def length_of_longest_substring(s)
  return s.length if s.length<2
  current_chars={}
  max_length, i = 0, 0
  for j in 0...s.length
    if current_chars.include?(s[j])
      i = [current_chars[s[j]], i].max
    end
    current_chars[s[j]] = j+1
    puts current_chars
    max_length = [max_length, j - i + 1].max
  end
  max_length
end
puts length_of_longest_substring("")