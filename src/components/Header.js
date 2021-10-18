import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <header>
            <h1 className="p-3">{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header