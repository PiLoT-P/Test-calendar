import { useRef } from 'react';
import s from './DraggableItem.module.scss';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ id, index, title }) => {
    const [, drag] = useDrag({
        type: 'DRAGGABLE_ITEM',
        item: { id, index },
    });

    const ref = useRef(null);
    drag(ref);

    return (
        <div className={s.navigation_btn} ref={ref}>
            {title}
        </div>
    );
}

DraggableItem.prototype.canDrag = (monitor) => {
    return true;
    };

export default DraggableItem;


