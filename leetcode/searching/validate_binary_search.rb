# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Boolean}
def is_valid_bst(root)
  return true if !root
  validate_bst(root)
end

def validate_bst( root, min = -Float::INFINITY, max = Float::INFINITY)
  return false if !root.val >= max || root.val <= min

  validate_bst(root.left, min, root.val) && is_valid_bst(root.right, root.val, max)
end