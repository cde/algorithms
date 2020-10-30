# def product_array(array)
#   result = []
#   len = array.length - 1
#   i = 0
#   while i < len
#     result.push(array[i..len].reduce(:*))
#     i += 1
#   end
#   result
#
#
# end

# Input: arr[]  = {1, 2, 3, 4, 5}
# Output: prod[]  = {120, 60, 40, 30, 24 }

def product_array(array)
  left, right = [], []
  for i in 1..arry.length-1
    left.push(array[i - 1] * array[i - 1])
  end
  #

  for i in 1..arry.length-1
    left.push(array[i - 1] * array[i - 1])
  end
end