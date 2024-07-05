
const Heading = React.createElement(
    'h1',
    {className:"heading"},
    null,
    'Topics Covered'
);


const Para = (props) => {
    return React.createElement(
        'p',
        { className: 'para' },
        props.text
    );
};


const Link = (props) => {
    return React.createElement(
        'a',
        { href: props.link, className: 'link', target: '_blank', rel: 'noopener noreferrer' },
        props.text
    );
};


const App = React.createElement(
    'div',
    {className:"container"},
    null,
    Heading,
    React.createElement(Para, { text: 'The following is a list of all topics we cover in the MDN learning area.' }),
    React.createElement(Link, { text: 'Getting started with the web', link: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web' }),
    React.createElement(Para, { text: 'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.' }),
    React.createElement(Link, { text: 'CSS — Styling the web', link: 'https://developer.mozilla.org/en-US/docs/Learn/CSS' }),
    React.createElement(Para, { text: 'CSS is the language that we use to control our web content\'s style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.' }),
    React.createElement(Link, { text: 'JavaScript — Dynamic client-side scripting', link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript' }),
    React.createElement(Para, { text: 'JavaScript is the scripting language used to add dynamic functionality to web pages. This topic teaches all the essentials needed to become comfortable with writing and understanding JavaScript.' })
);

// Render the App component into the DOM
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(App);
