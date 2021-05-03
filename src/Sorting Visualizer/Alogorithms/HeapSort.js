export default function HeapSort(arr){
    const animations = []
    doHeapSort(arr, animations)
    return animations
}

function doHeapSort(arr, animations){
    const n = arr.length
    for(let i=n/2 - 1; i>=0; i--){
        heapify(arr, n, i, animations)
    }

    for(let i=n-1; i>0; i--){
        let temp = arr[i]
        animations.push([true, [[0, arr[0]], [i, arr[i]]]])
        arr[i] = arr[0]
        arr[0] = temp
        heapify(arr, i, 0, animations)
    }
}

function heapify(arr, n, i, animations){
    let largest = i
    const l = 2*i + 1
    const r = 2*i + 2
    
    if(l<n){
        animations.push(["red", [largest, l]])
        animations.push(["grey", [largest, l]])
    }
    if(l < n && arr[largest] < arr[l]){
        largest = l
    }
    
    if(r<n){
        animations.push(["red", [largest, r]])
        animations.push(["grey", [largest, r]])
    }
    if(r < n && arr[largest] < arr[r]){
        largest = r
    }

    if(largest !== i){
        let temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp
        heapify(arr,n,largest, animations)
    }
}
