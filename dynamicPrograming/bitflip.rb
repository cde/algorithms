# Maximize number of 0s by flipping a subarray
# 12-09-2016
# Given a binary array, find the maximum number zeros in an array with one
# flip of a subarray allowed. A flip operation switches all 0s to 1s and 1s to 0s.
#
#     Examples:
#
#     Input :  arr[] = {0, 1, 0, 0, 1, 1, 0}
# Output : 6
# We can get 6 zeros by flipping the subarray {1, 1}
#
# Input :  arr[] = {0, 0, 0, 1, 0, 1}
# Output : 5
#
def bit_flip(array)
  ceros = 0
  max_diff = 0
  len = array.length

  array.each_with_index do |e, i|
    ceros +=1 if e.zero?
    count0, count1 = 0, 0

    array[i..len].each_with_index do |e, j|
      e.zero? ? count0 += 1 : count1 += 1
      max_diff = [max_diff, count1 - count0].max
    end
  end
  ceros + max_diff
end