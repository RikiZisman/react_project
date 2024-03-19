import React, { useContext, useState } from "react";
import { ManagerContext } from '../context/managerContext';
import { deleteMeeting, getMeetings, sortByDate } from "./../componenta/services/api/i.js";
import { Services } from "../componenta/meeting/services";

import './admin.css'
export const Admin = () => {

    // const getUsers= async () => {
    //     const users = await getData();
    //     return users;
    // }

    const [meetings, setMeetings] = useState([]);
    const [showServices, setShowServices] = useState(false);
    const [showMeetings, setShowMeetings] = useState(true); // State variable to toggle meetings visibility

    const toggleServices = () => {
        setShowServices(!showServices);
    };

    const sortMeetingsByDate = () => {
        const sortedMeetings = [...meetings].sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
        setMeetings(sortedMeetings);
    };

    const allMeeting = async () => {
        console.log("I am here");
        const a = await getMeetings();
    
        const meetingListElement = document.getElementById("meetingList");
    
        if (showMeetings) {
            meetingListElement.innerHTML = "";
    
            // Iterate over the meetings in the order they appear in the JSON without sorting
            a.data.forEach(meeting => {
                const meetingItem = document.createElement("p");
                meetingItem.textContent = `Name: ${meeting.name}, Description of the request: ${meeting.startTime}`;
                meetingListElement.appendChild(meetingItem);
            });
        } else {
            meetingListElement.innerHTML = ""; // Clear meetings if showMeetings is false
        }
    };
    
    

    const manager = useContext(ManagerContext);

    const sortMeetingsByClientName = async () => {
        console.log("I am here");
        const meetingsResponse = await getMeetings();
        const meetingListElement = document.getElementById("meetingList");
    
        if (showMeetings) {
            meetingListElement.innerHTML = "";
    
            const sortedMeetings = meetingsResponse.data.sort((a, b) => a.name.localeCompare(b.name));
    
            sortedMeetings.forEach(meeting => {
                const meetingItem = document.createElement("p");
                meetingItem.textContent = `Name: ${meeting.name}, Description of the request: ${meeting.startTime}`;
                meetingListElement.appendChild(meetingItem);
            });
        } else {
            meetingListElement.innerHTML = ""; // Clear meetings if showMeetings is false
        }
    };

    const deletemeeting = async (event) => {
        event.preventDefault();
        console.log("Death to Cynavar");
        const id = document.getElementById('name').value;
        await deleteMeeting(id);
        allMeeting(); // Call allMeeting to update the meeting list after deletion
    };

    const toggleMeetings = () => {
        setShowMeetings(!showMeetings);
        allMeeting(); // Update the meetings when toggling visibility
    };

    return (
        <div >
            {manager[0] && <div>
                <h1>Hello Manager</h1>
                <h2>My Meetings</h2>
                {showServices && <Services />} {/* Show services when showServices is true */}
                <button onClick={toggleServices}>Show Services</button> {/* Button to toggle services visibility */}
                <div id="meetingList"></div>
                <br />
                <div>
                    <button onClick={sortMeetingsByDate}>sort by date</button>
                    <button onClick={sortMeetingsByClientName}>sort by client name</button>
                    {/* <button onClick={getUsers}>get</button> */}
                    <button onClick={toggleMeetings}>{showMeetings ? "Show Meetings" : "  hide Meetings"}</button> {/* Button to toggle meetings visibility */}
                </div>
                <div>
                    <form>
                        <div>
                            <label htmlFor="name">Enter a name for the delete meeting</label>
                            <input type="text" id="name" />
                        </div>
                        <button onClick={deletemeeting} type="submit">to delete a meeting</button>
                    </form>
                </div>
                <div class="profile-container">
  <span class="profile-text">TRL ARCHITECTURE</span>
</div>
            </div>}
            {!manager[0] && <div>You are not allowed to access this page!!!!!!!!!</div>}
        </div>
        
    );
    
};
