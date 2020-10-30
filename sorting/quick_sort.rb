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

puts quick_sort([7,3,8,2,10,0]).inspect