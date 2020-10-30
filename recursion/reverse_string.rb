def reverse_string(str)
  str.split('').reduce('') { |r,c| c + r}
end

def reverse_string(str)
  reversed = ''
  traverse = lambda do |i|
    return if(i < 0 )
    reversed += str[i]

    traverse.call(i-1)
  end
  traverse.call(str.length - 1)
  return reversed
end

def reverse_string(str)
  reversed = ''
  traverse = lambda do |i|
    return if(i > str.length )
    reversed += str[i]

    traverse.call(i-1)
  end
  traverse.call(0)
  return reversed
end