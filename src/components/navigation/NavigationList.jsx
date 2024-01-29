import s from './NavigationList.module.scss';
import { useState } from 'react';
import { DndContext, closestCenter} from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableItem from 'components/sortableItem/SortableItem';
// arrayMove,
const menuList = [
    { title: 'Новини номер 1', arrayNestedList: [] },
    { title: 'Конференц-зал', arrayNestedList: [] },
    { title: 'тест1', arrayNestedList: [] },
    { title: 'тест2', arrayNestedList: [] },
    { title: 'тест3', arrayNestedList: [] },
    { title: 'Новини', arrayNestedList: [] },
    { title: 'Конференц-зал', arrayNestedList: [] },
    { title: 'тест133', arrayNestedList: [] },
    { title: 'тест2', arrayNestedList: []},
    { title: 'тест3', arrayNestedList: []},
    { title: 'Новини', arrayNestedList: []},
    { title: 'Конференц-зал', arrayNestedList: []},
    { title: 'Новини', arrayNestedList: []},
    { title: 'Конференц-зал', arrayNestedList: []},
    { title: 'тест1', arrayNestedList: []},
    { title: 'тест2', arrayNestedList: []},
    { title: 'тест3', arrayNestedList: []},
    { title: 'Новини', arrayNestedList: []},
    { title: 'Конференц-зал', arrayNestedList: []},
    { title: 'тест1', arrayNestedList: []},
    { title: 'тест2', arrayNestedList: []},
    { title: 'тест3', arrayNestedList: []},
    { title: 'Новини', arrayNestedList: []},
    { title: 'Конференц-зал', arrayNestedList: [] },
    { title: 'Конференц-зал', arrayNestedList: [] },
    { title: 'тест133', arrayNestedList: [] },
    { title: 'тест2', arrayNestedList: []},
    { title: 'тест3', arrayNestedList: []},
    { title: 'Новини', arrayNestedList: []},
    { title: 'Конференц-зал', arrayNestedList: []},
    { title: 'Новини', arrayNestedList: []},
    { title: 'Конференц-зал', arrayNestedList: []},
    { title: 'тест1', arrayNestedList: []},
    { title: 'тест2', arrayNestedList: []},
    { title: 'тест3', arrayNestedList: []},
    { title: 'Новини', arrayNestedList: []},
    { title: 'Конференц-зал', arrayNestedList: []},
    { title: 'тест1', arrayNestedList: []},
    { title: 'тест2', arrayNestedList: []},
    { title: 'тест3', arrayNestedList: []},
    { title: 'Новини', arrayNestedList: []},
    { title: 'Конференц-зал', arrayNestedList: []},
]

const NavigationList = ({ isOpen }) => {
    const [visibleItem, setVisibleItem] = useState(10);
    const [move, setMove] = useState(false);
    const [menu] = useState(menuList);

    const overflow = move ? { overflowY: "visible", overflowX: "visible" } : { overflowY: "auto", overflowX: "hidden" };
    // const height = visibleItem >= menuList.length ? "100%" : "96.2%";

    const style = isOpen ? { left: '0px', ...overflow,} : { position: 'fixed', left: '-300px', ...overflow }

    const handleDragMove = (e) => {
        setMove(true);
    }

    const handleDragEnd = (e) => {
        console.log('end');
        setMove(false)
    }

    return (
        <>
            <div className={s.navigation_container} style={style}>
                <DndContext
                    collisionDetection={closestCenter}
                    onDragMove={handleDragMove}
                    onDragEnd={handleDragEnd}
                >
                    <ul className={s.navigation_list}>
                        <SortableContext
                            items={menu}
                            strategy={verticalListSortingStrategy}
                        >
                            {menu.slice(0, visibleItem).map((element, index) => (
                                <SortableItem key={index} id={element} />
                            ))}
                        </SortableContext>
                    </ul>
                </DndContext>
                {visibleItem >= menuList.length ? null : <button className={s.btn_more} onClick={() => setVisibleItem(menuList.length)}>More</button> }
            </div>
        </>
    )
}

export default NavigationList;
