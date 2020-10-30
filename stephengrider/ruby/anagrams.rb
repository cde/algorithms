# // --- Directions
# // Check to see if two provided strings are anagrams of eachother.
#     // One string is an anagram of another if it uses the same characters
# // in the same quantity. Only consider characters, not spaces
# // or punctuation.  Consider capital letters to be the same as lower case
#                                                                      // --- Examples
# //   anagrams('rail safety', 'fairy tales') --> True
# //   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
# //   anagrams('Hi there', 'Bye there') --> False
#
# def anagrams(str1, str2)
#   return false if str1.length != str2.length
#   counter1 = build_char_map(str1)
#   counter2 = build_char_map(str2)
#
#   is_anagram = false
#   counter1.each_pair do |key, value|
#     is_anagram = counter2[key] == value
#   end
#   is_anagram
# end
#
# def build_char_map(str)
#   cache = {}
#   str.each_char do |char|
#     if cache[char]
#       cache[char] += 1
#     else
#       cache[char] = 1
#     end
#   end
#   cache
# end

def anagrams(str1, str2)
  return false if str1.length != str2.length

  clean_string(str1) == clean_string(str2)
end

def clean_string(str)
  str.gsub(/[^\w]\/g/, "")
      .downcase
      .split('')
      .sort()
      .join('')
end

puts anagrams('rail safety', 'fairy tales')
puts anagrams('Hi there', 'Bye there')