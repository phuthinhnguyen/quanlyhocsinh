import { Component } from "react";

class FormStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {form:{}}
    }
    submit_student=e=>{
        e.preventDefault();
        this.props.submit_student(this.state.form)
    }
    handleChange=e=>{
        this.setState({
            form:{...this.state.form,[e.target.name]:e.target.value}
        })
    }
    handleForm=form=>{
        this.setState({form:form})
    }
    render() {
        return (
            <>
                <h1>Student List</h1>
                <form onSubmit={this.submit_student}>
                    <div className="row">
                        <div className="col">
                            <label>Name: &nbsp;</label>
                            <input value={this.state.form.name} onChange={this.handleChange} type="text" className="form-control" placeholder="Tên sách" name="name"/>
                        </div>
                        <div className="col">
                            <label>Phone: </label>
                            <input value={this.state.form.phone} onChange={this.handleChange} type="text" className="form-control" placeholder="Tác giả" name="phone"/>
                        </div>
                        <div className="col">
                            <label>Email: &nbsp; </label>
                            <input value={this.state.form.email} onChange={this.handleChange} type="text" className="form-control" placeholder="Tác giả" name="email"/>
                        </div>
                        <div className="col" style={{marginTop:10}}>
                            <button type="submit" className="btn btn-primary">{this.state.form.id === undefined? "Add Student" : "Edit Student"}</button>
                        </div>
                    </div>
                </form><br></br>
            </>
        )
      
    }
}

export default FormStudent