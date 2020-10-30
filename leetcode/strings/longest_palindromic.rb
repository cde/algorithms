# https://leetcode.com/problems/longest-palindromic-substring/
# Given a string s, find the longest palindromic substring in s.
# You may assume that the maximum length of s is 1000.
#
# Example 1:
#
# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.

# @param {String} s
# @return {String}
#
#
def is_palindrome(s)
  len = s.length
  mid = len / 2
  for i in 0...mid
    return false if s[i] != s[len - i -1]
  end
  return true
end
# require 'byebug'
def longest_palindrome(str)
  return '' if str.empty?
  return str if str.length == 1
  left, right = 0, 0
  j = 0
  while j < str.length do
    len = [expand_around_center(str,j,j ),
           expand_around_center(str,j,j + 1)].max
    if right - left < len
      left = j - (len - 1) / 2
      right = j + len / 2
    end
    j += 1
  end
  str[left..right]
end
#
def expand_around_center(str, left, right)
  k,j = left, right
  while k >=0 &&  j < str.length && str[k] == str[j]
    k -= 1
    j += 1
  end
  j - k - 1
end
puts "1- #{longest_palindrome("babad")}"

# We observe that a palindrome mirrors around its center. Therefore, a palindrome can be expanded from its center, and there are only 2n - 12n−1 such centers.
#
#     You might be asking why there are 2n - 12n−1 but not nn centers? The reason is the center of a palindrome can be in between two letters. Such palindromes have even number of letters (such as "abba") and its center are between the two 'b's.


def longest_palindrome(s)
  return "" if s.empty?

  head, tail = 0, 0

  i = 0
  while i < s.size
    len1 = find_palindrome(s, i, i)
    len2 = find_palindrome(s, i, i + 1)
    len = [len1, len2].max
    if tail - head < len
      head = i - (len - 1) / 2
      tail = i + len / 2
    end

    i += 1
  end

  s[head..tail]
end

def find_palindrome(s, left, right)
  l, r = left, right
  while 0 <= l && r < s.size && s[l] == s[r]
    l -= 1
    r += 1
  end
  r - l - 1
end
puts "longest_palindrome #{longest_palindrome("babad")}"