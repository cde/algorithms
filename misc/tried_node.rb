class TrieNode
  attr_accessor :value, :is_word, :descendants
  def initialize(value = nil, is_word = false, descendants = {})
    @value = value
    @is_word = is_word
    @descendants = descendants
  end
end

class Trie
  attr_accessor :root
  def initialize
    @root =  TrieNode.new()
  end

  # def add_word(word)
  #   current = root
  #   index = 0
  #
  #   while(index < word.length)
  #     letter = word[index]
  #     if current.descendants[letter].nil?
  #       current.descendants[letter] = TrieNode(letter)
  #     end
  #     current = current.next[letter]
  #     index +=1
  #   end
  #   current.is_word = true
  # end

  def is_word(str)
    # current = root
    # index = 0
    #
    # while(index < str.length)
    #   letter = str[index]
    #   return false if current.descendants[letter].nil?
    #
    #   current = current.descendants[letter]
    #   index +=1
    # end
    # current.is_word
  end
end