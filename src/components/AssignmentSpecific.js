import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const AssignmentSpecific = ({ history, assignments, setAssignments }) => {
  const { id } = useParams();
  const assign = assignments.find((assignment) => assignment.id === id);
  const handleRemoveAssignment = (id) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
    history.replace("/")
  };
  return (
    <React.Fragment>
      <div className="row">
          <div className="col-md-8">
            <article className="content-section">
            <div className="item article-metadata">
                <h3>{assign.subject}</h3>
                <div>
                  <Button variant="success" onClick={() => history.push(`/edit/${assign.id}`)}>Update</Button>{' '}
                  <Button variant="danger" onClick={() => handleRemoveAssignment(assign.id)}>Delete</Button>
                </div>
              </div>
              <div className="article-metadata">
                <h4 className="article-title">{ assign.title}</h4>
                <h6 className="article-content">{ assign.content }</h6>
              </div>
              <div className="item">
                <p>
                  <span className="span">Due Date: </span>{new Date(assign.dueDate).toDateString()}                                   </p>
                <p>
                  <span className="span" id="space">Assigned by:</span>{assign.staff}
                </p>
              </div>
         </article>
         </div>
    </div>
    </React.Fragment>
  );
};

export default AssignmentSpecific;