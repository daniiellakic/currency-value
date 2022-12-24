import React, { useState, useEffect } from 'react'
import axios from 'axios'
import News from './News'
import './News.css'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?q=market&apiKey=a9f124ad8af947339e739268a075dacb`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()  
    }, [])
    return (
        <>
        <h1 className='news-headline'>Financial News</h1>
        <div className='news'>
            {articles.map(article => {
                return(
                     <News 
                        title={article.title}
                        //description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
        </>
        
    )
}

export default NewsList