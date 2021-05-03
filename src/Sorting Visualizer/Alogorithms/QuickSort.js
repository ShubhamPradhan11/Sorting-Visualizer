

export default function QuickSort(arr){
    const animations = []
    doQuickSort(arr, 0, arr.length - 1, animations)
    return animations

}

function doQuickSort(arr, start, end, animations){
    if(start >= end) return
    
    const pIdx = partition(arr, start, end, animations)
    doQuickSort(arr, start, pIdx - 1,animations )
    doQuickSort(arr, pIdx + 1, end, animations)
}

function partition(arr, start, end, animations){
    const pivot = arr[end]
    let pIdx = start
    for(let i=start; i<end; i++){
        animations.push(["red", [i,end]])
        animations.push(["grey", [i,end]])
        if(arr[i] <= pivot){
            animations.push([true, [[i, arr[i]], [pIdx, arr[pIdx]]]])
            let temp = arr[i]
            arr[i] = arr[pIdx]
            arr[pIdx] = temp
            pIdx++
        }
    }
    animations.push([true, [[pIdx, arr[pIdx]], [end, arr[end]]]])
    let temp = arr[pIdx]
    arr[pIdx] = arr[end]
    arr[end] = temp
    return pIdx
}
