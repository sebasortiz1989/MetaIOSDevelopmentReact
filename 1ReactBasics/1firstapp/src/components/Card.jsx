function Card(props) {
    const headerStyle = {
        margin: "20px",
        maxWidth: "300px",
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
    }

    return (
        <div className="card">
            <h2>
                { props.h2 }
            </h2>
            <h3>
                { props.h3 }
            </h3>
        </div>
    );
}

export default Card;