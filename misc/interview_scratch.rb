

#        0   1    2    3    4  5   6   7
# Naman  X                  X  X
# Victor     X                 X.  X
# Yash                                 X


#        0   1    2    3    4  5   6   7
# Naman  X   X    X
# Victor X               .  X
# Yash                             X
# [
#   [[0,2]],
#   [[3,4]],
#.  [[6,6]]
# ] => 6
# [ 0, 1, 4, 5, 6, 7 ].length = 6
# [
#  [[0,0],[4,5]],
#  [[1,1],[5, 6]],
#  [[7,7]]
# ] => 6
# calendar_days - the number of days where at least one person is working


def calendar(schedules)
  calendars = schedules.each_with_object([]) do |sch, memo|
    memo << sch.map {|s|  calculate(s[0],s[1])}
  end #[ [2, 2], [9996]] => [2,2,9996]
  calendars.flatten.reduce(:+)
end

def calculate(n1,n2)
  n2 - n1 + 1
end

puts calendar(
         [
             [[0,1], [4,5]],
             [[5,10000]]
         ]
     )

[2, 9998]

# [0,1] - 2 days
# [5, 10000] - 9996 days
# 9998 days
#
#
def identify_class(obj)
    # write your case control structure here
    class_name = obj.to_s
    case obj.class
        when Hacker
            "It's a Hacker!"
        when 'Submission'
            "It's a Submission!"
        when 'TestCase'
            "It's a TestCase!"
        when 'Contest'
            "It's a Contest!"
        else
            "It's an unknown model"
    end
end