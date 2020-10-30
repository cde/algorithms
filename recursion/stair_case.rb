def stepPerms(n)
  return 1 if n == 0 || n == 1
  stepPerms(n - 1) +  stepPerms(n - 2)
end

def stepPerms(n) #Bottom up
  return 1 if n == 0 || n == 1
  steps = [1,1]

  for i in 2..n do
    steps << steps[i - 1] + steps[i - 2]
  end
  return steps[n]
end

#https://www.youtube.com/watch?v=5o-kdjv7FD0
#
#
# {1,3,5}
def num_ways(n)
  return 1 if n == 0 || n == 1
  num_ways_x(n - 1) + num_ways_x(n -3)
end

def num_ways_x(n)
  return 1 if n == 0
  num_ways(n - 1) + num_ways(n - 3) + num_ways( n - 5)
end

def num_ways_x(n)
  return 1 if n == 0
  total = 0
  [1,2,3].each do |i|
    if total >= 0
      total += num_ways_x(n-i)
    end
  end
  total
end

def num_ways_x_bottom_up(n,x)
  return 1 if n== 0
  nums = [1]
  for i in 1..n do
    total = 0
    x.each do |j|
      if (i - j) >= 0
        total += nums[i-j]
      end
    end
    nums[i] = total
  end
  nums[n]
end