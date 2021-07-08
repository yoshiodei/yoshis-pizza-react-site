import React, { Component } from 'react';
import Navbar from './Navbar';

class Header extends Component {
    render() {
        return (
            <>
                <section className="header">
                    <Navbar />
                </section>
            </>
        );
    }
}

export default Header;
