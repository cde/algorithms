# Este paso todos los casos
def min_window(s,t)
  return "" if s.empty? || t.empty?
  return s if s.eql?(t)

  left, right, formed  = 0,0,0
  window_counts = {}
  target_counts = {}

  ans = [Float::INFINITY, 0, 0]

  t.each_char do |c|
    target_counts[c] ||= 0
    target_counts[c] += 1
  end
  target_counts_len = target_counts.length

  while right < s.length
    letter = s[right]

    window_counts[letter] = window_counts.fetch(letter, 0 ) + 1
    if target_counts.key?(letter) &&
        window_counts[letter] == target_counts[letter]
      formed +=1
    end

    while left <= right && formed == target_counts_len
      letter = s[left]
      if (right - left + 1) < ans[0]
        puts ans.inspect
        ans = [right - left + 1, left, right]
      end
      window_counts[letter] -= 1
      if target_counts.key?(letter) &&
          window_counts[letter] < target_counts[letter]
        formed -= 1
      end
      left += 1
    end
    right += 1
  end
  return ans[0] == Float::INFINITY ? "" : s[ans[1]..ans[2]]
end