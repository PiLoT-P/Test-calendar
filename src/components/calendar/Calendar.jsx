import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ukLocale from '@fullcalendar/core/locales/uk';
import s from './Calendar.module.scss';

const events = [
    { title: 'Meeting', start: new Date(), end: new Date(2024, 0, 25, 10, 0, 0 , 0) },
    { title: 'Meeting', start: new Date(2024, 0, 25, 16, 30, 0 , 0), end: new Date(2024, 0, 26, 16, 30, 0, 0) },
];

const Calendar = () => {
    return (
        <div className={s.container}>
            <h1>Demo Calendar</h1>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                weekends={false}
                selectable={true}
                events={events}
                locale={ukLocale}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                eventContent={renderEventContent}
                initialDate={ new Date()}
                select={handleDateClick}
                eventClick={handleDateClick}
            />
        </div>
    );
}

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <span>   </span>
            <i>{eventInfo.event.title}</i>
        </>
    );
}

const handleDateClick = (info) => {
    console.log('click', info);
};

export default Calendar;
