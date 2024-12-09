import React, { useEffect, useState } from 'react'
import UserHeaderNav from "./UserHeaderNav"
import { useLocation } from 'react-router-dom';
import styles from "./UserHeader.module.css"

const UserHeader = () => {
  const [title, setTitle] = useState();
  const location = useLocation();

  useEffect(()=>{
    switch(location.pathname){
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  },[location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav/>
    </header>
  )
}

export default UserHeader
