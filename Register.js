import React, { useState, useEffect } from 'react';
import { Form, Container, Button } from "react-bootstrap";
import "./Register.css";
import { useHistory } from 'react-router';

const Register = (props) => {

    let history = useHistory();

    const [existingUserId, setExistingUserId] = useState();
    const [editMode, setEditMode] = useState(false);

    // const [state, setState] = useState([]);

    const [apiRecords, setApiRecords] = useState([]);
    const [userRecords, setUserRecords] = useState({
        username: "",
        birthdate: "",
        address: "",
        gender: "",
        college: "",
        hobbies: ""
    });

    useEffect(() => {
        userListData();
    }, []);

    // useEffect(() => {
    //     let studentId = props.history.location.studentId;
    //     console.log("studentId", studentId);
    //     if (studentId) {
    //         setExistingStudentId(studentId)
    //         setEditMode(true)
    //         fetch()
    //             .then(res => res.json())
    //             .then(response => {
    //                 console.log("data for student", response)
    //                 setRecords({
    //                     username: response.username,
    //                     birthdate: response.birthdate,
    //                     address: response.address,
    //                     gender: response.gender,
    //                     gender: response.gender,
    //                     hobbies: response.hobbies,

    //                 })
    //             })
    //     }
    // }, [])



    const userListData = () => {
        //we are getting data through api--method: 'GET' called
        const apiKey = "http://universities.hipolabs.com/search?name=Middle";
        fetch(apiKey).then(res => {
            console.log("res", res);
            return res.json();
        }).then(data => {
            setApiRecords(data);
            console.log("data", data);
        });

    }
    const Reset = () => {
        setUserRecords();
    }

    const onRegistration = (data) => {
        console.log("submitted", data);
        alert("Form Submitted Successfully");

    }
    return (

        <Container className=" mt-4 mb-4">
            <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-6 ms-auto me-auto ">
                <Form.Label>User Name:</Form.Label>
                <Form.Control id="txtName" onChange={(e) => { setUserRecords({ ...userRecords, username: e.target.value }) }} type="text" placeholder="Enter Your Name"
                    onChange={(e) => { setUserRecords({ ...userRecords, username: e.target.value }) }} />
            </Form.Group>

            <Form.Group className="mb-3 col-sm-6 ms-auto me-auto ">
                <Form.Label>Birth Date:</Form.Label>
                <Form.Control id="txtDob" value={userRecords.birthdate} type="date"
                    onChange={(e) => { setUserRecords({ ...userRecords, birthdate: e.target.value }) }} />
            </Form.Group>

            <Form.Group className="mb-3 col-sm-6 ms-auto me-auto ">
                <Form.Label>Address:</Form.Label>
                <Form.Control id="txtAddress" value={userRecords.address} as="textarea" rows="2" placeholder="Enter Your Address"
                    onChange={(e) => { setUserRecords({ ...userRecords, address: e.target.value }) }} />
            </Form.Group>


            <Form.Group className="mb-3 d-flex col-sm-6 ms-auto me-auto" >
                <Form.Label >Gender:</Form.Label>
                <Form.Label className="mx-2">Male:</Form.Label>
                <Form.Check checked={userRecords.gender === "Male"} onChange={(e) => { setUserRecords({ ...userRecords, gender: e.target.value }) }} type="radio" name="Gender" value="Male" />
                <Form.Label className="mx-2">Female:</Form.Label>
                <Form.Check checked={userRecords.gender === "Female"} onChange={(e) => { setUserRecords({ ...userRecords, gender: e.target.value }) }} type="radio" name="Gender" value="Female" />
                <Form.Label className="mx-2">Other:</Form.Label>
                <Form.Check checked={userRecords.gender === "Other"} onChange={(e) => { setUserRecords({ ...userRecords, gender: e.target.value }) }} type="radio" name="Gender" value="Other" />
            </Form.Group>



            <Form.Group className="mb-3 col-sm-6 ms-auto me-auto ">
                <Form.Label>College:</Form.Label>
                <Form.Control as="select" type="text"
                    onChange={(e) => { setUserRecords({ ...userRecords, college: e.target.value }) }} >
                    <option value="">{"Choose Your College Name"}</option>
                    {apiRecords.map(x => {
                        return (

                            <option title={x.alpha_two_code, x.name}>{x.name}</option>
                        )
                    })}
                </Form.Control>
            </Form.Group>

            <Form.Group className="d-flex mb-3 col-sm-6 ms-auto me-auto textfont" >
                <Form.Label>Hobbies:</Form.Label>
                <Form.Label className="mx-2">Reading:</Form.Label>
                <Form.Check onChange={(e) => { setUserRecords({ ...userRecords, username: e.target.value }) }} type="checkbox" name="Reading" value="Reading" />
                <Form.Label className="mx-2">Gaming:</Form.Label>
                <Form.Check onChange={(e) => { setUserRecords({ ...userRecords, username: e.target.value }) }} type="checkbox" name="Gaming" value="Gaming" />
                <Form.Label className="mx-2">Traveling:</Form.Label>
                <Form.Check onChange={(e) => { setUserRecords({ ...userRecords, username: e.target.value }) }} type="checkbox" name="Traveling" value="Traveling" />
                <Form.Label className="mx-2">Drawing:</Form.Label>
                <Form.Check onChange={(e) => { setUserRecords({ ...userRecords, username: e.target.value }) }} type="checkbox" name="Drawing" value="Drawingr" />
                <Form.Label className="mx-2">Other:</Form.Label>
                <Form.Check onChange={(e) => { setUserRecords({ ...userRecords, username: e.target.value }) }} type="checkbox" name="Drawing" value="Drawingr" />
            </Form.Group>


            <div className="text-center">

                <Button type="submit" onClick={onRegistration} className="col-lg-4 col-md-4 col-sm-4 btn ms-auto me-auto btn-primary">
                    Register</Button>
            </div>

        </Container>
    )
}

export default Register;