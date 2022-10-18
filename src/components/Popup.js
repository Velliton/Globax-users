import PropTypes from 'prop-types';


function Popup({active, setActive, onModalClose, item}){
    const {name, phone, date, position, department} = item || {};

    const onModalCloseHandler = () => {
        if (onModalClose && typeof onModalClose === 'function') {
            onModalClose(item);
        }
        setActive(false);
    }

    return(
        <div className={active?"modal active":"modal"} onClick={onModalCloseHandler}>
            <div className='employees__popup' onClick={e=>e.stopPropagation()}>
                <div className='employees__popup__close'>
                    <img src='./img/close.svg' width="25px" height="25px"/>
                </div>
                <div className='employees__popup__title'>{name || ''}</div>
                <div className='employees__popup__content'>
                    <div>{phone || ''}</div>
                    <div>sdfsdf</div>
                    <div>{date || ''}</div>
                    <div>{position || ''}</div>
                    <div>{department || ''}</div>
                </div>
                <div className='employees__popup__footer'>
                    <div>fghfgh</div>
                    <div>fghfgh</div>
                </div>
            </div>
        </div>
    )
}

Popup.propTypes = {
    onModalClose: PropTypes.func,
    item: PropTypes.object,
};

export default Popup;


