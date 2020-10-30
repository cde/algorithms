# https://leetcode.com/problems/longest-palindromic-subsequence/
# Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.
#
# Example 1:
# Input:
#
# "bbbab"
# Output:
# 4
#
# def longest_palindrome_subseq(s)
#   @str = s
#   @dp = []
#   max_len(0, s.length-1)
# end
#
# def max_len(i, j)
#   return 0 if i > j
#   return 1 if i == j
#   return @dp[i][j] if @dp[i] && @dp[i][j]
#   @dp[i] ||= []
#   @dp[i][j] = ((@str[i] == @str[j]) ? max_len(i+1, j-1)+2 : [max_len(i+1, j), max_len(i, j-1)].max)
# end

# puts longest_palindrome_subseq("bbbab")

def longest_palindrome_subseq(s)
  length = s.size
  dp = []

  length.times do |i|
    dp[i]= Array.new(length).fill(0);
    dp[i][i] = 1
  end
  puts "dp #{dp}"
  (2..length).each do |len|
    puts "len #{len}"
    (0..(length - len)).each do |i|
      j = i + len - 1
      # puts "j #{j} => i:#{i} + len:#{len} - 1"

      if s[i] == s[j]
        dp[i][j] = 2 + (len == 2 ? 0 : dp[i+1][j-1])
      else
        dp[i][j] = [dp[i+1][j], dp[i][j-1]].max
      end
      puts "dp #{dp}"
    end
  end

  dp[0][length - 1]
end

puts longest_palindrome_subseq("bbbab")