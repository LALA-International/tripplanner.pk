import React from 'react';

const Content = ({headings}) => {
    const headerHeight = 71; // replace with the actual height of your fixed header

    function handleClick(event, id) {
        event.preventDefault();
        const target = document.getElementById(id);
        const topOffset = target.getBoundingClientRect().top + window.pageYOffset;
        const offset = topOffset - headerHeight;
        window.scrollTo({
            top: offset,
            behavior: "smooth",
        });
    }

    return (
        <div>
            <h2>Table of Contents</h2>
            <ul>
                {headings.map((heading, index) => (
                    <li style={{
                        behavior: "smooth",
                        block: "start",
                               }} key={index}>

                        <a href={`#${heading.id}`} onClick={(event) => handleClick(event, heading.id)}>
                            {heading.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Content;