import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';


export const Home = () => {
    const [listOfPosts, setListOfPosts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/posts")
            .then((resp) => {
                setListOfPosts(resp.data)
            })

    }, []);

    return (
        <>
            <h1>ToDo Page</h1>
            <section>
                {
                    listOfPosts.map(({ title, postText, username }, keyIndex) => (
                        <article key={keyIndex} className='post'>
                            <div className="header">
                                <h3>{title}</h3>
                                <h4>@{username}</h4>
                            </div>
                            <p>{postText}</p>
                            <button>Done</button>
                        </article>
                    ))
                }
            </section>
      
        </>
    )
}
