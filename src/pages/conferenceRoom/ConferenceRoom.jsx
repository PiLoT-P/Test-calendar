import Calendar from "components/calendar/Calendar";
import EventInformation from "components/informationAboutEvent/EventInformation";
import ModalBox from "components/modalBox/ModalBox";
import ModalCreateMeeting from "components/modalCreateMeeting/ModalCreateMeeting";
import ReviewEvent from "components/reviewEvent/ReviewEvent";
import { Button } from "@mui/joy";
import { useState } from "react";

const ConferenceRoom = ( ) => {
    const [open, setOpen] = useState(false);
    const [openEventInformation, setOpenEventInformation] = useState(false);
    const [openReview, setOpenReview] = useState(false);
    const [eventInformation, setEventInformation] = useState({});
    const [startMeeting, setStartMeeting] = useState(null);
    const [endMeeting, setEndMeeting] = useState(null);
    
    return (
        <>
            <Button onClick={() => setOpen(true)}>Створеня зустрічі</Button>
            <Calendar 
                setIsModalOpen={setOpen}
                onChangesStartMeeting={setStartMeeting}
                onChangesEndMeeting={setEndMeeting}
                onChangesIsOpenEventInformation={setOpenEventInformation}
                onChangesEventInformation={setEventInformation}
            />
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