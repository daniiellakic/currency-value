import React, { useState, useEffect } from 'react'
import axios from 'axios'
import News from './News'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=finance&apiKey=a9f124ad8af947339e739268a075dacb`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()  // NUBMER OF ARTICLES
    }, [])
    return (
        <div>
            {articles.map(article => {
                return(
                     <News 
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                )
            })}
        </div>
    )
}

export default NewsList