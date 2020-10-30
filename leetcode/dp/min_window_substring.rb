# https://leetcode.com/problems/minimum-window-substring/
#
# Given a string S and a string T, find the minimum window in S which will
# contain all the characters in T in complexity O(n).
#
# Example:
#
# Input: S = "ADOBECODEBANC", T = "ABC"
# Output: "BANC"
# Note:
#
# If there is no such window in S that covers all characters in T, return the empty string "".
# If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
#
#
#
def min_window(s, t)
  return "" if t.size > s.size
  windows, pattern = {}, {}
  left, right, c = 0, 0, 0

  t.each_char do |c|
    pattern[c] ||= 0
    pattern[c] += 1
  end

  pos = []
  s.each_char.with_index do |c, i|
    pos.push([i, c]) if pattern.key?(c)
  end
  ans = [Float::INFINITY, nil, nil]

  while right < pos.size
    letter =  pos[right][1]
    windows[letter] = windows.fetch(letter,0) + 1
    puts windows
    c +=1 if pattern.key?(letter) && pattern[letter] == windows[letter]

    while left <= right
      letter = pos[left][1]

      w_end = pos[right][0]
      w_start = pos[left][0]
      puts "w_end #{w_end} : w_start #{w_start}"
      puts "ans #{ans}"
      ans = [w_end - w_start + 1, w_start, w_end] if w_end - w_start + 1 < ans[0]

      windows[letter] -= 1
      c -= 1 if windows[letter] < pattern[letter]

      left += 1
    end
    right += 1
  end
  ans[0] == Float::INFINITY ? "" : s[ans[1]...ans[2] + 1]
end



# def min_window(s, t)
#   windows = {}
#   c = 0
#   pos = []
#   s.split('').each_with_index do |char, i|
#     if t.include?(char) && c != t.size
#       c +=1
#       pos.push(i)
#     end
#     if c == t.size
#       substring = s[pos[0]..pos.last]
#       windows[substring.length] = substring if substring
#       pos = []
#       c = 0
#     end
#   end
#   min_key = windows.keys.min
#   min_key ? windows[min_key] : ""
# end