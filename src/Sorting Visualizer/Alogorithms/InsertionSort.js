 export default function InsertionSort(arr){
     const animations = []
     doInsertionSort(arr, animations)
     return animations
 }

 function doInsertionSort(arr, animations){
     for(let i=1; i<arr.length; i++){
        let j = i
        let value = arr[i] 
        // animations.push(["red", [j-1,j]])
        // animations.push(["aqua", [j-1,j]])
        while(j>0 && arr[j-1] > value){
            animations.push(["red", [j-1,j]])
            animations.push(["grey", [j-1,j]])
            animations.push([true, [[j, value], [j-1, arr[j-1]]]])
            arr[j] = arr[j-1]
            j--;
        }
        //animations.push([true, [[j, arr[j]], [j+1, arr[j+1]]]])
        arr[j] = value
     }
 }
 