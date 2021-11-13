import React,{useState, useEffect} from "react";
import "./Userlist.css";
import { Container } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { useHistory } from "react-router";

const Userlist = () => {

    const [collegeList, setCollegeList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const history = useHistory();

    useEffect(() => {
      getCollegeNames();  
      getStudentData();
    }, [])
    
    const getCollegeNames = () => {
    // we are getting data through api--method: 'GET' called
    const apiKey = "http://universities.hipolabs.com/search?name=middle";
    fetch(apiKey).then(res=>{
        return res.json();
    }).then(data=>{
        console.log("data from apikey",data)
        setCollegeList(data);
    }).catch((err)=>{
        console.log(err)
    })
    
    }
    
    const getStudentData = () => {
         // we are getting data through api--method: 'GET' called
    const apiKey = "https://618eb8c250e24d0017ce1403.mockapi.io//student";
    fetch(apiKey).then(res=>{
        return res.json();
    }).then(data=>{
        console.log("data from student",data)
        let studentData = []
        studentData.push(data)
        setStudentList(studentData);
        console.log("student data",studentData);
    }).catch(err=>console.log(err))

    }


    const columns = [
        { dataField: 'id', text: 'REGISTRATION ID' },
        { dataField: 'username', text: 'USER NAME' },
        { dataField: 'birthdate', text: 'BIRTH DATE' },
        { dataField: 'address', text: 'ADDRESS' },
        { dataField: 'gender', text: 'GENDER' },
        { dataField: 'college', text: 'COLLEGE' },
        { dataField: 'hobbies', text: 'HOBBIES' }
        
       ];
    //Navigating from table data to register page to upadate the data
    const rowEvents= {
        onClick: (e, row, rowIndex)=>{
            console.log("row",row);
            history.push({
                pathname: '/',
                Userlist: row.id
            })
        }
    };

    return (
        <div style={{ marginTop: 40, padding: '5px'}}>
            <Container>
                <BootstrapTable keyField='username' data={studentList} columns={columns} rowEvents={rowEvents}/>
            </Container>
        </div>
    );

}

  

export default Userlist;