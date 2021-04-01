import React,{useEffect,useState} from 'react';

const FooterComponent = () => {
    return(
        <React.Fragment>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet"/>
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2021 @KaushikYelne</span>
                <a href="https://github.com/kaushikyelne" style={{marginLeft:"10px"}}><i class="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/kaushik-yelne-4aa657170/" style={{marginLeft:"10px"}}><i class="fa fa-linkedin"></i></a>
                <a href="https://stackoverflow.com/users/13632450/kaushik-yelne" style={{marginLeft:"10px"}}><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
            </footer>
        </React.Fragment>
    );
}

export default FooterComponent;