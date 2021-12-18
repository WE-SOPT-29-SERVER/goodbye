import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ref, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import { firebaseStorage, firestore } from "../constants/firebase";

interface ICardProps {
  url: string;
}

const Card: React.FC<ICardProps> = ({ url }) => {
  return (
    <div className="flex justify-center items-center py-4 lg:w-96">
      <img src={url} className="w-96" alt="card" />
    </div>
  );
};

export default Card;
