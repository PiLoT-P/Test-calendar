import s from './ModalCreateMeeting.module.scss';
import dayjs from 'dayjs';
import { Autocomplete, Button, Snackbar, Stack } from '@mui/joy';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

const participants = [
    { title: 'test1' },
    { title: 'test2' },
    { title: 'test3' },
    { title: 'test4' }
]

const objM = {
    dateStart:  null,
    dateEnd: null,
    timeStart: null,
    timeEnd: null,
    participants: [],
}

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



const ModalCreateMeeting = ({dateTimeStart, dateTimeEnd}) => {
    const [objMeeting, setObjMeeting] = useState(objM);
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault(); 

        for ( let key in objMeeting ) {
            if (objMeeting[key] === null || objMeeting[key].length === 0) {
                setErrorMessage( 'Заповніть всі поля' );
                setOpen( true );
                return ;
            }
        }

        const { dateStart, dateEnd, timeStart, timeEnd} = objMeeting;

        const corectDateTimeStart = createNormalDateTimeFormat(dateStart, timeStart);
        const corectDateTimeEnd = createNormalDateTimeFormat(dateEnd, timeEnd);

        if(corectDateTimeStart < new Date()){
            setErrorMessage( 'Виберіть дату і час початку зусрічі, не раніше, ніж зараз' );
            setOpen( true );
            return
        }else if(corectDateTimeEnd < corectDateTimeStart){
            setErrorMessage( 'Виберіть дату і час кінця зустрічі, не раніше, ніж початок зустрічі' );
            setOpen( true );
            return
        }

        console.log(objMeeting);
        setObjMeeting(objM);
    }

    return (
        <>
            {/* <section className={s.main_container}> */}
                <form
                    className={s.containerForm}
                    onSubmit={handleSubmit}
                >
                    <Stack>
                        <div className={s.date_сonatiner}>
                            <h3>Дата</h3>
                            <div className={s.main_date_block}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <div className={s.under_date_block}>
                                        <label className={s.label_date}>Дата та час початку</label>
                                        <div className={s.dateBlock}>
                                            <DateTimePicker
                                                value={objMeeting.dateStart}
                                                views={['year', 'month', 'day']}
                                                defaultValue={dayjs()}
                                                minDate={dayjs()}
                                                onChange={(e) => setObjMeeting({ ...objMeeting, dateStart: e.$d })}
                                                className={s.date_picker}
                                            />
                                            <Autocomplete
                                                placeholder="Виберіть час початку"
                                                options={arrayHour}
                                                value={objMeeting.timeStart}
                                                onChange={(e, v) => {
                                                    const newValue = v ? e.target.textContent : null
                                                    setObjMeeting({ ...objMeeting, timeStart: newValue})
                                                } }
                                                className={s.select_time}
                                            />
                                        </div>
                                    </div>
                                    <div className={s.under_date_block}>
                                        <label className={s.label_date}>Дата та час завершення</label>
                                        <div className={s.dateBlock}>
                                            <DateTimePicker
                                                value={objMeeting.dateEnd}
                                                onChange={(e) => setObjMeeting({ ...objMeeting, dateEnd: e.$d })}
                                                views={['year', 'month', 'day']}
                                                defaultValue={dayjs()}
                                                minDate={dayjs()}
                                                className={s.date_picker}
                                            />
                                            <Autocomplete
                                                value={objMeeting.timeEnd}
                                                placeholder="Виберіть час закінчення"
                                                options={arrayHour}
                                                onChange={(e, v) => {
                                                    const newValue = v ? e.target.textContent : null
                                                    setObjMeeting({ ...objMeeting, timeEnd: newValue})
                                                } }
                                                className={s.select_time}
                                            />
                                        </div>
                                    </div>
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className={s.members_container}>
                            <h3 className={s.title}>Учасники</h3>
                            <Autocomplete
                                value={objMeeting.participants}
                                multiple
                                placeholder="Учасники"
                                options={participants}
                                getOptionLabel={(option) => option.title}
                                onChange={(e, v) => {setObjMeeting({...objMeeting, participants: v})}}
                                className={s.select_members}

                            />
                        </div>
                        <div className={s.member_calendar_container}>
                            Календар календар
                        </div>
                        <div className={s.btn_submit_container}>
                            <Button type="submit" className={s.btn_submit}>Зберегти</Button>
                            <Button onClick={() => console.log('exit')} className={s.btn_submit}>Скасувати</Button>
                        </div>
                        <Snackbar
                            variant="solid"
                            color="danger"
                            autoHideDuration={3000}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={open}
                            onClose={(event, reason) => {
                            if (reason === 'clickaway') {
                                return;
                            }
                            setOpen(false);
                            }}
                        >
                            {errorMessage  }
                        </Snackbar>
                    </Stack>
                </form>
            {/* </section> */}
        </>
    )
}

export default ModalCreateMeeting;