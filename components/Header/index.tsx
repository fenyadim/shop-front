import React from "react";


const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#" className="nav-link">Косметика</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Хоз.товары</a>
                        </li>
                    </ul>
                </nav>
                <nav className="nav-categories">
                    <ul className="nav-categories__list">
                        <li className="nav-categories__item">
                            <a href="" className="nav-categories__link">Маски</a>
                        </li>
                        <li className="nav-categories__item">
                            <a href="" className="nav-categories__link">Патчи</a>
                        </li>
                        <li className="nav-categories__item">
                            <a href="" className="nav-categories__link">Пудра</a>
                        </li>
                        <li className="nav-categories__item">
                            <a href="" className="nav-categories__link">Помада</a>
                        </li>
                        <li className="nav-categories__item">
                            <a href="" className="nav-categories__link">Тушь</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header