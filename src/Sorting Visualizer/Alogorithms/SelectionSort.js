export default function SelectionSort(arr){
    const animations = []
    doSelectionSort(arr, animations)
    return animations
}

function doSelectionSort(arr, animations){
    for(let i=0; i<arr.length - 1; i++){
        let min = arr[i]
        let minIdx = i
        for(let j=i+1; j<arr.length; j++ ){
            animations.push(["red", [j, minIdx]])
            animations.push(["grey", [j, minIdx]])
            if(arr[j]<min){
                minIdx = j
                min = arr[j]
            }
        }
        animations.push([true, [[i,arr[i]], [minIdx, arr[minIdx]]]])
        let temp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = temp
    }
}

