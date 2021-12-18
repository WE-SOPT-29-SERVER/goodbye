import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
import { firebaseStorage, firestore } from "../constants/firebase";

interface ICardItem {
  id: string;
  url: string;
}

const Lobby: React.FC = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<ICardItem[]>([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    let itemArr: ICardItem[] = [];
    const snap = await getDocs(collection(firestore, `present`));
    snap.forEach(s => {
      const { imageUrl } = s.data();
      itemArr.push({ id: s.id, url: imageUrl });
    });
    setItems(itemArr);
    setLoading(false);
  };

  return (
    <div className="flex flex-row justify-center flex-wrap h-full overflow-scroll">
      {!loading &&
        items?.length !== 0 &&
        items?.map(item => (
          <div key={item.id} className="mx-4">
            <Card url={item.url} />
          </div>
        ))}
    </div>
  );
};

export default Lobby;
