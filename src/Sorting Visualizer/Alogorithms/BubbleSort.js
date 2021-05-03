
export default function BubbleSort(arr){
    const animations = []
    doBubbleSort(arr, animations)
    return animations
}

function doBubbleSort(arr, animations){
    for(let i=0; i<arr.length - 1; i++){
        let flag = 0
        for(let j=0; j<arr.length - 1 - i; j++){
            animations.push(["red", [j, j+1]])
            animations.push(["grey", [j, j+1]])
            if(arr[j]>arr[j+1]){
                animations.push([true, [[j, arr[j]], [j+1, arr[j+1]]]])
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                flag = 1
            }
        }
        if(flag === 0) break
    }
}

