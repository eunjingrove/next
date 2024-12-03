export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']

    return (
        <dev>
            <h4 className="title">상품목록</h4>
            {
                상품.map((_,i) => {
                    return (
                        <div className="food">
                            <h4>{상품[i]}</h4>
                        </div>
                    )
                })
            }
        </dev>
    )
}