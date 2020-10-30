# Worse case O(n2)
# Avg case O(n2)
#
def bubble_sort(array)
  end_index = array.length - 1
  swap = false
  puts array.inspect
  while end_index >= 0 do
    swap == false
    for j in (0..end_index - 1)
      if array[j] > array[j + 1]
        array[j], array[j + 1] = array[j + 1], array[j]
        swap = true
      end
    end
    break if swap == false
    end_index -= 1
  end
  return array
end


arr = bubble_sort [9, 2, 4, 1, 3]

puts arr.inspect