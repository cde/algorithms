# input = [3,9,1,4,7] , output = [1,3,4,7,9]
def selection_sort(input)
  for i in 0..(input.length - 1)
    min_value = input[i]
    min_index = i
    for j in (i + 1)..(input.length - 1)
      if input[j] < min_value
        min_value = input[j]
        min_index = j
      end
    end
    input[i], input[min_index] = input[min_index], input[i]
  end
  return input
end