import centralPark from './/assets/images/centralPark.jpg'

function DisplayImages(props) {
    const randomImgUrl = "https://www.parkcentralny.com/wp-content/uploads/2024/03/PCH_Hero_Home-Explore.jpg";
    return (
        <div>
            <img src={centralPark} height={200} alt="An image in new york"/>
            <img height={200} src={require(".//assets/images/centralPark.jpg")} alt="An image in new york"/>
            <img height={200} src={randomImgUrl} alt="An image in new york"/>
        </div>
    )
}

export default DisplayImages;