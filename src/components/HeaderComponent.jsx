import React,{useEffect,useState} from 'react';

const HeaderComponent = () => {
    return(
        <React.Fragment>
            <header >
                <nav className="navbar navbar-expand-md navbar-dark bg-primary" >
                {/* <nav > */}
                    <div><a href="http://localhost:3000/employees" className="navbar-brand">Employee Management App</a></div>
                </nav>
            </header>
        </React.Fragment>
    );
}
export default HeaderComponent;