import React from 'react'
import myportfolio from '../../public/my-portfolio.png'
import comicreaders1 from '../../public/comicreaders1.png'

const projects = [
    {
        id: 1,
        name: 'My Portfolio',
        link: 'https://www.gabrielzanella.com.br',
        linkName: 'gabrielzanella.com.br',
        creationDate: '07-2025',
        skills: [
            {name:'HTML'}, 
            {name:'SASS'},
            {name:'REACT'},
            {name:'EMAILJS'},
            {name:'NEXTJS'}
        ],
        github: 'https://github.com/gabriel030899/my-portfolio-react',
        image: myportfolio,
        description: "I built my portfolio website entirely with React.js, ensuring a fast and dynamic user experience. The project is fully responsive, adapting seamlessly to all devices. For styling, I used SASS, allowing for modular and maintainable CSS with enhanced flexibility. To handle contact form submissions efficiently, I integrated the EmailJS library, enabling direct email sending without the need for a back-end. The combination of React.js, SASS, and EmailJS ensures a modern, scalable, and visually appealing portfolio."
    },
    {
        id: 2,
        name: 'Comic Readers',
        link: 'https://comicreaders.netlify.app/',
        linkName: 'comicreaders.netlify.app',
        creationDate: '01-2024',
        skills: [
            {name:'HTML'}, 
            {name:'CSS'},
            {name:'JAVASCRIPT'},
        ],
        github: 'https://github.com/gabriel030899/comicreaders',
        image: comicreaders1,
        description: "I developed Comic Readers, a website designed to enhance the user experience in book searches. Using HTML, CSS, and JavaScript, I created an intuitive interface with advanced filters that make searches faster and more efficient. Additionally, I developed a book recommendation algorithm that suggests options based on user choices, creating a dynamic and personalized experience. This solution offers multiple combinations of suggestions, making it easier to choose books that match the user's interests. The project not only improves interaction but also integrates features that make the literary discovery process more engaging and accurate."
    }
]

export default projects