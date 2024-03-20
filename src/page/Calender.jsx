import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import styled from 'styled-components';

export default function Calendar() {
  const handleEventClick = (info) => {
    alert(`You selected the event: ${info.event.title}`);
  };

  const handleSelect = (info) => {
    alert(`Selected time slot: ${info.startStr} - ${info.endStr}`);
    // Implement further actions here, like creating a new event
  };

  const events = [
    {
      title: 'Event 1',
      start: '2024-03-19T06:00:00',
      end: '2024-03-19T08:00:00',
    },
    {
      title: 'Event 2',
      start: '2024-03-20T10:00:00',
      end: '2024-03-20T12:00:00',
    },
    {
      title: 'Event 3',
      start: '2024-03-21T10:00:00',
      end: '2024-03-21T14:00:00',
    },
    {
      title: 'Event 4',
      start: '2024-03-22T08:00:00',
      end: '2024-03-22T11:00:00',
    },
  ];

  return (
    <Wrapper>
      <FullCalendarWrapper>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={events}
          eventClick={handleEventClick} // Event handler for event click
          selectable={true} // Allow selecting time slots
          selectMirror={true} // Visualize the selection
          select={(info) => handleSelect(info)} // Handle selection
        />
      </FullCalendarWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FullCalendarWrapper = styled.div`
 max-width: 800px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff; /* Calendar background color */

  /* Event styles */
  .fc-event {
    background-color: #4CAF50; /* Event background color */
    color: #fff; /* Event text color */
    border: none; /* Remove event border */
    border-radius: 5px; /* Rounded corners for event */
  }

  /* Header styles */
  .fc-day-header {
    background-color: blue; /* Header background color */
    color: white; /* Header text color */
    font-weight: bold; /* Bold header text */
  }

  /* Toolbar title styles */
  .fc-toolbar-title {
    color: blue; /* Toolbar title color */
    background-color:white;
  }

  /* Button styles */
  .fc-button {
    background-color: blue; /* Button background color */
    color: #fff; /* Button text color */
    border: none; /* Remove button border */
    border-radius: 5px; /* Rounded corners for button */
    margin: 0 5px; /* Add some spacing between buttons */
  }

  .fc-button:hover {
    background-color: #45a049; /* Button background color on hover */
  }
  /* Change the color of date and time boxes */
  .fc-daygrid-day,
  .fc-timegrid-slots td {
    background-color: #008DDA; /* Change to your desired color */
    color: white;
  }

  /* Change the text color of date and time boxes */
  .fc-daygrid-day,
  .fc-timegrid-slots td {
    color: white; /* Change to your desired text color */
  }

  .fc-daygrid-days {
    border: 1px solid black; /* Add border around each day */
  }
  .fc-timegrid-slots {
    border-collapse: separate; /* Ensure borders are separate for each cell */
  }

  .fc-timegrid-slot {
    border: 1px solid #ddd; /* Add border around each time slot */
  }
  
  /* Button group styles */
  .fc-button-group {
    margin: 0; /* Reset margin */
  }

`;