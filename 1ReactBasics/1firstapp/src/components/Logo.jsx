import courseraLogo from '../images/coursera.png'

function Logo(props) {
    const userPic = <img src={courseraLogo} alt={props.img}  style={{ width:"80px", height:"80px", margin:'20px'}}/>
    return userPic;
}

export default Logo;