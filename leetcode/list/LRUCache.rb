require 'pry'
class Node
  attr_accessor :key, :data, :next, :previous
  def initialize(key, data)
    @key = key
    @data = data
    @next = nil
    @previous = nil
  end
end

class LRUCache
  attr_reader :head, :tail, :cache, :capacity

  def initialize(capacity)
    @head = Node.new('dh',0)
    @tail = Node.new('dt', 0)

    @cache = {}
    @head.next = tail
    @tail.previous = head
    @capacity = capacity
    @size = 0
  end

  def put(key,value)
    node = cache[key]
    if node.nil?
      node = Node.new(key, value)
      cache[key] = node
      add(node)
      @size +=1

      if @size > capacity
        evict = tail.previous
        remove(evict)
        cache.delete_if{|k,_v| k == evict.key}
        @size -= 1
      end
    else
      node.data = value
      remove(node)
      add(node)
    end
  end

  def get(key)
    node = cache[key]
    return -1 if node.nil?

    #move node to head
    remove(node)
    add(node)
    return node.data
  end

  private

  def remove(node)
    #Remove an existing node from the linked list.
    prev_node = node.previous
    next_node = node.next
    next_node.previous = prev_node
    prev_node.next = next_node
  end

  def add(node)
    #Always add the new node right after head.
    node.previous = head
    node.next = head.next
    head.next.previous = node
    head.next = node
  end
end

cache = LRUCache.new(2)
cache.put(1,1)
cache.put(2,2)
puts cache.get(1);       # returns 1
puts cache.put(3, 3);    # evicts key 2
puts cache.inspect
cache.get(2);