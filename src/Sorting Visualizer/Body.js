import React, {useState, useEffect} from 'react'
import MergeSort from './Alogorithms/MergeSort'
import QuickSort from './Alogorithms/QuickSort'
import BubbleSort from './Alogorithms/BubbleSort'
import InsertionSort from './Alogorithms/InsertionSort'
import SelectionSort from './Alogorithms/SelectionSort'
import HeapSort from './Alogorithms/HeapSort'
import {doAnimation, finishAnimatioon, changeColor} from './animations'

const Body = () => {
    const [arr, setArr] = useState([])
    const [type, setType] = useState("quickSort")
    const [running, setRunning] = useState(false)
    const [timer, setTimer] = useState([])

    useEffect(()=>{
        generateNewArray(50)
    }, [])


    const generateNewArray= (num) => {
        let temp = []
        for(let i=0; i<num; i++){
            temp[i] = Math.floor(Math.random()*600 + 5)
        }
        setRunning(false)
        changeColor()
        setArr(temp)
    }

    const changeArrayLength = (event) =>{
        generateNewArray(event.target.value)
    }

   

    const startSorting = () => {
        let animation=[]
        setRunning(true)
        let temp=arr.slice()
        if(type === "quickSort") animation = QuickSort(temp)
        if(type === "mergeSort") animation = MergeSort(temp)
        if(type === "heapSort") animation = HeapSort(temp)
        if(type === "bubbleSort") animation = BubbleSort(temp)
        if(type === "insertionSort") animation = InsertionSort(temp)
        if(type === "selectionSort") animation = SelectionSort(temp)  
        const t=(doAnimation(animation))
        t.push(setTimeout(()=>{
            finishAnimatioon()
            setRunning(false)
        }, animation.length*10))
        setTimer(t)
    }

    const sortingType = () => {
        return(
            <>
            <button className="dropbtn">Sorting Type</button>
            <div className="dropdown-content">
                <button onClick={() => setType("mergeSort")} >Merge Sort</button>
                <button onClick={() => setType("quickSort")} >Quick Sort</button>
                <button onClick={() => setType("bubbleSort")} >Bubble Sort</button>
                <button onClick={() => setType("insertionSort")} >Insertion Sort</button>
                <button onClick={() => setType("selectionSort")} >Selection Sort</button>
                <button onClick={() => setType("heapSort")} >Heap Sort</button>
            </div>
            </>
        )
    }

    const onReset = (timer) => {
        for(let i=0; i<timer.length; i++){
            clearTimeout(timer[i])
        }
        generateNewArray(50)
    }

    
    return (
        <div id="container">
            <div id="toolbar">
                <button className="buttons" onClick={() => {onReset(timer)}}>Reset</button>
                <button className="buttons" disabled={running} onClick={() => {startSorting()}}>Start Sorting</button>
                <button className="buttons" disabled={running} onClick={() => {generateNewArray(arr.length)}}>Generate New Array</button>
                <div className="buttons dropdown">{sortingType()}</div>
                <input className="slider" type="range" min="10" max="200"  value={arr.length} step="1" onChange={changeArrayLength} disabled={running} />
            </div>

            <div id="box">
                {
                    arr.map((num, idx)=>(
                        <div 
                        key={idx}
                        className="bars"
                        style={{height: `${num}px`, backgroundColor: "grey"}}></div>
                    ))
                }
            </div>
        </div>
    )
}

export default Body
