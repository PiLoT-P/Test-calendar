import Calendar from "components/calendar/Calendar";
import MenuIcon from '@mui/icons-material/Menu';
import EventInformation from "components/informationAboutEvent/EventInformation";
import ModalBox from "components/modalBox/ModalBox";
import ModalCreateMeeting from "components/modalCreateMeeting/ModalCreateMeeting";
import ReviewEvent from "components/reviewEvent/ReviewEvent";
import { Button } from "@mui/joy";
import { useState } from "react";
import NavigationList from "components/navigation/NavigationList";
import s from "./ConferenceRoom.module.scss";

const ConferenceRoom = ( ) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [open, setOpen] = useState(false);
    const [openEventInformation, setOpenEventInformation] = useState(false);
    const [openReview, setOpenReview] = useState(false);
    const [eventInformation, setEventInformation] = useState({});
    const [startMeeting, setStartMeeting] = useState(null);
    const [endMeeting, setEndMeeting] = useState(null);
    
    return (
        <>
            <header>
                <div>header</div>
                <div onClick={() => setOpenMenu(!openMenu)}>
                    <MenuIcon fontSize="large" style={{cursor: 'pointer'}}/>
                </div>
            </header>
            <main style={{ height: "92.3vh", display: "flex", gap: "10px"}}>
                <NavigationList
                    isOpen={openMenu}
                />
                <section style={{width: "100%", padding: "25px", overflow: "auto"}}>
                    <div className={s.calendar_container}>
                        <Button onClick={() => setOpen(true)} className={s.btn_create_meeting}>Створеня зустрічі</Button>
                        <Calendar 
                            setIsModalOpen={setOpen}
                            onChangesStartMeeting={setStartMeeting}
                            onChangesEndMeeting={setEndMeeting}
                            onChangesIsOpenEventInformation={setOpenEventInformation}
                            onChangesEventInformation={setEventInformation}
                        /> 
                    </div>
                </section>
            </main>
            {/* <footer>
                <p>footer</p>
            </footer> */}


            <ModalBox
                isModalOpen={open}
                setIsModalOpen={setOpen}
                title="Створення зустрічі"
            >
                <ModalCreateMeeting
                dateTimeStart={startMeeting}
                dateTimeEnd={endMeeting}
                />
            </ModalBox>
            <ModalBox
                isModalOpen={openEventInformation}
                setIsModalOpen={setOpenEventInformation}
            >
                <EventInformation 
                eventData={eventInformation} 
                setIsReviewOpen={setOpenReview}
                setIsEventOpen={setOpenEventInformation}
                />
            </ModalBox>

            <ModalBox
                isModalOpen={openReview}
                setIsModalOpen={setOpenReview}
                title={"Назва зустрічі"}
            >
                <ReviewEvent
                    eventData={eventInformation}
                />
            </ModalBox>
        </>
    );
}

export default ConferenceRoom;