import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto">
            <p className='text-center'>
                Search for news articles that mention a specific topic or keyword
                The main use of News API is to search through every article published by over 80,000 news sources and blogs in the last 5 years. Think of us as Google News that you can interact with programmatically!

                In this example we want to find all articles that mention Apple published today, and sort them by most popular source first (i.e. Engadget articles will be returned ahead of Mom and Pop's Little iPhone Blog). For this we need to use the /everything endpoint.

                For more information about the /everything endpoint, including valid parameters for narrowing your search, see the Everything endpoint reference.</p>
        </div>
    )
}

export default About
