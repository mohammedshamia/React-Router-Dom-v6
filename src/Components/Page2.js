import React from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router";

function Page2() {
    const {id}=useParams();
 
    console.log(id)
    return (
        <div>
            <div>{id}</div>
            <Link to={"/page-3?username=shoman&name=ahmad&color=gray&gender=male"}>
                Go Home
            </Link>
        </div>
    );
}

export default Page2;