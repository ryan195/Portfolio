import { useState } from "react"
import './ListGroup.css'

function onSelectItem(item: String, index: number, props: Props) {
    console.log(item)
    props.sendData(index)
}

interface Props {
    items: String[]
    sendData: Function
}

function ListGroup(props:Props) {
    const items = props.items
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
    <>
        <ul className="list-group">
            {items.map((item, index) => 
            <li className={index === selectedIndex ? "list-group-item active" : "list-group-item"} 
                onClick={()=>{
                    setSelectedIndex(index)
                    onSelectItem(item, index, props)
                }}>
                {item}</li>)}
        </ul>
    </>)
}

export default ListGroup