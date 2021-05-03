
const doAnimation=(animations)=>{
    const timer=[]
    const arrBars = document.getElementsByClassName("bars")
    for(let i=0; i<animations.length; i++){
        const swap =  typeof(animations[i][0]) == "boolean"? true: false
        if(!swap){
            const [firstBar , secondBar] = animations[i][1]
            const firstBarStyle = arrBars[firstBar].style
            const secondBarStyle = arrBars[secondBar].style
            const color = animations[i][0]
            timer.push(setTimeout(() => {
                firstBarStyle.backgroundColor = color
                secondBarStyle.backgroundColor = color
            }, i*10 )) 
        }
        if(swap){
            const [firstBar, secondBar] = animations[i][1]
            const [firstIdx , firstHeight] = firstBar
            const [secondIdx, secondHeight] = secondBar
            const firstBarStyle = arrBars[firstIdx].style
            const secondBarStyle = arrBars[secondIdx].style
            timer.push(setTimeout(() => {
              firstBarStyle.height = `${secondHeight}px`
              secondBarStyle.height = `${firstHeight}px`  
            }, i*10))
        }
    }
    return timer
}

const finishAnimatioon=()=>{
    const arrBars=document.getElementsByClassName("bars")
    for(let i=0; i<arrBars.length; i++){
        setTimeout(()=>{
            arrBars[i].style.backgroundColor = "rgb(63, 160, 63)"
        }, i*10)
    }
}

const changeColor=()=>{
    const arrBars=document.getElementsByClassName("bars")
    for(let i=0; i<arrBars.length; i++){
        arrBars[i].style.backgroundColor = "grey"
    }
}

export {doAnimation, finishAnimatioon, changeColor}