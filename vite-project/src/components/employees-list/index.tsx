import EmployeeListItem from "../employees-list-item"
import './index.css'


const EmployeeList = ({data, onDelete}:any) => {
    const elements = data.map((item:any) => {
        const {id, ...ItemProps} = item
        return (
            
            <EmployeeListItem 
                key={id}
                onDelete={() => onDelete(id)}
                {...ItemProps}
                />
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeeList