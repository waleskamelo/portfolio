import { useState } from "react";

const menuLi = [
    { href: '/frontend', label: 'Frontend' },
    { href: '/photography', label: 'Photography' },
    { href: '/makeup', label: 'Makeup' },
    { href: '/cooking', label: 'Cooking' },
]

const Header = () => {
    const [menuActive, setMenuActive] = useState<boolean>(false)
    const onClickMenu = () => {
        setMenuActive(menuActive ? false : true)
    }

    return (
            <header>
                <nav>
                    <a className='logo' href='/'>Waleska Melo</a>

                    <div className='mobile-menu' onClick={onClickMenu}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>

                    <ul className={`nav-list ${menuActive && 'active'}`}>
                        {menuLi.map((li) => (
                            <li><a href={li.href} onClick={onClickMenu}>{li.label}</a></li>
                        ))}
                    </ul>
                </nav>
                {/* <div className="img-menu"> */}
                {/* <img src={photo} alt="" /> */}
                {/* </div> */}
            </header>
    )
}
export default Header
