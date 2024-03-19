import React from 'react';
import { createMeeting } from "../services/api/user.api";

export const MeetingForm = () => {


  
  const saveInfo = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const type = event.target.type.value;
    const date = event.target.date.value;
    const comment = event.target.comment.value;

    console.log(name, phone, type, date, comment);

    // Call your createMeeting API function here
    createMeeting(name,phone, type, date);
    alert("הפגישה נקבעה בהצלחה");
  };

  return (<div>
      <form onSubmit={saveInfo}>
        <div>
          <label htmlFor="name">Enter your name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="phone">Enter your phone number</label>
          <input type="text" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="type">Enter a service type</label>
          <input type="text" id="type" name="type" />
        </div>
        <div>
          <label htmlFor="date">Enter a date for the meeting</label>
          <input type="date" id="date" name="date" />
        </div>
        <div>
          <label htmlFor="comment">Write a comment</label>
          <input type="text" id="comment" name="comment" />
        </div>
        <button type="submit">Schedule a meeting</button>

      </form>
      
    </div>
  );
};

export default MeetingForm;
