'use client'

import Image from "next/image"
import { useState } from "react"
// import TomatoesImg from '/public/food0.png' 이미지 최적화 

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let [수량,수량변경] = useState([0, 0, 0]);

    return (
        <dev>
            <h4 className="title">상품목록</h4>
            <span>{수량[0]}</span>
            <button onClick={() => {
                let copy = [...수량]
                copy[0]++
                수량변경(copy)
            }}>+</button>
            {
                상품.map((_,i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} alt="토마토" className="food-img" />
                            <h4>{상품[i]}</h4>
                            <span> {수량[i]} </span>
                            <button onClick={() => {
                                let copy = [...수량]
                                copy[i]++
                                수량변경(copy)
                            }}>+</button>
                            <button onClick={() => {
                                let copy = [...수량]
                                copy[i]--
                                수량변경(copy)
                            }}>-</button>
                        </div>
                    )
                })
            }
        </dev>
    )
}