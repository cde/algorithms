class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.size = 0
        self.map = {}
        self.dll = Dll()

    def get(self, key: int) -> int:
        try:
            n = self.map[key]
        except KeyError:
            return -1

        cache_entry = self.dll.delete_node(n)
        value = cache_entry.v

        new_n = self.dll.insert_element_at_head(cache_entry)
        self.map[key] = new_n

        return value

    def put(self, key: int, value: int) -> None:
        cache_entry = None
        try:
            n = self.map[key]
            cache_entry = self.dll.delete_node(n)
            cache_entry.v = value
        except KeyError:
            if self.size >= self.capacity:
                self.__evict()
            cache_entry = CacheEntry(key, value)
            self.size += 1

        n = self.dll.insert_element_at_head(cache_entry)
        self.map[key] = n

        return

    def __evict(self):
        cache_entry = self.dll.delete_node(self.dll.last)
        self.map.pop(cache_entry.k, None)
        key = cache_entry.k
        value = cache_entry.v
        self.size -= 1
        return


class CacheEntry:
    def __init__(self, key, value):
        self.k = key
        self.v = value


class Node:
    def __init__(self, value, prev, nex):
        self.value = value
        self.prev = prev
        self.next = nex

class Dll:
    def __init__(self):
        self.first = None
        self.last = None

    def insert_element_at_head(self, value):
        new_node = Node(value, None, None)
        if self.first is None:
            self.first = new_node
            self.last = new_node
            return new_node

        old_first = self.first
        new_node.next = old_first
        old_first.prev = new_node
        self.first = new_node
        return new_node

    def delete_node(self, node):
        prev_node = node.prev
        next_node = node.next

        if prev_node is not None:
            prev_node.next = next_node
        else:
            self.first = next_node

        if next_node is not None:
            next_node.prev = prev_node
        else:
            self.last = prev_node

        value = node.value
        node = None
        return value


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)