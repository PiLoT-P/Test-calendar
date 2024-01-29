import s from './SortableItem.module.scss';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';


const SortableItem = (props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id,});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };



    return (
        <>
            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <div className={s.navigation_btn}>
                    {props.id.title}
                </div>
            </div>
        </>
    );
}

export default SortableItem;