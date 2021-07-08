import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="header__nav">
                <h3 className="header__brand" title="The best online pizza shop.">yoshi's Pizza
                </h3>
                <div className="header__toggle-btn">
                    <span className="header__toggle-btn__bars"></span>
                    <span className="header__toggle-btn__bars"></span>
                    <span className="header__toggle-btn__bars"></span>                
                </div>
                <ul className="header__list">
                    <li className="header__list-item">
                        <a href="">log in</a>
                    </li>
                    <li className="header__list-item">
                        <a href="">sign up</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
