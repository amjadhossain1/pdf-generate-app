import React, { useState } from 'react';
import PdfComponent from '../../component/pdf-component';

const Data = () => {
    const [dataRes, setDataRes] = useState({
        country: "Bangladesh",
        dateOfBirth: "2022-04-17",
        destination: "Saudi",
        fromDate: "2022-04-19",
        id: 452178,
        issueDate: "4/13/2022",
        name: "amjad hosain",
        passportNo: "1234465778980",
        phoneNo: "23w4we5567890",
        plan: "Covid Plan (KSA)",
        receiveDate: "2022-04-19",
      });
  return (
    <div>
       <PdfComponent dataRes={dataRes} setDataRes={setDataRes}/>
    </div>
  );
}

export default Data;
