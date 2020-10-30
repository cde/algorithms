require 'set'

def remove_duplicate_letters(string)

  dictionary = {}
  stack = []
  sets = Set.new([])

  (string.length - 1).times do | i |
    dictionary[string[i]] = i
  end

  while i <= string.length
    char = string[i]
  end

  end

  string.each_char do |char|
    unless sets.include?(char)
      sets.add(char)

      while stack and char < stack
    end
  end
end
