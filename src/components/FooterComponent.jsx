import React,{useEffect,useState} from 'react';

const FooterComponent = () => {
    return(
        <React.Fragment>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet"/>
            <footer className="footer">
                <span >All Rights Reserved 2021 @KaushikYelne</span>
                <a href="https://github.com/kaushikyelne" style={{marginLeft:"20px"}}><i class="fa fa-github fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/kaushik-yelne-4aa657170/" style={{marginLeft:"20px"}}><i class="fa fa-linkedin fa-2x"></i></a>
                <a href="https://stackoverflow.com/users/13632450/kaushik-yelne" style={{marginLeft:"20px"}}><i class="fa fa-stack-overflow fa-2x" aria-hidden="true"></i></a>
            </footer>
        </React.Fragment>
    );
}

export default FooterComponent;