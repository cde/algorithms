def reverse_int(n)
  reversed = n.to_s.split('').reverse.join('')
  (n < 0) ?  reversed.to_i * -1 : reversed.to_i
end