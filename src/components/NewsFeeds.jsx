import dateFormat from "dateformat";
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseConfig } from "../firebase.config";
import Wraper from "./Wraper";

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

const NewsFeeds = ({ date }) => {
  const [loading, setLoading] = useState(true);
  const [news1, setNews1] = useState([]);
  const [news2, setNews2] = useState([]);

  const dbName = dateFormat(date, "dd-mm-yyyy");

  useEffect(() => {
    async function start() {
      const docRef = doc(database, "news", dbName);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLoading(false);

        setNews1(docSnap.data().news18);
        setNews2(docSnap.data().IndiaToday);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        setLoading(true);
      }
    }
    start();
  }, [dbName]);

  return (
    <section className="dark:bg-gray-800 w-full p-7 min-h-screen">
      {loading ? (
        <div>Loading... or No such document!</div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-teal-500">News18</h1>
          {news1
            .map((news, index) => {
              return Wraper(news, index);
            })
            .reverse()}

          <Divider />

          <h1 className="text-2xl font-bold mt-4 text-teal-500">India Today</h1>
          {news2
            .map((news, index) => {
              return Wraper(news, index);
            })
            .reverse()}
        </div>
      )}
    </section>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default NewsFeeds;
