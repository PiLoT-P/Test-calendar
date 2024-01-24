import s from './ModalCreateMeeting.module.scss';
import { Autocomplete, Button, Stack } from '@mui/joy';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

const objM = {
    dateStart: null,
    dateEnd: null,
    timeStart: null,
    timeEnd: null,
    participants: [],
}

const participants = [
    { title: 'test1' },
    { title: 'test2' },
    { title: 'test3' },
    { title: 'test4' }
]

const arrayHour = []

for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        const formattedTime = `${formattedHour}:${formattedMinute}`;

        arrayHour.push(formattedTime);
    }
}

const ModalCreateMeeting = () => {
    const [objMeeting, setObjMeeting] = useState(objM)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(objMeeting);
        setObjMeeting(objM);
    }

    return (
        <>
            <h2>Створення зустрічі</h2>
            <form
                className={s.containerForm}
                onSubmit={handleSubmit}
            >
                <Stack>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <div>
                            <DateTimePicker
                                value={objMeeting.dateStart}
                                onChange={(e) => setObjMeeting({ ...objMeeting, dateStart: e.$d })}
                                views={['year', 'month', 'day']}
                            />
                            <Autocomplete
                                value={objMeeting.timeStart}
                                onChange={(e) => setObjMeeting({ ...objMeeting, timeStart: e.target.textContent}) }
                                placeholder="Виберіть час початку"
                                options={arrayHour}
                                sx={{ width: 300 }}
                            />
                        </div>
                        <div>
                            <DateTimePicker
                                value={objMeeting.dateEnd}
                                onChange={(e) => setObjMeeting({ ...objMeeting, dateEnd: e.$d })}
                                views={['year', 'month', 'day']}
                            />
                            <Autocomplete
                                value={objMeeting.timeEnd}
                                onChange={(e) => setObjMeeting({ ...objMeeting, timeEnd: e.target.textContent}) }
                                placeholder="Виберіть час закінчення"
                                options={arrayHour}
                                sx={{ width: 300 }}
                            />
                        </div>
                    </LocalizationProvider>
                    <Autocomplete
                        value={objMeeting.participants}
                        multiple
                        id="tags-default"
                        placeholder="Учасники"
                        options={participants}
                        getOptionLabel={(option) => option.title}
                        onChange={(e, v) => {setObjMeeting({...objMeeting, participants: v})}}
                    />
                    <Button type="submit">Submit</Button>
                </Stack>
            </form>
        </>
    )
}

export default ModalCreateMeeting;