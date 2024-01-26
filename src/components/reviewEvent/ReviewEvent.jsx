import s from './ReviewEvent.module.scss';
import FaceIcon from '@mui/icons-material/Face';
import { Button, Input } from '@mui/joy';
import { createStringFormatDate } from 'functionJs/function';


const ReviewEvent = ({eventData}) => {
    const {title, time} = eventData;
    const {startDateString, endDateString, startTimeString, endTimeString} = createStringFormatDate(time);

    return (
        <>
            <section className={s.review_container}>
                <div className={s.review_block}>
                    <div className={s.main_block}>
                        <div className={s.text_block}>
                            <div className={s.calendar_block}>блок календар з учасниками</div>
                            <div className={s.occupied_block}>
                                <p>Доступність на час події: Зайнятий</p>
                            </div>
                            <div className={s.place_block}>
                                <h4 className={s.title}>Місцезнаходження</h4>
                                <p className={s.text}>{`${title}`}</p>
                            </div>
                        </div>
                        <div className={s.button_block}>
                            <Button>Редагувати</Button>
                            <Button>Видалити</Button>
                        </div>
                    </div>
                    <div className={s.comments_block}>
                        <h4>Коментарі</h4>
                        <div style={{display:'flex', justifyContent: 'start', alignItems: 'center', gap: 15, paddingTop: 10, paddingLeft: 10}}>
                            <FaceIcon fontSize='large'/>
                            <Input 
                                style={{width: '75%'}}
                            />
                        </div>
                    </div>
                </div>
                <div className={s.time_block}>
                    <div className={s.date}> 
                        <p>Початок: {`${startDateString} ${startTimeString}`} </p>
                        <p>Кінець: {`${endDateString} ${endTimeString}`}</p>
                    </div>
                    <div className={s.information_block}>
                        <h4 className={s.title}>Учасники</h4>
                        <ul className={s.members_list}>
                            <li><FaceIcon fontSize='large'/></li>
                            <li><FaceIcon fontSize='large'/></li>
                            <li><FaceIcon fontSize='large'/></li>
                        </ul>
                        <p className={s.author}>Автор: {`Андрій`}</p>
                        <ul className={s.information_list}>
                            <li>Беруть участь: 4</li>
                            <li>Запрошені: 0</li>
                            <li>Відмовились: 2</li>
                        </ul>
                        <div>
                            Нягадування
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReviewEvent;