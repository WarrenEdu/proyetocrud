import React from 'react';

const Modal = ({car, isOpen, setIsOpen, deleteCar}) => {

    const handleAccept = () => {
        deleteCar('/cars', car.id);
        setIsOpen(false);
    }

    const handleCancel = () => {
        setIsOpen(false);
    }

  return (
    <article className={`modal ${isOpen && 'active'}`}>
        <div className='modal__back'>
            <h3 className='modal__title'>Estas seguro?</h3>
            <div className='modal__container'>
                <button onClick={handleAccept} className='modal__btn'>Aceptar</button>
                <button onClick={handleCancel} className='modal__btn'>Cancelar</button>
            </div>
        </div>
    </article>
  )
}

export default Modal;