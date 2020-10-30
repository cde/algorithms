def removeDuplicateLetters(self, s: str) -> str:
        dictionary ={} #// dictionary data structure to store last index of character
        stack = [] # to keep track of order of characters
        sets = set() # to see whether the element is added to stack or not if not add to stack
        res = '' # final result that we're going to return
#         -- here is the logic to store last index of character in dictionary
        for i in range(0,len(s)):
            dictionary[s[i]]=i
#         -- here's the logic to keep track of order of the string
        for i in range(0,len(s)):
#         -- making use of set data structure to add values to stack
            if s[i] not in sets:
                #adding value to set
                sets.add(s[i])
                # condition to keep track of current order and finding the correct place of character
                while stack and s[i] < stack[-1] and i < dictionary[stack[-1]]:
                    sets.remove(stack.pop())
                stack.append(s[i])
#         -- poping elements from stack and appending to result
        for i in range(0,len(stack)):
            res += stack.pop()
#         -- returning reverse of characters from result string
        return res[::-1]



print('hello')

def remove_duplicate(s):
  dictionary ={}
  stack = []
  sets = set()
  res = ''
  for i in range(0,len(s)):
    dictionary[s[i]]=i
  for i in range(0,len(s)):
    if s[i] not in sets:
      sets.add(s[i])
      while stack and s[i] < stack[-1] and i < dictionary[stack[-1]]:
        sets.remove(stack.pop())
      stack.append(s[i])
  for i in range(0,len(stack)):
    res += stack.pop()
  return res[::-1]

print(remove_duplicate('cdadabcc'))
#
# -> dictinary = {'c':7,'d':3,'a':4,'b':5}
#
# i = 0
# s[0] = 'c' -> set - ('c') -> stack -> ['c']
# s[1] = 'd' -> set - ('c','d') -> stack -> ['c', 'd']
# s[2] = 'a' -> set - ('a') -> stack -> ['a']
# s[3] = 'd' -> set - ('a','d')-> stack -> ['a','d']
# s[4] = 'a' -> set - ()
# s[5] = 'b' -> set - ('a','d', 'b') -> stack['a', 'd','b']
# s[6] = 'c' -> set - ('a','d', 'b', 'c') -> stack['a', 'd','b', 'c']




# https://leetcode.com/problems/remove-duplicate-letters/


