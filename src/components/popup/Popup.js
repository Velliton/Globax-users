import PropTypes from "prop-types";
import "./popup.scss";

function Popup({active, setActive, onModalClose, item}){
    const {name, phone, email, hire_date, position_name, department} = item || {};
   
    const onModalCloseHandler = () => {
        if (onModalClose && typeof onModalClose === "function") {
            onModalClose(item);
        }
        setActive(false);
    }

    return(
        <div className={active?"modal active":"modal"} onClick={onModalCloseHandler}>
            <div className="modal__block" onClick={e=>e.stopPropagation()}>
                <div className="modal__close" onClick={onModalCloseHandler}>
                    <img src="./img/closew.svg" width="25px" height="25px"/>
                </div>
                <div className="modal__title">
                    <h1>{name || ""}</h1>
                </div>
                <div className="modal__content">
                    <div className="modal__main">
                        <div className="modal__main__item">
                            <div className="modal__subtitle">
                                <h2>Телефон:</h2>
                            </div>
                            <div className="modal__value modal__value-large">
                                {phone || ""}
                            </div>
                        </div>
                        <div className="modal__main__item">
                            <div className="modal__subtitle">
                                <h2>Почта:</h2>
                            </div>
                            <div className="modal__value modal__value-underline">
                                {email || ""}
                            </div>
                        </div>
                        <div className="modal__main__item">
                            <div className="modal__subtitle">
                                <h2>Дата приёма:</h2>
                            </div>
                            <div className="modal__value">
                                <p>{hire_date || ""}</p>
                            </div>
                        </div>
                        <div className="modal__main__item">
                            <div className="modal__subtitle">
                                <h2>Должность:</h2>
                            </div>
                            <div className="modal__value">
                                <p>{position_name || ""}</p>
                            </div>
                        </div>
                        <div className="modal__main__item">
                            <div className="modal__subtitle">
                                <h2>Подразделение</h2>
                            </div>
                            <div className="modal__value">
                                <p>{department || ""}</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal__secondary">
                        <div className="modal__subtitle modal__subtitle-last">
                            <h2>Дополнительная информация:</h2>
                        </div>
                        <div className="modal__value modal__value-full  ">
                            <p>Lorem Iprem Ipsum явлIpsum для распечатки образцов. истов Letraset с образ</p>
                        </div>
                    </div>
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


