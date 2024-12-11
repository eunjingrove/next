'use client'

import Image from "next/image"
import { useState } from "react"
// import TomatoesImg from '/public/food0.png' 이미지 최적화 

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let [수량,수량변경] = useState(0);

    return (
        <dev>
            <h4 className="title">상품목록</h4>
            {
                상품.map((_,i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} alt="토마토" className="food-img" />
                            <h4>{상품[i]}</h4>
                            <span> {수량} </span>
                            <button onClick={() => { 수량변경(수량+1)}}>+</button>
                            <button onClick={() => { 수량변경(수량-1)}}>-</button>
                        </div>
                    )
                })
            }
        </dev>
    )
}