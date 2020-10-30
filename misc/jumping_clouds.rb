# Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.
#
#     For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .
#
#     Function Description
#
# Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.
#
#     jumpingOnClouds has the following parameter(s):
#
#     c: an array of binary integers
# Input Format
#
# The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .
#
#     Constraints
#
# Output Format
#
# Print the minimum number of jumps needed to win the game.
#
#
# #!/bin/ruby
#
# require 'json'
# require 'stringio'
# c= [0, 1, 0, 0, 0, 1, 0]
# # Complete the jumpingOnClouds function below.
def jumpingOnClouds(c)
  len = c.length - 1
  return 0 if len < 2 || len > 100

  i = c[1].zero? ? 2 : 0

  return 1 if len == 2 && i == 2

  jumps =  0

  while i < len
    if c[i] == 0
      i += 1
    end
    jumps +=1
    i += 1
  end
  jumps
end
