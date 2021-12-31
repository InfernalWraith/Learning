import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Str33m</Link>
            <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
                <GoogleAuth />
                <Link to=""></Link>
                <Link to=""></Link>
                <Link to=""></Link>
            </div>
        </div>
    );
}

export default Header;
