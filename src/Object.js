import { useState } from "react";

const Object = () => {
  // state hook
  let [mtr, setMtr] = useState({
    merek: "Honda ADV 160",
    jenis: "Matic",
    bensin: 20,
    harga: 30000000,
    plat: "R 1234 FIQ",
    status: "OFF",
    nyalakan: () => {
      console.log("mesin nyala");
      // spread syntax
      setMtr((data) => {
        return {
          ...data,
          status: "ON",
          bensin: data.bensin - 5,
        };
      });
    },
    matikan: () => {
      setMtr((data) => {
        return {
          ...data,
          status: "OFF",
        };
      });
    },
    isibensin: () => {
      setMtr((data) => {
        return {
          ...data,
          bensin: data.bensin + 10,
        };
      });
    },
  });

  const motor = {
    // property
    merek: "Honda ADV 160",
    jenis: "Matic",
    bensin: 3,
    harga: 30000000,
    plat: "R 1234 FIQ",
    status: "OFF",

    // method
    nyalakan: () => {
      console.log("mesin nyala");
      motor.status = "ON";
    },
  };

  return (
    <div>
      <h1>Motor</h1>
      <ul>
        <li>Merek : {mtr.merek}</li>
        <li>Jenis : {mtr.jenis}</li>
        <li>Bensin : {mtr.bensin} liter</li>
        <li>Harga : {mtr.harga}</li>
        <li>Plat : {mtr.plat}</li>
        <li>Status : {mtr.status}</li>
      </ul>
      <button onClick={() => mtr.nyalakan()}>Nyalakan Mesin</button>
      <button onClick={() => mtr.matikan()}>Matikan Mesin</button>
      <button onClick={() => mtr.isibensin()}>Isi Bensin</button>
    </div>
  );
};

export default Object;
