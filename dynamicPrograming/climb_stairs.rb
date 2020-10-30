def climb_stairs(n)
  cache = {}
  climb = lambda do |n|
    if cache[n]
      return cache[n]
    end
    return 1 if n.zero? || n == 1
    return 2 if n == 2
    cache[n] = climb.call(n - 1) + climb.call(n - 2) + climb.call(n - 3)
  end
  climb.call(n)
  cache[n]
end

def climb_stairs(n)
  cache = {}
  cache[n] = 1 if n == 0
  cache[n] = 1 if n == 1
  cache[n] = 2 if n == 2

  if cache[n]
    return cache[n]
  end
  cache[n] = climb_stairs(n - 1 ) + climb_stairs(n - 2) + climb_stairs(n -1)
  cache[n]
end