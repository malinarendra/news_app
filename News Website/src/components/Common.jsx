import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

function Common(props) {
    const category = props.category;
    const [apiData, apiDataUpdate] = useState(null);
    const [loading, upLoading] = useState(true)

    async function fetchApi() {
        let apiKey= process.env.MY_NEWS_API_KEY
        console.log(apiKey)
        try {
            const url = `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&apiKey=${apiKey}`;

            const raw_data = await fetch(url);
            const data = await raw_data.json();

            apiDataUpdate(data.articles);
            upLoading(!loading)
        }catch(err){
            if(err){
                alert("Network error ☹️!")
                window.location.reload()
            }
        }
      
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <>
            {loading ? <h4 style={{ color: "#3131ab" }} className="d-flex justify-content-center align-items-center my-3">loading...</h4> :
                <>
                    <div className="container">
                        <h3 className="d-flex justify-content-center align-items-center">{props.mainCategory}</h3>
                        <div className="row">
                            {
                                !apiData ? null : <>
                                    {
                                        apiData.map((val, index) => (

                                            <Card
                                                key={index} // Add a unique key for each card
                                                author={val.author ? val.author : "Unknown"}
                                                image={val.urlToImage ? val.urlToImage : "images/news.jpg"}
                                                title={val.title ? val.title : "Title"}
                                                desc={val.description ? val.description : "Description"}
                                                url={val.url ? val.url : "/"}
                                            />
                                        ))
                                    }
                                </>
                            }
                        </div>
                    </div>
                </>}
        </>
    );
}

export default Common;
