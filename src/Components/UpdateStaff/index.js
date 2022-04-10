import React, { useEffect, useState } from 'react';
import API from '../../Services/API';
import { useParams } from 'react-router-dom';
import StaffContext from '../../Services/StaffContext';
import { useContext } from 'react';

const UpdateStaff = () => {

  const context = useContext(StaffContext);
  const [ staff, setStaff ] = useState({});

  // getting id params using use params
  const { id } = useParams();

  return (
    <div>
      <form>
        <h3>Update Staff</h3>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input onChange={context.handleFirstNameChange}></input>
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input  name="lastName" onChange={context.handleLastNameChange}></input>
        <br />
        <label htmlFor="assignment">Assignment</label>
        <br />
        <input  name="assignment" onChange={context.handleAssignmentChange}></input>
        <br />
        <label htmlFor="duties">Duties</label>
        <br />
        <input  name="duties" onChange={context.handleDutiesChange}></input>
        <br />
        <label htmlFor="shiftStart">Shift Begins</label>
        <br />
        <input  placeholder='09:00' name="shiftStart" onChange={context.handleShiftStartChange}></input>
        <br />
        <label htmlFor="shiftEnd">Shift Ends</label>
        <br />
        <input placeholder='17:00' name="shiftEnd" onChange={context.handleSeniorityDateChange}></input>
        <br />
        <label htmlFor="seniorityDate">Seniority Date</label>
        <br />
        <input name="seniorityDate" placeholder='YYYY-MM-DD' onChange={context.handleSeniorityDateChange}></input>
        <br />
        <button 
        className="btn" 
        type="button" 
        value="Submit" 
        onClick={() => context.updateStaff(id)}
        >
          Update Staff
        </button>
      </form>
    </div>
  );
};

export default UpdateStaff;