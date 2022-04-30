import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import DataComponent from "../data-component";

const PdfComponent = (props) => {
  const componentRef = useRef(null);
  const { dataRes, setDataRes } = props;
  return (
    <>
      <DataComponent
        data={dataRes}
        ref={(response) => (componentRef = response)}
      />
      <ReactToPrint
        documentTitle={`${dataRes.name.toUpperCase()} INSURANCE`}
        content={() => componentRef}
        trigger={() => (
          <div className="btn btn-primary fw-bold w-100 py-3 text-decoration-none">
            Download to PDF!
          </div>
        )}
        onAfterPrint={() => (window.location.href = "/")}
      />
    </>
  );
};
export default PdfComponent;
