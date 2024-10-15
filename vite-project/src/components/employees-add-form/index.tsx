import { Component } from 'react'
import './index.css'


interface PropsForm {
    onAdd : (name:string, salary:number) => any
}

interface ClassState {
    name?:any,
    salary?: any
}

class EmployeesAddForm extends Component<PropsForm, ClassState> {
    constructor(props:PropsForm){
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }


    onGetValue = (e:any) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmitt = (e:any) => {
        e.preventDefault()
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState ({
            name: '',
            salary: ''
        })
    }


    render(){
        const {name, salary} = this.state
        return(
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmitt}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name ="name"
                        value={name}
                        onChange={this.onGetValue}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onGetValue}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm