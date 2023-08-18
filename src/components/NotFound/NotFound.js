import React from "react";
import { Link } from 'react-router-dom';

import "./NotFound.css"

function NotFound() {
    return(

        <section className="not-found">

            <h1 className="not-found__number">404</h1>
            <p className="not-found__name">Страница не найдена</p>            
            <Link className="not-found__link" to={-1}> Назад</Link>
       
        </section>
    )
}

export default NotFound;