import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const AssignmentForm = (props) => {
  const [assignment, setAssignment] = useState({
    subject: props.assignment ? props.assignment.subject : '',
    staff: props.assignment ? props.assignment.staff : '',
    title: props.assignment ? props.assignment.title : '',
    content: props.assignment ? props.assignment.content : '',
    dueDate: props.assignment ? props.assignment.dueDate : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { subject, staff, title, content, dueDate } = assignment;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [subject, staff, title, content, dueDate];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const assignment = {
        id: uuidv4(),
        subject,
        staff,
        title,
        content,
        dueDate
      };
      props.handleOnSubmit(assignment);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssignment((prevState) => ({
          ...prevState,
          [name]: value
        }));
  };

  return (
    <div className="row">
    <div className="col-md-8 m-5">
    <article className="content-section">
      {errorMsg && <p className="article-metadata error">{errorMsg}</p>}
      <div className="article-metadata">
        <h2>
          Assignment Details
        </h2>
      </div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <select
            className="ml-3"
            name="subject"
            value={subject}
            onChange={handleInputChange}
          >
            <option value="">Subject</option>
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
            <option selected value="Maths">Maths</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
          </select>
        </Form.Group>
        <Form.Group controlId="staff">
          <Form.Label>Staff</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="staff"
            value={staff}
            placeholder="Enter name of staff"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="title"
            value={title}
            placeholder="Enter title of assignment"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Content  </Form.Label>
          <textarea
            className="input-control"
            type="textarea"
            name="content"
            value={content}
            placeholder="Enter work to be done"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="duedate">
          <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              name="dueDate"
              placeholder="Due date"
              value={dueDate}
              onChange={handleInputChange}
            />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </article>
    </div>
    </div>
  );
};

export default AssignmentForm;