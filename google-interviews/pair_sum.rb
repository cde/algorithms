# array is sorted
#
def has_pair_with_sum(array, target)
  len = array.length - 1
  array.each do |elem1|
    array[1..len].each do |elem2|
      return true if(elem1 + elem2 == target)
    end
  end
  return false
end

#
# //O(n^2) - Time Complexity quadraty
# //O(1) - Space Complexity


# array is unordered
array = [2,4,5,3,1]
def sum_pair(array, target)
  numbers = Set.new
  # 9-2 = 7
  array.each do |number|
    return true if numbers.include?(number)
    numbers.add(target - number)
  end
  puts numbers
  return false
end
