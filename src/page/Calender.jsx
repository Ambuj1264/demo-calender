import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import styled from 'styled-components';

export default function Calendar() {
  const handleEventClick = (info) => {
    alert(`You selected on the event: ${info.event.title}`);
  };

  const events = [
    {
      title: 'Event 1',
      start: '2024-03-19T10:00:00',
      end: '2024-03-19T12:00:00',
    },
    {
      title: 'Event 2',
      start: '2024-03-20T14:00:00',
      end: '2024-03-20T16:00:00',
    },
    {
      title: 'Event 3',
      start: '2024-03-21T11:00:00',
      end: '2024-03-21T16:00:00',
    },
    {
      title: 'Event 4',
      start: '2024-03-22T02:00:00',
      end: '2024-03-22T05:00:00',
    },
  ];

  return (
    <Wrapper>
      <div className='calendar-div'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          events={events}
          eventClick={handleEventClick} // Event handler for event click
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .calendar-div {
    width: 80%;
    margin:auto;
  }
`;
