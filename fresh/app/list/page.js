import Image from "next/image"
// import TomatoesImg from '/public/food0.png' 이미지 최적화 

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']

    return (
        <dev>
            <h4 className="title">상품목록</h4>
            {
                상품.map((_,i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} alt="토마토" className="food-img" />
                            <h4>{상품[i]}</h4>
                        </div>
                    )
                })
            }
        </dev>
    )
}