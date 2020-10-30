# https://leetcode.com/problems/intersection-of-two-arrays/
require 'set'
# There are built-in intersection facilities, which provide O(n+m)
# time complexity in the average case and O(n×m) time complexity
# in the worst case.
#
def arrays_intersection_v1(arr1,arr2)
  # [ 1, 1, 3, 5 ].intersection([ 3, 2, 1 ])
  # arr1.intersection(arr2)
  (Set.new(arr1) & Set.new(arr2)).to_a
end

#Time complexity : O(n+m), where n and m are arrays' lengths.
# O(n) time is used to convert nums1 into set,
# O(m) time is used to convert nums2, and include? operations are O(1)
# in the average case.

# Space complexity: O(m+n) in the worst case when all elements in the arrays are different.

def arrays_intersection_v2(arr1,arr2)
  # [ 1, 1, 3, 5 ].intersection([ 3, 2, 1 ])
  # arr1.intersection(arr2)
  map = Set.new(arr1)
  result = []
  arr2.each do |elem|
    if map.include?(elem)
      result.push(elem)
      map.delete(elem)
    end
  end
  result
end

# def merge_arrays(a, b)
#   # build a holder array that is the size of both input arrays
#   # O(n) space
#   result = []
#
#   # get lower head value
#   if a[0] == b[0]
#     result << a.shift
#   # else
#   #   result << b.shift
#   end
#
#   # check to see if either array is empty
#   if a.length == 0
#     return result + b
#   elsif b.length ==0
#     return result + a
#   else
#     return result + merge_arrays(a, b)
#   end
# end
# arr1 = [ 1, 1, 3, 5, 9 ]
# arr2 = [ 3, 2, 1, 5,8, 9 ]
# puts merge_arrays(arr1, arr2 ).inspect



  def quick_sort(array)
    divide = lambda do |start_index,end_index|
      return if start_index >= end_index

      mid = start_index

      pivot = array[end_index]
      for i in start_index..end_index
        if array[i] < pivot
          array[i], array[mid] = array[mid], array[i]
          mid += 1
        end
      end
      array[mid], array[end_index] = array[end_index], array[mid]
      divide.call(start_index, mid - 1)
      divide.call(mid + 1, end_index )
    end
    divide.call(0, array.length - 1 )
    array
  end



def arrays_intersection_doesnot_work(arr1,arr2)
  # [ 1, 1, 3, 5 ].intersection([ 3, 2, 1 ])
  # arr1.intersection(arr2)
  # (Set[1, 3, 5] & Set[3, 2, 1]).to_a
  #
  sorted_array1 = quick_sort(arr1) #[ 1, 1, 3, 5 ]
  sorted_array2 = quick_sort(arr2) # [ 1, 2, 3 ]
  m = sorted_array1.length
  n = sorted_array2.length

  i, j = 0,0
  result = []

  while i < n and j < m do
    puts "sorted_array1[#{i}] == sorted_array2[#{j}] #{sorted_array1[i] == sorted_array2[j]}"
    left, right = sorted_array1[i], sorted_array2[j]
    if left.equal?(right)
      result.push(sorted_array2[i])
      while (left == sorted_array1[i]) do
        i += 1
      end
      while (right == sorted_array2[i]) do
        i += 1
      end
    end
  end
  if (right > left)
    while left == sorted_array1[i] do
      i+=1
    end
  end

  return result
end
arr1 = [1,2,2,1]
arr2 = [2,2]


# [ 1, 1, 3, 5, 9]
# [ 1, 2, 3, 5, 8, 9 ]
puts  arrays_intersection_v2(arr1, arr2).inspect

# puts  merge_arrays( [ 1, 1, 3, 5, 9 ], [ 3, 2, 1, 5,8, 9 ]).inspect

# arr1 = [ 1, 1, 3, 5, 9]
# arr2 = [ 1, 2, 3, 5, 8, 9 ]
# puts arrays_intersection_v1(arr2, arr1).inspect