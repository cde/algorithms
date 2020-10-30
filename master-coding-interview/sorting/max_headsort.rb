

def heap_short(array)
  heap_size = array.length
  i = heap_size - 1
  heap_array = build_heap(array)
  # puts "i #{i} - #{heap_array}"
  # 2- Find the maximum element, which is located at A[0]A[0] because the heap is a max-heap.
  while i >= 0
    # puts "i #{i} - heap_array[i]: #{heap_array[i]} - array[i]= #{array[i]}"
    array[0], array[i] = array[i], array[0]
    heap_size -= 1
    max_heapify(array, heap_size, 0)
    i -= 1
  end
  array
end

#1- Build a max-heap from an unordered array.
def build_heap(array)
  heap_size = array.length
  i = (heap_size/2).to_i
  while i >= 0
    max_heapify(array, heap_size, i)
    i -= 1
  end
  array
end

def max_heapify(array, heap_size, i )
  left = 2 * i + 1
  right = 2 * i + 2
  largest = i
  if left < heap_size and array[left] > array[largest]
    largest = left
  end
  if right < heap_size and array[right] > array[largest]
    largest = right
  end
  if largest != i
      array[i], array[largest] = array[largest], array[i]
      max_heapify(array, heap_size, largest)
  end
end

puts heap_short([2,8,1,4,14,7,16,10,9,3]).inspect