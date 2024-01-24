import s from './ModalCreateMeeting.module.scss';
import { Autocomplete, Button, Stack } from '@mui/joy';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
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

const createNormalDateTimeFormat = (date, time ) => {
    const [hour, minute] = time.split(':');
    date.setHours(hour, minute);
    return date;
}



const ModalCreateMeeting = () => {
    const [objMeeting, setObjMeeting] = useState(objM)

    const handleSubmit = (e) => {
        e.preventDefault();

        for ( let key in objMeeting ) {
            if (objMeeting[key] === null || objMeeting[key].length === 0) {
                console.log('error, заповніть всі поля');
                return ;
            }
        }

        const { dateStart, dateEnd, timeStart, timeEnd} = objMeeting;

        const corectDateTimeStart = createNormalDateTimeFormat(dateStart, timeStart);
        const corectDateTimeEnd = createNormalDateTimeFormat(dateEnd, timeEnd);

        if(corectDateTimeStart < new Date()){
            console.log('error date');
            return
        }else if(corectDateTimeEnd < corectDateTimeStart){
            console.log('error date to');
            return
        }

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
                                views={['year', 'month', 'day']}
                                defaultValue={dayjs()}
                                minDate={dayjs()}
                                onChange={(e) => setObjMeeting({ ...objMeeting, dateStart: e.$d })}
                                sx={{ width: 300 }}
                            />
                            <Autocomplete
                                placeholder="Виберіть час початку"
                                options={arrayHour}
                                value={objMeeting.timeStart}
                                onChange={(e, v) => {
                                    const newValue = v ? e.target.textContent : null
                                    setObjMeeting({ ...objMeeting, timeStart: newValue})
                                } }
                                sx={{ width: 300 }}
                            />
                        </div>
                        <div>
                            <DateTimePicker
                                value={objMeeting.dateEnd}
                                onChange={(e) => setObjMeeting({ ...objMeeting, dateEnd: e.$d })}
                                views={['year', 'month', 'day']}
                                defaultValue={dayjs()}
                                minDate={dayjs()}
                                sx={{ width: 300 }}
                            />
                            <Autocomplete
                                value={objMeeting.timeEnd}
                                placeholder="Виберіть час закінчення"
                                options={arrayHour}
                                onChange={(e, v) => {
                                    const newValue = v ? e.target.textContent : null
                                    setObjMeeting({ ...objMeeting, timeEnd: newValue})
                                } }
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
                        sx={{ width: 300 }}
                    />
                    <Button type="submit">Submit</Button>
                </Stack>
            </form>
        </>
    )
}

export default ModalCreateMeeting;