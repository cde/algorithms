def removeDuplicateLetters( s: str) -> str:
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

print(removeDuplicateLetters("banana"))