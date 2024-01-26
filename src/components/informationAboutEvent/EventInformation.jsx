import s from './EventInformation.module.scss'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import FaceIcon from '@mui/icons-material/Face';
import { Button } from "@mui/joy";
// import { useState } from 'react';
import { createStringFormatDate } from 'functionJs/function';

const EventInformation = ({eventData, setIsReviewOpen, setIsEventOpen}) => {
    const {title, time, color} = eventData;
    const {startDateString, endDateString, startTimeString, endTimeString} = createStringFormatDate(time);

    const handleClickReview = (e) =>{
        setIsEventOpen(false);
        setIsReviewOpen(true);
    }

    return (
        <>
            <section className={s.information_main_container}>
                <div className={s.information_headers_container}>
                    <h2 className={s.title}>{`${title} "Організатор"`}</h2>
                    <div className={s.color_block}><div className={s.color} style={{backgroundColor: color}}></div></div>
                </div>
                <ul className={s.information_list}>
                    <li className={s.item}>
                        <MeetingRoomIcon />
                        <p className={s.title}>
                            Переговорна: <span className={s.text_place}>{`${title}`}</span>
                        </p>
                    </li>
                    <li className={s.item}>
                        <p className={s.time}>
                            {`Початок ${startDateString} ${startTimeString} - Кінець ${endDateString} ${endTimeString}`}
                        </p>
                    </li>
                    <li className={s.item}>
                        <p className={s.organizer_block}>
                            Організатор:
                            <span className={s.organizer}>
                                <FaceIcon/>
                                {`"Організатор"`}
                            </span>
                        </p>
                    </li>
                </ul>
                <Button className={s.informatin_btn} onClick={handleClickReview}>Переглянути подію</Button>
            </section>
        </>
    );
}

export default EventInformation;