import { Component } from 'react'
import './index.css'

interface EpmloyeeListItemProps {
    id:number,
    name:string, 
    salary:number,
    onDelete: () => void
}

interface ClassState {
    increase: boolean, 
    star: boolean
}

class EmployeeListItem extends Component<EpmloyeeListItemProps, ClassState> {
    constructor(props: EpmloyeeListItemProps){
        super(props)
        this.state = {
            increase: false,
            star: false
        }
    }

    changeCook = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    changeStar = () => {
        this.setState(({star}) => ({
            star :!star
        }))
    }

    
    render(){
        const {name, salary, onDelete} = this.props
        const {increase, star} = this.state
        let classNames = "list-group-item d-flex justify-content-between"
        if(increase){
            classNames = classNames + ' increase'
        }
        if(star){
            classNames = classNames + ' like'
        }
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.changeStar}>{name}</span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    defaultValue={salary}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.changeCook}
                        type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button 
                        type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeeListItem