import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ukLocale from '@fullcalendar/core/locales/uk';
import s from './Calendar.module.scss';

const events = [
    { title: 'Meeting1', start: new Date(2024, 0, 25, 8, 30, 0 , 0), end: new Date(2024, 0, 25, 14, 0, 0 , 0), color: 'red' },
    { title: 'Meeting2', start: new Date(2024, 0, 25, 10, 30, 0 , 0), end: new Date(2024, 0, 25, 17, 0, 0 , 0), color: '#007bff'},
    { title: 'Meeting3', start: new Date(2024, 0, 25, 13, 30, 0 , 0), end: new Date(2024, 0, 25, 16, 30, 0, 0), color: '#28a745'},
    { title: 'Meeting4', start: new Date(2024, 1, 22, 1, 30, 0 , 0), end: new Date(2024, 1, 23, 13, 30, 0, 0), color: '#fd7e14'},
    { title: 'Meeting5', start: new Date(2024, 1, 22, 16, 30, 0 , 0), end: new Date(2024, 1, 23, 16, 30, 0, 0), color: '#dc3545'},
];

const Calendar = ({setIsModalOpen, onChangesStartMeeting,  onChangesEndMeeting, onChangesIsOpenEventInformation, onChangesEventInformation}) => {

    const handleEventMount = (info) =>{
        const eventElement = info.el;
        eventElement.style.cursor = "pointer";
    }

    const handleSelectClick = (info) => {
        const endDate = info.end;
        endDate.setMinutes(endDate.getMinutes() - 30)

        setIsModalOpen(true);
        onChangesStartMeeting(info.start)
        onChangesEndMeeting(endDate)
    };

    const handleEventClick = (info) => {
        const dataClick = info.event;
        const titleEvent = dataClick._def.title;
        const time = {start: dataClick._instance.range.start, end: dataClick._instance.range.end}
        onChangesEventInformation({title: titleEvent, time, color: `${dataClick._def.ui.backgroundColor}`})
        onChangesIsOpenEventInformation(true) 
    };
    


    return (
        <div className={s.container}>
            <h2>Календар</h2>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                editable={true}
                navLinks={true}
                selectable={true}
                events={events}
                locale={ukLocale}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialDate={ new Date()}
                select={handleSelectClick}
                eventClick={handleEventClick}
                eventDidMount={handleEventMount}
                // style={{zIndex: 1}}
            />
        </div>
    );
}

export default Calendar;