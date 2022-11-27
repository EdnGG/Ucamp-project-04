import React, { useEffect, useState } from "react";
import { db } from "../../src/firebase";
// firebase 9
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const Data = () => {
  const [data, setData] = useState([]);

  // Firebase 9
  const getData = async () => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      setData(
        snapshot.docs.map((doc) => {
          console.log(doc.data());
          console.log(doc.id);
          return { ...doc.data(), id: doc.id };
        })
      );
      console.log(data);
    });
  };

  // Firebase 8
  // const getData = async () => {
  //   const querySnapshot = await db.collection("users").get();
  //   setData(
  //     querySnapshot.docs.map((doc) => {
  //       return { ...doc.data(), id: doc.id };
  //     })
  //   );
  //  setData(docs);
  // };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Este es el Data</h1>
      {/* <button onClick={() => addData(newUser)}>Add</button> */}
      {// data &&
      data.map((item, i) => {
        return (
          <div key={item.id}>
            <h2>{item.user}</h2>
            <p>{item.id}</p>
          </div>
        );
      })}
    </>
  );
};

export default Data;
