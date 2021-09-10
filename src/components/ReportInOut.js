
import React, { useState, useEffect } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, orderBy } from 'firebase/firestore/lite';
import { Row, FormControl, Form, Button, Col } from 'react-bootstrap';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import moment from 'moment'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export default function ReportInOut() {
  const firebaseConfig = {
    apiKey: "AIzaSyDOXFKM8FWObwsFbyqA6dqnQGTNfQDLGUo",
    authDomain: "bbhtime-fa236.firebaseapp.com",
    databaseURL: "https://bbhtime-fa236.firebaseio.com",
    projectId: "bbhtime-fa236",
    storageBucket: "bbhtime-fa236.appspot.com",
    messagingSenderId: "351132412421",
    appId: "1:351132412421:web:82938d9c881c1908e8ca6c"
  };

  //   const rowData = [
  //     {make: "Toyota", model: "Celica", price: 35000},
  //     {make: "Ford", model: "Mondeo", price: 32000},
  //     {make: "Porsche", model: "Boxter", price: 72000}
  // ];

  const [startDate, setStartDate] = useState(new Date());
  const [user, setUser] = useState([]);
  const [year, setYear] = useState([]);
  const [month, setMonth] = useState([]);

  const [datareport, setDatareport] = useState([]);

  const [selectYearFrom, SetselectYearFrom] = useState(0);
  const [selectMonthFrom, SetselectMonthFrom] = useState(0);

  const [selectYearTo, SetselectYearTo] = useState(0);
  const [selectMonthTo, SetselectMonthTo] = useState(0);

  const [selectUser, SetselectUser] = useState(0);
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(async () => {
    async function getUser() {
      const UserCol = collection(db, 'User');
      const UserSnapshot = await getDocs(UserCol);
      const UserList = [];
      UserSnapshot.docs.map(doc => {
        let my_object = {};
        my_object.id = doc.data().userid;
        my_object.value = doc.data().Name;
        UserList.push(my_object);
      });
      setUser(UserList);
    }

    async function getYear() {
      let arrYear = [];
      let nowYear = new Date().getFullYear();
      SetselectYearFrom(nowYear);
      SetselectYearTo(nowYear);
      arrYear.push(nowYear)
      arrYear.push(nowYear - 1)
      arrYear.push(nowYear - 2)
      setYear(arrYear)
    };

    async function getMonth() {
      let arrMonth = [];

      for (let i = 1; i < 13; i++) {
        arrMonth.push(i)
      }

      SetselectMonthFrom(new Date().getMonth() + 1);
      SetselectMonthTo(new Date().getMonth() + 1);

      setMonth(arrMonth)
    };

    getMonth();
    getYear();
    getUser();
  }, [])

  const handleSelectYearForm = (event) => {
    console.log(event.target.value);
    SetselectYearFrom(event.target.value);
  }

  const handleSelectYearTo = (event) => {
    console.log(event.target.value);
    SetselectYearTo(event.target.value);
  }

  const handleSelectMonthForm = (event) => {
    console.log(event.target.value);
    SetselectMonthFrom(event.target.value);
  }

  const handleSelectUser = (event) => {
    console.log(event.target.value);
    SetselectUser(event.target.value);
  }

  const handleSelectMonthTo = (event) => {
    console.log(event.target.value);
    SetselectMonthTo(event.target.value);
  }

  const search = async () => {
    // console.log('selectYearFrom',selectYearFrom);
    // console.log('selectMonthFrom',selectMonthFrom);
    const fromday = new Date(`${selectYearFrom}-${selectMonthFrom}-01`);
    const today = new Date(`${selectYearTo}-${selectMonthTo}-1`);

    var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    console.log('lastDayOfMonth', lastDayOfMonth);
    const q = query(collection(db, "stamp"), where("userid", "==", selectUser), where("stampin", ">=", fromday), where("stampin", "<=", lastDayOfMonth), orderBy("stampin"));

    const querySnapshot = await getDocs(q);
    const stamplist = [];

    querySnapshot.forEach((doc) => {
      //doc.data() is never undefined for query doc snapshots

      var my_object = { "date": moment(doc.data().stampin.toDate().toDateString()).format('DD-MM-YYYY'), "in": moment(doc.data().stampin.toDate()).format('HH:mm:ss'), "out": doc.data().stampout && moment(doc.data().stampout.toDate()).format('HH:mm:ss') };
      stamplist.push(my_object);
    });
    //console.log('selectMonthFrom', selectMonthFrom);
    // const UserCol = collection(db, 'stamp');
    // const UserSnapshot = await getDocs(UserCol);
    // const UserList = []; 
    // console.log('UserSnapshot', UserSnapshot);
    // UserSnapshot.docs.map(doc => {
    //     let my_object = {};
    //     my_object.id = doc.data().userid;
    //     my_object.value = doc.data().Name;
    //     UserList.push(my_object);
    //   });
    //   console.log(UserList);
    // setUser(UserList) ;
    console.log("stamplist", stamplist);
    setDatareport(stamplist);
  }

  const dynamicCellStyleIN = params => {
    if (params.value > '09:00:00') {
      //mark police cells as red
      return { color: 'red' };
    }
    return null;
  };

  const dynamicCellStyleOut = params => {
    if (params.value < '20:00:00') {
      //mark police cells as red
      return { color: 'red' };
    }
    return null;
  };

  const rowClassRules = {
    'bg-warning': "!data.out",
  };

  return (
    <header className="App-header p-3">
      <Row>
        <Col className='pe-0 w-25  align-items-center' md="auto">
          <select className="form-select" aria-label="Default select example" onChange={handleSelectUser.bind(this)}>
            {
              user.map(value => (
                <option value={value.id}>{value.value}</option>
              ))
            }
          </select>
        </Col>
        <Col className='d-flex align-items-center' md="2">
          FROM:
          <select className="form-select" aria-label="Default select example" onChange={handleSelectYearForm.bind(this)}>
            {
              year.map(value => (
                <option value={value}>{value}</option>
              ))
            }

          </select>
          <select className="form-select" aria-label="Default select example" onChange={handleSelectMonthForm.bind(this)}>
            {
              month.map(value => (
                <option selected={new Date().getMonth() + 1 === value} value={value}>{value}</option>
              ))
            }
          </select>
        </Col>
        <Col className='d-flex align-items-center' md="2">
          TO:
          <select className="form-select" aria-label="Default select example" onChange={handleSelectYearTo.bind(this)}>
            {
              year.map(value => (
                <option value={value}>{value}</option>
              ))
            }
          </select>
          <select className="form-select" aria-label="Default select example" onChange={handleSelectMonthTo.bind(this)}>
            {
              month.map(value => (
                <option selected={new Date().getMonth() + 1 === value} value={value}>{value}</option>
              ))
            }
          </select>
        </Col>
        <Col className='p-0' md="auto">
          <Button variant="outline-success" onClick={search}>Search</Button>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
              rowClassRules={rowClassRules}
              rowData={datareport}>
              <AgGridColumn field="date"></AgGridColumn>
              <AgGridColumn field="in" cellStyle={dynamicCellStyleIN}></AgGridColumn>
              <AgGridColumn field="out" cellStyle={dynamicCellStyleOut}></AgGridColumn>
            </AgGridReact>
          </div>
        </Col>
      </Row>
    </header>
  );
}

