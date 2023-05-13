import logo from './logo.svg';
import './App.css';
import React from 'react';
import StudenTable from './components/StudentTable';
import FormStudent from './components/FormStudent';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.FormStudent = React.createRef()
    this.state = {
      studentList:[
        {id:1,name:"student 1",phone:"0987456698",email:"student1@gmail.com"},
        {id:2,name:"student 2",phone:"0937439340",email:"student2@gmail.com"},
        {id:3,name:"student 3",phone:"0989875656",email:"student3@gmail.com"},
      ],
      item:{},
    }
    this.xoa_student = this.xoa_student.bind(this)
    this.sua_student = this.sua_student.bind(this)
    this.submit_student = this.submit_student.bind(this)
  }
  xoa_student(id) {
    this.setState({
      studentList: this.state.studentList.filter(item=>item.id!==id)
    })
  }
  sua_student(item) {
    if (item.id !== this.state.item.id) {
      this.setState({
        item:item
      })
      this.FormStudent.current.handleForm(item)
    } else {
      this.setState({
        item:{}
      })
      this.FormStudent.current.handleForm({name:"",phone:"",email:""})
    }
  }
  submit_student(form) {
    if (form.id === undefined) {
      const studentList = [...this.state.studentList]
      studentList.push({...form,id:Math.floor(Math.random()*100)})
      this.setState({studentList:studentList})
      this.FormStudent.current.handleForm({name:"",phone:"",email:""})
    }
    else{
      const studentListnew = [...this.state.studentList]
      const index = studentListnew.findIndex(item=>item.id===form.id)
      studentListnew[index].name = form.name;
      studentListnew[index].phone = form.phone;
      studentListnew[index].email = form.email;
      this.setState({studentList:studentListnew});
      this.FormStudent.current.handleForm({name:"",phone:"",email:""})
    }
  }
  render() {
    return <>
      <FormStudent ref={this.FormStudent} submit_student={this.submit_student} />
      <StudenTable sua_student={this.sua_student} xoa_student={this.xoa_student} studentlist={this.state.studentList} choose_student={this.state.item} />
    </>
  }
}

export default App;



