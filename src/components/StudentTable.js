import { Component } from "react";

class StudenTable extends Component {
    constructor(props) {
        super(props)
        this.sua_student = this.sua_student.bind(this)
        this.xoa_student = this.xoa_student.bind(this)
    }
    xoa_student(e,id) {
      this.props.xoa_student(id)
    }
    sua_student(e,item) {
      this.props.sua_student(item)
    }
    render() {
        return <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.studentlist.map(item=>
            <tr>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={(e)=>{this.sua_student(e,item)}} className={(this.props.choose_student.name == item.name) ? 'btn btn-primary' : 'btn btn-info'}>Edit</button>
                <button onClick={(e)=>{this.xoa_student(e,item.id)}} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    }
}

export default StudenTable