

export default function MergeSort(arr){
    const animations = []
    const auxilaryArray = arr.slice()
    doMergeSort(arr, auxilaryArray, 0, arr.length - 1, animations)
    return animations
}

function doMergeSort(mainArr, auxArr, minIdx, maxIdx, animations){
    if(minIdx>=maxIdx) return
    const mid = Math.floor((minIdx + maxIdx)/2)
    doMergeSort(auxArr, mainArr, minIdx, mid, animations)
    doMergeSort(auxArr, mainArr, mid + 1, maxIdx, animations)
    merge(mainArr, auxArr, minIdx, maxIdx, mid, animations)
}

function merge(mainArr, auxArr, minIdx, maxIdx, mid, animations){
    let i = minIdx, k = minIdx, j = mid + 1

    while(i<=mid && j<=maxIdx){
        animations.push(["red", [i,j]])
        animations.push(["grey", [i,j]])
        if(auxArr[i] <= auxArr[j]){
            animations.push([true, [[k, auxArr[i]], [k, auxArr[i]]]])
            mainArr[k] = auxArr[i]
            k++
            i++
        }
        else{
            animations.push([true, [[k, auxArr[j]], [k, auxArr[j]]]])
            mainArr[k] = auxArr[j]
            k++
            j++
        }
    }

    while(i<=mid){
        animations.push(["red", [i,i]])
        animations.push(["grey", [i,i]])
        animations.push([true, [[k, auxArr[i]], [k, auxArr[i]]]])
        mainArr[k] = auxArr[i]
        k++
        i++
    }

    while(j<=maxIdx){
        animations.push(["red", [j,j]])
        animations.push(["grey", [j,j]])
        animations.push([true, [[k, auxArr[j]], [k, auxArr[j]]]])
        mainArr[k] = auxArr[j]
        k++
        j++
    }
}

