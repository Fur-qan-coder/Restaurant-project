import React from 'react';
import MenuTabs from '../Menu-tabs/MenuTabs';
import MenuCard from '../Menu-Cards/MenuCard';
import MenuBanner from '../Menu-banner/MenuBanner';

const MenuPage = ({filteritem , menuList , menuData}) => {
  return (
    <>
      <MenuBanner />
      <MenuTabs filteritem={filteritem} menuList={menuList}/>
      <MenuCard  menuData={menuData}/>
    </>
  )
}

export default MenuPage;