import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ref, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import { firebaseStorage, firestore } from "../constants/firebase";

const Certificate: React.FC = ({}) => {
  const [url, setUrl] = useState<string>("");
  const { certificateId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const snap = await getDoc(doc(firestore, `present/${certificateId}`));
    if (snap.exists()) {
      const { imageUrl } = snap.data();
      setUrl(imageUrl);
    }
  };

  return (
    <>
      <Card url={url} />
      <button
        onClick={() => {
          navigate("/lobby");
        }}
        type="submit"
        className="w-40 text-center py-3 rounded bg-primary-default text-white hover:bg-primary-dark focus:outline-none my-1"
        style={{ fontSize: 16, textAlign: "center" }}>
        로비로 가기
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
        type="submit"
        className="w-40 text-center py-3 rounded bg-secondary-default text-white hover:bg-secondary-dark focus:outline-none my-1"
        style={{ fontSize: 16, textAlign: "center" }}>
        홈으로 가기
      </button>
    </>
  );
};

export default Certificate;
