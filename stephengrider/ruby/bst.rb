require 'byebug'
class Node
  def initialize(value)
    @value = value
    @left = nil
    @right = nil
  end
  attr_accessor :value
  attr_accessor :left
  attr_accessor :right

  def insert(value)
    byebug
    new_node =  Node.new(value)
    if left.nil? && value < @value
      self.left = new_node
    elsif right.nil? && value > @value
      self.right = new_node
    elsif value < @value && left
      self.left.value = value
    else value > @value && right
      self.right.value = value
    end
  end
end

node =  Node.new(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(0);
node.insert(-5);
node.insert(3);

puts node.inspect