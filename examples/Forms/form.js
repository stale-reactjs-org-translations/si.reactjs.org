function Form(props){
    return(
        <div>
            <input type = "text" placeholder="enter the first name here" name="firstName" value={props.person.firstName} onChange={this.handlesubmit.bind(this)} />
            <input type = "text" placeholder="enter the last name here" name="lastName" value={props.person.lastName} onChange={this.handlesubmit.bind(this)} />
        </div>
    )
}
const person={
    firstName:'',
    lastName:''
}
function handlesubmit(e){
    let name = e.target.name
    //let value = e.target.value
    let value = target.type === 'checkbox' ? target.checked : target.value
    person.name = value
}

ReactDOM.render(
    <Form />,
    document.getElementById('root')
  );