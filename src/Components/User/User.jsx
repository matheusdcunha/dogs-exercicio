import React, { useContext } from "react";
import UserHeader from "./UserHeader";
import {Routes, Route} from "react-router-dom"
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import Feed from "../Feed/Feed";
import { UserContext } from "../../UserContext";

const User = () => {

  const {data} = useContext(UserContext);


  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats/>}/>
      </Routes>
    </section>
  );
};

export default User;
