const data = {
    heading: "99% off all items!",
    callToAction: "Everything must go!"
}

function PromoHeading(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <h1>{props.callToAction}</h1>
        </div>
    )
}

function Promo2() {
    return (
        <div>
            <PromoHeading
            heading={data.heading}
            callToAction={data.callToAction}/>
        </div>
    );
}

export default Promo2;