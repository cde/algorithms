# https://leetcode.com/problems/merge-sorted-array
# Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
#
# Note:
#
# The number of elements initialized in nums1 and nums2 are m and n respectively.
# You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
# Example:
#
# Input:
# nums1 = [1,2,3,0,0,0], m = 3
# nums2 = [2,5,6],       n = 3
#
# Output: [1,2,2,3,5,6]
def merge(nums1, m, nums2, n)
  len1 = m - 1
  len2 = n - 1
  i =  m + n - 1

  while i >= 0 do
    break if len2 < 0
    if len1 >= 0 && nums1[len1] > nums2[len2]
      nums1[i] =nums1[len1]
      puts "#{nums1.inspect}"
      len1 -= 1
    else
      puts "here"

      nums1[i] = nums2[len2]
      len2 -= 1
    end
    i -= 1
  end
  nums1
end
nums1 = [1,2,3,0, 0, 0]
m = 3
nums2 = [2,5,6]
n = 3
#
# nums1 = [2, 0]
# m = 1
# nums2 = [1]
# n = 1
puts  merge(nums1, m, nums2, n).inspect