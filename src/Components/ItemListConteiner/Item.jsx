import './ItemListContainer'
const Item = ({ titulo, precio }) => {
    return (
        <div>
           
            <h1>{titulo}</h1>
            <h3>{precio}</h3>
           
        </div>
    )
}

export default Item