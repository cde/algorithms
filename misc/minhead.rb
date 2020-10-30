class Minheap
  attr_accessor :storage
  def initialize(storage)
    @storage = storage
  end

  def swap(index1, index2)
    storage[index1], storage[index2] = storage[index2], storage[index1]
  end

  def peak
    storage[0]
  end

  def size
    storage.length
  end

  def insert(value)
    storage.push(value)
    bubbleUp(size - 1)
  end

  def get_parent(child)
    if (child % 2 === 0)
      (child - 2) / 2
    else
      (child - 1) / 2
    end
    child
  end

  def bubbleUp(child)
    parent = get_parent(child);

    while(child > 0 && storage[child] && storage[child] < storage[parent] )
      swap(child, parent)
      child = parent
      parent = get_parent(child)
    end
  end

  def remove_peak
    swap(0, size - 1 )
    result = storage.pop
    puts "remove_peak #{result}"

    bubbleDown(0)
    result
  end

  def get_child(parent)
    child_one = 2 * parent + 1
    child_two = 2 * parent + 2

    puts "child_one: #{child_one} - child_two: #{child_two}"

    if(child_one >= size )
      return child_one
    elsif child_two >= size
      return child_one
    elsif (storage[child_one] < storage[child_two])
      return child_one
    else
       child_two
    end
  end

  def bubbleDown(parent)
    child = get_child(parent)
    while(child < size && storage[parent] > storage[child] )
      swap(child,parent)
      parent = child
      child = get_child(parent)
    end
  end

  def remove(value)
    remove_index = storage.index(value)
    return if remove_index.nil?
    swap(remove_index, size - 1)
    result = storage.pop
    puts "remove #{result}"
    bubbleUp(remove_index)
    bubbleDown(remove_index)
    result
  end
end

test = Minheap.new([])

test.insert(2)
test.insert(5)
test.insert(4)
test.insert(9)
test.insert(6)
test.insert(1)
puts test.inspect()
#
# puts test.get_child(0)
# puts test.remove_peak()

puts test.remove(6)
puts test.inspect
