import React from 'react'

import "./menucard.css";

const MenuCard = ({ menuData }) => {
    // console.log(menudata)
    return (
        <>
            <section className='menu-cards'>
                <div className="custom-container container-fluid">
                    <div className='allcards'>
                        {menuData.map((currentEl) => {
                            return (
                                <div className='card' key={currentEl.id}>
                                    <div className="number-wraper">
                                        <span className='card-number'>{currentEl.id}</span>
                                    </div>
                                    <span className='subtitle'>{currentEl.categories}</span>
                                    <h2 className='title'>{currentEl.title}</h2>
                                    <p>{currentEl.discription}</p>
                                    <div className='categories-img'>
                                        <img src={currentEl.image} alt="breakfast" />
                                    </div>
                                    <button className='filled-btn'>{currentEl.button}</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuCard;