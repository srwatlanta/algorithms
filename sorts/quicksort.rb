# function quickSort(arr, left = 0, right = arr.length - 1){
#     if(left < right){
#       console.log(left, right)
#       let pivot = findPivot(arr, left, right)
#       quickSort(arr, left, pivot - 1)
#       quickSort(arr, pivot + 1, right)
#     }
#     return arr
#   }
  
#   function findPivot (arr, start = 0, end = arr.length + 1){
#     let pivot = arr[start]
#     let swap = start
#     for (let i = start + 1; i < arr.length; i++){
#       if(arr[i] < pivot){
#         swap++
#         [arr[i], arr[swap]] = [arr[swap], arr[i]]
#       }
#     }
#     [arr[start], arr[swap]] = [arr[swap], arr[start]]
#     return swap
#   }

def quick_sort(arr, left = 0, right = arr.length - 1)
    if left < right
        pivot = find_pivot(arr, left, right)
        quick_sort(arr, left, pivot - 1)
        quick_sort(arr, pivot + 1, right)
    end
    arr
end

def find_pivot(arr, start = 0, finish = arr.length + 1)
    pivot = arr[start]
    swap = start
    i = start + 1
    while(i < arr.length)
        if arr[i] < pivot
            swap += 1
            temp = arr [i]
            arr[i] = arr[swap]
            arr[swap = temp]
        end
    end
    temp = arr[start]
    arr[start] = arr[swap]
    arr[swap] = temp
    swap
end

p quick_sort([12, 3, 14, 11, 111, 1, -4])