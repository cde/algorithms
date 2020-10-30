def anagram(word, words)
  sorted_target_word = word.chars.sort
  words.select { |word| sorted_target_word == word.chars.sort}
end

def anagrams?(stringA, stringB)

  return false if stringA.length != stringB.length

  cache_a = buildCharMap(stringA)
  cache_b = buildCharMap(stringB)

  cache_a.each_with_object([]) do |(k,v), sum|
    cache_b[k] && cache_b[k] == v
  end.all?(&:true)

end

def buildCharMap(string)
  cache = {}
  formatted_string = string.gsub(/[^\w]/, "").downcase
  formatted_string.each_char do |char|
    cache[char].nil? ?  cache[char] = 1 :  cache[char]+=1
  end
  cache
end


def anagrams(stringA, stringB)
  return false if (stringA.length != stringB.length)
  cleanString(stringA) === cleanString(stringB)
end

def cleanString(string)
  string.gsub(/[^\w]/, "").downcase.split('').sort().join('')
end