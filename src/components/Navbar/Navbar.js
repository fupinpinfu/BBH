import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../../css/Navbar.css'
import { Redirect } from 'react-router-dom';

class NavbarMain extends Component {
  render() {
    // let LoginName = localStorage.getItem('LoginName');
    // if(!LoginName)
    //   window.location.href = '/login';
    const logout = async () => {
      // localStorage.clear();
      // //history.replace('/Production');
      // //this.props.history.replace('/login');
      // const r = window.confirm("Do you want to Sign Out?");
      // if(r == true){
      //   window.location.href = '/login';
      // }

      // //this.props.history.replaceState('/login')
    }

    return (
      <Navbar className='container-fluid navbar navbar-expand-lg navbar-dark bg-dark' variant="dark" expand="lg">
        <Navbar.Brand className="banner" href="#home">Attendance</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={window.location.pathname} className="mr-auto basic-navbar-nav">
            {
              MenuItems.map((item, index) => {
                return (
                  <li key={index} >
                    {/* <Link className={item.cName} to={item.url}>{item.title}</Link> */}
                    <Nav.Link href={item.url} hidden={item.hidden} >{item.title}</Nav.Link>
                    {/* <a className={item.cName} href={item.url} > {item.title} </a> */}
                  </li >
                )
              })
            }
  
          </Nav>
         
          <NavDropdown  title='Hi !!!' id="basic-nav-nav">
            <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
          </NavDropdown>
        
          <Form inline hidden>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarMain