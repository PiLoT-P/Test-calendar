import s from './EventInformation.module.scss'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import FaceIcon from '@mui/icons-material/Face';
import { Button } from "@mui/joy";

const createStringFormatDate = (data) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const startDateString = data.start.toLocaleDateString('uk-UA', options);
    const endDateString = data.end.toLocaleDateString('uk-UA', options);
    
    const timeOptions = { hour: 'numeric', minute: 'numeric' };
    const startTimeString = data.start.toLocaleTimeString('uk-UA', timeOptions);
    const endTimeString = data.end.toLocaleTimeString('uk-UA', timeOptions);
    
    return {startDateString, endDateString, startTimeString, endTimeString};
}


const EventInformation = ({eventData}) => {
    const {title, time, color} = eventData;
    const {startDateString, endDateString, startTimeString, endTimeString} = createStringFormatDate(time);
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
                <Button className={s.informatin_btn}>Переглянути подію</Button>
            </section>
        </>
    );
}

export default EventInformation;