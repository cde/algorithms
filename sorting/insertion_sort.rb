def insertion_sort(input)
  input.each_with_index do |elem, i|
    index = i
    while index > 0 && input[index - 1] > elem do
      input[index] = input[index - 1]
      index -= 1
    end
    input[index] = elem
  end
  input
end