import ModalCreateMeeting from "./modalCreateMeeting/ModalCreateMeeting";
import ModalBox from "./modalBox/ModalBox";
import Calendar from "./calendar/Calendar";
import { useState } from "react";
import { Button } from "@mui/joy";
import EventInformation from "./informationAboutEvent/EventInformation";
import ReviewEvent from "./reviewEvent/ReviewEvent";

export const App = () => {
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
};
