let merge = function(nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (second < 0) {
            break;
        }

        if (first >= 0 && nums1[first] > nums2[second]) {
            nums1[i] = nums1[first];
            first--;
        } else {
            nums1[i] = nums2[second];
            second--;
        }
    }
    return nums1
};

// let nums1 = [1,2,3,0, 0, 0]
// m = 3
// nums2 = [2,5,6]
// n = 3

let nums1 = [2, 0]
let m = 1
let nums2 = [1]
let n = 1
console.log(merge(nums1, m, nums2, n))