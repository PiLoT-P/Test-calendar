import { Button } from "@mui/material";

const ReviewEvent = () => {
    return (
        <>
            <section>
                <div>
                    <div>
                        <h2></h2>
                        <div></div>
                        <div>
                            <p>Доступність на час події: Зайнятий</p>
                        </div>
                        <div>
                            <h3>Місцезнаходження</h3>
                            <p>{`Конференц-зал`}</p>
                        </div>
                        <div>
                            <Button>Редагувати</Button>
                            <Button>Видалити</Button>
                        </div>
                    </div>
                    <div>
                        <h3>Коментарі</h3>
                    </div>
                </div>
                <div>
                    <p>дата</p>
                    <h4>Учасники</h4>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ReviewEvent;