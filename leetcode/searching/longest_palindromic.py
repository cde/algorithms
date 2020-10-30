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
 def longestPalindrome(self, s: str) -> str:
        m = ''
        if len(s) == 1:
            return s

        for i in range(len(s)):
            for j in range(len(s)+1):
                if len(m) >= j-i:
                    continue
                elif s[i:j] == s[i:j][::-1]:
                    m = s[i:j]
                    continue

        return m