  def stepPerms(n)
    return 1 if n == 1 || n == 0

    steps = [1,2,3]
    cache = {}

    total = 0
    steps.each do |step|
      if n - step == 0
        total += 1
      elsif n - step > 0
        if cache[n-step].nil?
          cache[n-step] = stepPerms(n - step)
        end
        total += cache[n-step]
      end
    end
    total
  end
