import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import {IoSchoolSharp} from 'react-icons/io5';
import {FaSchool} from 'react-icons/fa';


export function Footer() {

  return (
    <footer>
      <Navbar expand="lg" bg="light">
        <Container>
          <Navbar.Brand>
              <span>
                <IoSchoolSharp/>
              </span>
            <span> Joe Ivans, Student, <a href="https://www.codefellows.org">Code Fellows</a> Seattle </span>
            <span>
                <FaSchool/>
              </span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
  );
}
