def reverseArray(input)
  output = []
  index = input.length - 1 #since 0 based index and iterating from   last to first
  i = 0


  loop do
    output << input[index]
    index -= 1
    i += 1
    break if index < 0
  end
  output
end

array = ["first","middle","last"]

puts reverseArray(array)