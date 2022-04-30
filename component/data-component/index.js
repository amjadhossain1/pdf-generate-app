import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import logo from "../../public/images/logo.PNG";
import mainSection from "../../public/images/main-section.PNG";
import footer from "../../public/images/work-footer.PNG";
import QRCode from "react-qr-code";

class DataComponent extends React.Component {
  render() {
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
    } = this.props.data;

    const handleFormatDate = (date) => {
      const dateObj = new Date(date);
      const month = dateObj.getMonth() + 1;
      const day = dateObj.getDate();
      const year = dateObj.getFullYear();
      const newdate = String(day + "/" + month + "/" + year);
      return newdate;
    };

    const qrValue = `Policy Number:  ${id}, Issue Date:  ${issueDate},  Plan: ${plan},  Destination: ${destination},  From: ${fromDate},  To: ${receiveDate}, Full Name: ${name}, Date of Birth: ${dateOfBirth},
    Passport Number: ${passportNo}`;

    return (
      <Container style={{ padding: "20px 120px" }} className="">
        <Image
          alt={"logo"}
          src={logo}
          className="logo"
          width={250}
          height={80}
          quality={100}
        />
        <h2 className="mb-4 text-center">TRAVEL INSURANCE CERTIFICATE</h2>
        <div className="mx-2">
          <div className="row">
            <div className="col-3 p-0">
              {" "}
              <div className="p-1">
                {" "}
                <span className="fw-bold">POLICY NO:</span>
                {id}
              </div>{" "}
            </div>
            <div className="col-3">
              {" "}
              <div className="p-1">
                {" "}
                <span className="fw-bold">ISSUE DATE:</span> { handleFormatDate(issueDate)}
              </div>{" "}
            </div>
            <div className="col-3 p-0 margin-minus" >
              <div className="p-1">
                {" "}
                <span className="fw-bold">PLAN:</span> {plan}
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="p-1">
                {" "}
                <span className="fw-bold"> AGENT:</span> M M TRADE
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 mx-1">
                DESTINATION
              </div>
            </div>
            <div className="col-3 px-2">
              <div className="row px-1">
                <div className="col-6 p-0">
                  <div className="bg-secondary bg-opacity-10 mx-1 p-1">FROM</div>
                </div>
                <div className="col-6 p-0">
                  <div className="bg-secondary bg-opacity-10 mx-1 p-1">TO</div>
                </div>
              </div>
            </div>

            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 mx-1">
                {" "}
                COUNTRY OF RESIDENCE{" "}
              </div>{" "}
            </div>
            <div className="col-3 p-0">
              {" "}
              <div className="bg-secondary bg-opacity-10 p-1 mx-1 mb-1">
                {" "}
                TELEPHONE NO
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 mx-1">
                <span className="fw-bold"> {destination}</span>
              </div>
            </div>
            <div className="col-3 px-2">
              <div className="row px-1">
                <div className="col-6 p-0">
                  <div className="bg-secondary bg-opacity-10 p-1 mx-1">
                    <span className="fw-bold"> { handleFormatDate(fromDate)}</span>
                  </div>
                </div>
                <div className="col-6 p-0">
                  <div className="bg-secondary bg-opacity-10 p-1 mx-1">
                    <span className="fw-bold"> {handleFormatDate(receiveDate)} </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 mx-1">
                <span className="fw-bold"> {country} </span>
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 mx-1">
                <span className="fw-bold"> {phoneNo} </span>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 m-1">
                {" "}
                FULL NAME
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 m-1">
                {" "}
                DATE OF BIRTH
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 m-1">
                {" "}
                PASSPORT NUMBER
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 mx-1">
                {" "}
                <span className="fw-bold"> {name}</span>
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 mx-1">
                <span className="fw-bold"> {handleFormatDate(dateOfBirth)} </span>
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 mx-1">
                <span className="fw-bold"> {passportNo} </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-secondary fst-italic mt-3 mb-2">
          Contrary to any stipulations stated in the General Conditions, the
          plan subscribed to under this Letter of Confirmation, covera
          exclusively the below mentioned benefits. Limitations & Excesses shown
          in the tab;e hereafter. The General Conditions form an integral part
          of this letter of Confirmation. <br /> For more info/modification
          regarding your policy, kindly do not hesitate to contact your
          authorized agent or e-mail us on enquiry@wecare-center.com{" "}
        </p>

        <Image
          className="my-2 pb-2"
          alt="footer"
          src={mainSection}
          width={1200}
          height={600}
          quality={100}
        />

        <div className="my-2">
          <h3 className="font-weight-bold mt-2 mb-0">Confirmation Code</h3>
          <div className="">
            <QRCode size={160} className="m-2" value={qrValue} />
          </div>
          <h5 className="fst-italic  mb-5 pb-3">
            For offcial use, scan the above code to validate this confirmation
            letter
          </h5>
        </div>
        <Image className="mt-5" alt="footer" src={footer} quality={100} />
      </Container>
    );
  }
}
export default DataComponent;
