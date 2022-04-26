import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import logo from "../../public/images/logo.PNG";
import mainSection from "../../public/images/main-section.PNG";
import section2 from "../../public/images/work-section2.PNG";
import footer from "../../public/images/work-footer.PNG";
import QRCode from "react-qr-code";

const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal",
};

class DataComponent extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   country: "Bangladesh",
    //   dateOfBirth: "2022-04-17",
    //   destination: "Saudi",
    //   fromDate: "2022-04-19",
    //   id: 452178,
    //   issueDate: "4/13/2022",
    //   name: "amjad hosain",
    //   passportNo: "1234465778980",
    //   phoneNo: "23w4we5567890",
    //   plan: "Covid Plan (KSA)",
    //   receiveDate: "2022-04-19",
    // };
  }

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

    return (
      <Container className="">
        <Image
          alt={"logo"}
          src={logo}
          className="logo"
          width={300}
          height={90}
        />
        <h2 className="mb-4 text-center">TRAVEL INSURANCE CERTIFICATE</h2>
        <div className="ms-2">
          <div className="row">
            <div className="col-3 fw-bold  p-0">
              {" "}
              <div className="p-1"> POLICY NO: {id}</div>{" "}
            </div>
            <div className="col-3 fw-bold p-0 ">
              {" "}
              <div className="p-1">ISSUE DATE: {issueDate}</div>{" "}
            </div>
            <div className="col-3 fw-bold p-0">
              <div className="p-1">PLAN: {plan}</div>
            </div>
            <div className="col-3 fw-bold p-0">
              <div className="p-1"> AGENT: M M TRADE</div>
            </div>
          </div>
          {/* data */}
          <div className="row">
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 m-1">
                DESTINATION
              </div>
            </div>
            <div className="col-3 px-2">
              <div className="row px-1">
                <div className="col-6 p-0">
                  <div className="bg-secondary bg-opacity-10 m-1 p-1">FROM</div>
                </div>
                <div className="col-6 p-0">
                  <div className="bg-secondary bg-opacity-10 m-1 p-1">TO</div>
                </div>
              </div>
            </div>

            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 m-1">
                {" "}
                COUNTRY OF RESIDENCE{" "}
              </div>{" "}
            </div>
            <div className="col-3 p-0">
              {" "}
              <div className="bg-secondary bg-opacity-10 p-1 m-1">
                {" "}
                TELEPHONE NO
              </div>
            </div>
          </div>
          {/* data2 */}
          <div className="row">
            <div className=" col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 m-1">
                {" "}
                {destination}
              </div>
            </div>
            <div className="col-3 px-2">
              <div className="row px-1">
                <div className="col-6 p-0">
                  <div className="bg-secondary bg-opacity-10 p-1 m-1">
                    {" "}
                    {fromDate}{" "}
                  </div>
                </div>
                <div className="col-6 p-0">
                  <div className="bg-secondary bg-opacity-10 p-1 m-1">
                    {receiveDate}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 m-1">
                {" "}
                {country}
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 m-1">
                {" "}
                {phoneNo}
              </div>
            </div>
          </div>
          {/* data3 */}
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
          {/* data4 */}
          <div className="row">
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 m-1"> {name}</div>
            </div>
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 m-1">
                {dateOfBirth}
              </div>
            </div>
            <div className="col-3 p-0">
              <div className="bg-secondary bg-opacity-10 p-1 m-1">
                {" "}
                {passportNo}
              </div>
            </div>
          </div>
        </div>

        <p className="text-secondary fst-italic my-1">
          Contrary to any stipulations stated in the General Conditions, the
          plan subscribed to under this Letter of Confirmation, covera
          exclusively the below mentioned benefits. Limitations &
          Excesses shown in the tab;e hereafter.  The General Conditions
          form an integral part of this letter of Confirmation. <br /> For more
          info/modification regarding your policy, kindly do not hesitate to
          contact your authorized agent or e-mail us on
          enquiry@wecare-center.com{" "}
        </p>

        <Image
          className=""
          alt="footer"
          src={mainSection}
          width={"100%"}
          height={600}
        />

        <div className="my-2">
          <h3 className="font-weight-bold mt-2">Confirmation Code</h3>
          <div className="">
            <QRCode className="m-3" value="amjad" />
          </div>
          <h5 className="font-italic mb-5 ">
            For offcial use, scan the above code to validate this confirmation
            letter
          </h5>
        </div>
        <Image className="mt-5" alt="footer" src={footer} />
      </Container>
    );
  }
}
export default DataComponent;
