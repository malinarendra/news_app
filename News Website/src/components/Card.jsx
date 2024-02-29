import React from "react";

function Card(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                <div className="card" style={{ width: "18rem" }}>
                    <img style={{maxHeight:"10rem"}} src={props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title.length>40? <span>{props.title.slice(0,40)}...</span>: props.title }</h5>
                        <p className=" my-2 card-title card-subtitle"><em>{props.author}</em></p>
                        <p className="card-text">{(props.desc.length>80)? <span>{props.desc.slice(0,80)}...</span> : props.desc }</p>
                        <a href={props.url} className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;