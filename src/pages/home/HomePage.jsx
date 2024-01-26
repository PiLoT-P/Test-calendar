import NavigationList from "components/navigation/NavigationList";
import MenuIcon from '@mui/icons-material/Menu';
import s from './HomePage.module.scss'
import { useState } from "react";

const HomePage = () => {
    const [openMenu, setOpenMenu] = useState(true)
    return (
        <>
            <header>
                <div>hellow</div>
                <div onClick={() => setOpenMenu(!openMenu)}>
                    <MenuIcon fontSize="large" className={s.burger_btn}/>
                </div>
            </header>
            <section className={s.main_section}>
                <NavigationList
                    isOpen={openMenu}
                />
                <div>
                    main text 
                </div>
            </section>
        </>
    );
}

export default HomePage;