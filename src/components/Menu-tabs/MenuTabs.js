import React from 'react';
import "./menu-tabs.css";

const MenuTabs = ({ menuList, filteritem }) => {
    return (
        <>
            <section className='tabs'>
                <div className="custom-container container-fluid">
                    <div className='all-tabs'>
                        {
                            menuList.map((currentEl) => {
                                return (
                                    <button className='tabs-btn' onClick={() => { filteritem(currentEl) }}>{currentEl}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuTabs;