


is_palindrome = -> (n) {
  n.to_s == n.to_s.reverse
}

is_prime = -> (n) {
  2.upto(Math.sqrt(n).round()).each do |x|
    return false if n % x == 0
  end
  true
}

n = gets.strip
n = n.to_i


palindromic_primes = -> (array_size) do
  2.upto(Float::INFINITY).lazy.map do |x|
    x if ( is_palindrome.(x) && is_prime.(x))
  end.select { |x| x.is_a? Integer}.first(n)
end
print palindromic_primes.(n)


