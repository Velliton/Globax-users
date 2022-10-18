
function Card({title, phone, email, onClickCard, ...rest}) {
return(
    <div className='employees__card' onClick={onClickCard} data-obj-id={rest['data-obj-id']}>
        <div className='employees__title'>
            <h1>{title}</h1>  
        </div>
        <div className='employees__phone'>
            <i className="uil uil-mobile-android-alt phone__icon"></i>
            <p> {phone} </p>
        </div>
        <div className='employees__email'>
            <i className="uil uil-envelope-alt email__icon"></i>
            <p> {email} </p>
        </div>
    </div>
)
}
export default Card;