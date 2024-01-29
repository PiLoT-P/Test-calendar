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
            <main style={{ height: "92vh", display: "flex" }}>
                <NavigationList
                    isOpen={openMenu}
                />
                <section className={s.main_section}>
                    <div >
                        <h1>Main ====</h1> 
                    </div>
                </section>
            </main>
            <footer>
                <p>footer</p>
            </footer>
        </>
    );
}

export default HomePage;