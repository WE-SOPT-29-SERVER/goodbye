import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface InputProps {
  value: string;
}

const Input: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/certificate/${inputValue}`);
  };

  const onEnter = (e: React.KeyboardEvent<any>) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center">
      <input
        type="text"
        className="block border border-gray-300 w-full py-4 px-4 mb-1 rounded text-black focus:outline-none overflow-visible"
        name="name"
        placeholder="이름을 입력해주세요."
        value={inputValue}
        onChange={handleInputChange}
        style={{ fontSize: 16 }}
        onKeyPress={onEnter}
      />
      <button
        type="submit"
        className="w-full text-center py-3 rounded bg-primary-default text-white hover:bg-primary-dark focus:outline-none my-1"
        style={{ fontSize: 16, textAlign: "center" }}>
        갈겨
      </button>
    </form>
  );
};

export default Input;
