import { Component } from 'react'

import AppInfo from '../app-info'
import SearchPanel from '../search-panel'
import AppFilter from '../app-filter'
import EmployeeList from '../employees-list'
import EmployeesAddForm from '../employees-add-form'

import './App.css'


/* interface WhoAmIProps {
    name:string,
    sername:string,
    link:string
}

function WhoAmI (props:WhoAmIProps) {
    return (
        <div>
            <h1>My name is {props.name} {props.sername}</h1>
            <a href={props.link}>My profile</a>
        </div>
    )
} */

interface DataItem {
    name:string,
    salary: number,
    increase:boolean,
    id:number
}
interface ClassState {
    data:DataItem[]
}


class App extends Component<{}, ClassState> {
    constructor(props:{}){
        super(props)
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, id: 2},
                {name: 'Carl W.', salary: 5000, increase:false, id: 3}
            ]
        }

    }

    /* interface Data {
        name:string,
        sername:string,
        link:string
    }

    class WhoAmI extends Component{
        constructor(props:Data){
            super(props)
            this.state = {
                years:27,
                textInput: ''
            }
        }

        nextYear = () => {
            console.log('+++')
            this.setState(state => {
                years: state.years + 1
            })
        }

        commitInputChanges = (event:any, color:string) => {
            console.log(color)
            this.setState(state => ({
                textInput: event.target.value
            }))
        }

        render(): ReactNode {
            const {name, sername, link} = this.props
            const {years, textInput} = this.state
            return(
                <div>
                    <button onClick={this.nextYear}>+++</button>
                    <h1>My name is {name} {sername} , {years}, {textInput}</h1>
                    <a href={link}> my profile</a>
                    <form>
                        <span>enter prod</span>
                        <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
                    </form>
                </div>
            )
        }
        
    } */

    deleteItem = (id:number) =>{
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addNewItem = (name:string, salary:number) => {
        console.log("ta")
        const newItem = {
            name: name,
            salary:salary,
            increase:false,
            id: this.state.data.length + 1
        }
        const newArr = [...this.state.data, newItem];
        this.setState(() => {
            return{
                data: newArr
            }
            
        })
    }

    render() {
        const {data} = this.state
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeeList 
                data={data}
                onDelete={this.deleteItem}
                />
                <EmployeesAddForm
                onAdd={this.addNewItem}/>
            </div>
        )
    }
    
}

export default App