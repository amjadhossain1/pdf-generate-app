import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Pdf from "react-to-pdf";
import logo from "../../public/images/logo.PNG";
import section from "../../public/images/work-section.PNG";
import section2 from "../../public/images/work-section2.PNG";
import footer from "../../public/images/work-footer.PNG";
import QRCode from "react-qr-code";
import Image from "next/image";

const ref = React.createRef();

const ResultPdf = () => {
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
  const {
    id,
    issueDate,
    destination,
    country,
    name,
    fromDate,
    receiveDate,
    dateOfBirth,
    passportNo,
    phoneNo,
    plan,
  } = dataRes;
  
  console.log('dataRes: ',dataRes);

  const options = {
    orientation: "landscape",
    unit: "in",
    format: [20, 14],
  };

  return (
    <main>
      {/* <h1>TRAVEL INSURANCE CERTIFICATE</h1> */}
      <div className="">
        <Container>
          <div className="">
            <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
              {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
          </div>
        </Container>

        <div
          ref={ref}
          style={{ height: "100rem", width: "100vw", marginTop: "10px" }}
        >
          <Container fluid className="">
            <Image
              alt={"logo"}
              src={logo}
              className="logo"
              width={320}
              height={110}
            />
            <h4 className="m-2 text-center">TRAVEL INSURANCE CERTIFICATE</h4>
            <table className="table border-bottom-0">
              <thead className="">
                <tr>
                  <th scope="col">POLICY NO: {id}</th>
                  <th scope="col">ISSUE DATE: {issueDate}</th>
                  <th scope="col">PLAN: {plan}</th>
                  <th scope="col">AGENT: M M TRADE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="m-5">
                  <td className="table-secondary border-bottom-0">
                    <div className="fw-bold">DESTINATION</div>
                  </td>
                  <div
                    className="row table-secondary"
                  >
                    <div className="col-6">
                      <td className="table-secondary fw-bold">FROM</td>
                    </div>
                    <div className="col-6">
                      <td className="table-secondary fw-bold">TO</td>
                    </div>
                  </div>

                  <td className="table-secondary border-bottom-0 fw-bold">
                    COUNTRY OF RESIDENCE
                  </td>
                  <td className="table-secondary border-bottom-0 fw-bold">
                    TELEPHONE NO
                  </td>
                </tr>
                <tr className="">
                  <td className="table-secondary border-bottom-0">
                    {destination}
                  </td>
                  <div className="row table-secondary">
                    <div className="col-6">
                      {" "}
                      <td className="table-secondary border-bottom-0">
                        {fromDate}
                      </td>
                    </div>
                    <div className="col-6">
                      {" "}
                      <td className="table-secondary border-bottom-0">
                        {receiveDate}
                      </td>
                    </div>
                  </div>

                  <td className="table-secondary border-bottom-0">{country}</td>
                  <td className="table-secondary border-bottom-0">{phoneNo}</td>
                </tr>
                <tr>
                  <td className="table-secondary border-bottom-0 fw-bold">
                    FULL NAME
                  </td>
                  <td className="table-secondary border-bottom-0 fw-bold">
                    DATE OF BIRTH
                  </td>
                  <td className="table-secondary border-bottom-0 fw-bold">
                    PASSPORT NUMBER
                  </td>
                </tr>
                <tr>
                  <td className="table-secondary border-bottom-0 m-5">
                    {name}
                  </td>
                  <td className="table-secondary border-bottom-0">
                    {dateOfBirth}
                  </td>
                  <td className="table-secondary border-bottom-0">
                    {passportNo}
                  </td>
                </tr>
              </tbody>
            </table>
            <Image alt="main" src={section} />
            <Image className="mt-1" alt="footer" src={section2} />

            <div className="">
              <h3 className="font-weight-bold mt-2">Confirmation Code</h3>
              <div className="">
                <QRCode value="amjad" />
              </div>
              <h3 className="font-italic mb-3 mt-3">
                For offcial use, scan the above code to validate this
                confirmation letter
              </h3>
            </div>
            <Image className="" alt="footer" src={footer} />
          </Container>

        </div>
      </div>
    </main>
  );
};
export default ResultPdf;
