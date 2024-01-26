import { useState } from 'react';
import s from './NavigationList.module.scss'
import DraggableItem from 'components/draggableItem/DraggableItem';
import { useDrop } from 'react-dnd';

const menuList = [
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

const NavigationList = ({isOpen}) => {
    const [visibleItem, setVisibleItem] = useState(10);

    const [, drop] = useDrop({
        accept: 'DRAGGABLE_ITEM',
    });

    drop.onDrop((item, monitor) => {
        const targetIndex = menuList.findIndex((element) => element.id === item.id);

        menuList.splice(targetIndex, 1);
        menuList.splice(monitor.destination.index, 0, item);
    });

    const position = isOpen ? 'relative' : 'fixed';
    const left = isOpen ? '0px' : '-230px';
    return (
        <>
            <div className={s.navigation_container} style={{position: position, left: left}} >
                <ul className={s.list}>
                    {menuList.slice(0, visibleItem).map((element, index) => (
                        <li key={index}> 
                            <DraggableItem id={element.title} index={index} title={element.title}/>
                        </li>
                    ))}
                </ul>
                <button onClick={() => setVisibleItem(menuList.length)}>More</button>
            </div>
        </>
    )
}

export default NavigationList; 