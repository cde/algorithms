require 'byebug'
def find_median_sorted_arrays(nums1, nums2)
  array1, array2 = [nums1, nums2].sort_by(&:size)
  total_len  = array1.length + array2.length

  min = 0
  max = array1.length

  while(min <= max) do
    partitionX = (min + max)/2
    partitionY = (total_len + 1)/2 - partitionX

    maxLeftX = getMax(array1, partitionX)
    minRightX = getMin(array1,partitionX)

    maxLeftY = getMax(array2, partitionY)
    minRightY = getMin(array2,partitionY)

    if(maxLeftX <= minRightY && maxLeftY <=minRightX)
      media = total_len % 2 == 0 ?
        ([maxLeftX, maxLeftY].max + [minRightX, minRightY].min) / 2.0 : [maxLeftX,maxLeftY].max
      return media.to_f
    elsif maxLeftX > minRightY
      max = partitionX - 1
    else
      min = partitionX + 1
    end
  end
  median
end

def getMax(nums, partition)
  (partition == 0) ? -Float::INFINITY : nums[partition - 1]
end

def getMin(nums, partition)
  (partition == nums.length) ? Float::INFINITY : nums[partition]
end


# def find_median_sorted_arrays(nums1, nums2)
#   a, b = [nums1, nums2].sort_by(&:size)
#   m, n = a.size, b.size
#   after = (m + n - 1) / 2
#   i = (0...m).bsearch do |i|
#     after - i - 1 < 0 || a[i] >= b[after - i - 1]
#   end || m
#   nextfew = (a[i,2] + b[after-i,2]).sort
#   (nextfew[0] + nextfew[1 - (m+n)%2]) / 2.0
# end
# nums1 = [1,2], nums2 = [3,4]
nums1, nums2 = [1,3], [2]
#
puts find_median_sorted_arrays(nums1, nums2)
