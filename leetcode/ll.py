def palindrome(input_string):
    for i in range(0, len(input_string) // 2):
        if input_string[i] != input_string[len(input_string) - i - 1]:
            return False
    return True

print(palindrome("aba"))

# def longest_palindromic(inp_string):
#     i = 0
#     j = len(inp_string)
#
#     while i < j:
#         if (not palindrome(inp_string[i:j])):
#             i = i + 1
#             j = j - 1
#             if (palindrome(inp_string[i - 1:j])):
#                 left_palin = inp_string
#             if (palindrome(inp_string[i:j + 1])):
#                 right_palin = inp_string
#     if len(left_palin) > len(right_palin):
#         return left_palin
#     else:
#         return right_palin


# print(longest_palindromic("cbbd"))
