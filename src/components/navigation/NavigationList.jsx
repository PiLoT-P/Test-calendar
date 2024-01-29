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
    const [visibleItem] = useState(101);
    const [move, setMove] = useState(false);
    const [menu] = useState(menuList);

    const overflow = move ? { overflowY: "visible", overflowX: "visible" } : { overflowY: "auto", overflowX: "hidden"};

    const style = isOpen ? { left: '0px', ...overflow } : { position: 'fixed', left: '-300px', ...overflow }


    const handleDragMove = (e) => {
        setMove(true);
    }

    const handleDragEnd = (e) => {
        console.log('end');
        setMove(false)
    }

    return (
        <>
            <DndContext
                collisionDetection={closestCenter}
                onDragMove={handleDragMove}
                onDragEnd={handleDragEnd}
            >
                <div className={s.navigation_container} style={style} >
                    <SortableContext
                        items={menu}
                        strategy={verticalListSortingStrategy}
                    >
                        {menu.slice(0, visibleItem).map((element, index) => (
                            <SortableItem key={index} id={element} />
                        ))}
                    </SortableContext>
                </div>
            </DndContext>
        </>
    )
}

export default NavigationList;
