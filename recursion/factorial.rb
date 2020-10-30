def factorial(n)
  return nil if n < 0

  value = 1
  while n > 0
    value = value * n
    n -= 1
  end
  return value
end
factorial(5)

def factorial(n)
  return nil if n < 0
  return 1 if n == 0 || n == 1

  n * factorial(n-1)
end

def factorial(n)
  # 1. instantiate scope variables
  result = 1

  # 3a. helper method
  multiply_int = lambda do |count|

    # 4. base case
    return if count > n

    # 5. recursive case
    result *= count
    multiply_int.call(count + 1)
  end

  # 3b. invoke helper method with initial input parameters
  multiply_int.call(1)

  # 2. return result
  result
end

def factorial(n)
  result = (1..n).reduce(1) { |all,x| all *= x }
  yield(result)
end

n = gets.to_i
factorial(n) do |result|
  puts result
end


# def factorial
#   yield
# end

# n = gets.to_i
# factorial do
#   puts (1..n).reduce(:*)
# end

def factorial(n)
  (1..n).reduce(:*)
end
