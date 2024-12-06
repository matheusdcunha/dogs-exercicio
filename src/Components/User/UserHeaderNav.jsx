import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MinhasFotos from "../../Assets/feed.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import Adicionar from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import useMedia from "../../Hooks/useMedia";
import styles from "./UserHeaderNav.module.css"

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const { userLogout } = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false)
  const navigate = useNavigate();

  const {matchs} = window.matchMedia("(max-width: 40rem)")  

  function handleLogout(){
    userLogout();
    navigate("/login")
  }

  const {pathname} = useLocation();
  useEffect(()=>{
    setMobileMenu(false)
  },[pathname])

  return (
    <>
    {mobile && <button aria-label="Menu" className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={()=> setMobileMenu(!mobileMenu)}></button>}    
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
      <NavLink to="/conta" end><MinhasFotos />{mobile && "Minhas Fotos"}</NavLink>
      <NavLink to="/conta/estatisticas"><Estatisticas />{mobile && "Estatísticas"}</NavLink>
      <NavLink to="/conta/postar"><Adicionar />{mobile && "Adicionar"}</NavLink>
      <button onClick={handleLogout}><Sair />{mobile && "Sair"}</button>
    </nav>
    </>
  );
};

export default UserHeaderNav;
