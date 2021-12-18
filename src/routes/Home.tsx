import React, { useState } from "react";
import Input from "../components/Input";
import logo from "src/assets/images/logo_transparent.png";

const Home: React.FC = ({}) => {
  const [name, setName] = useState<string>("");

  return (
    <div className="bg-black px-6 py-6 rounded-xl shadow-md">
      <div className="flex flex-row justify-center items-center ">
        <img src={logo} alt="logo" className="h-12 mb-8" />
      </div>
      <Input />
    </div>
  );
};

export default Home;
