# bubble sort

def bubble_sort(arr):
    for end in range(len(arr) - 1, -1, -1):
        swap = false
        for i in (0..end):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
                swap = True

        break: if swap == False

    return arr