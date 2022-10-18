import "./card.scss";
function Card({title, phone, email, date, onClickCard, ...rest}) {
return(
    <div className="employees__card" onClick={onClickCard} data-obj-id={rest["data-obj-id"]}>
        <div className="employees__title">
            <h1>{title}</h1>  
        </div>
        <div className="employees__phone">
            <i className="uil uil-mobile-android-alt employees__phone__icon"></i>
            <p> {phone} </p>
        </div>
        <div className="employees__email">
            <i className="uil uil-envelope-alt employees__email__icon"></i>
            <p> {email} </p>
        </div>
    </div>
)
}
export default Card;