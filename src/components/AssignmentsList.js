import React from 'react';
import _ from 'lodash';
import Assignment from './Assignment';

const AssignmentsList = ({ assignments, setAssignments }) => {

  const handleRemoveAssignment = (id) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  return (
    <React.Fragment>
      <div>
        {!_.isEmpty(assignments) ? (
          assignments.map((assignment) => (
            <Assignment key={assignment.id} {...assignment} handleRemoveAssignment={handleRemoveAssignment} />
          ))
        ) : (
          <h2 className="message content-section col-md-8">No assignments available. Please add some assignments.</h2>
        )}
      </div>
    </React.Fragment>
  );
};

export default AssignmentsList;
