import React from 'react';

// import { Container } from './styles';

function Header({ title, children }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;