import React from "react";
import ReactToPrint from "react-to-print";
import DataComponent from "../data-component";

class PdfComponent extends React.Component {
  render() {
    const { dataRes, setDataRes } = this.props;
    return (
      <div>
        <DataComponent
          data={dataRes}
          ref={(response) => (this.componentRef = response)}
        />
        <ReactToPrint
          documentTitle={`${dataRes.name.toUpperCase()} INSURANCE`}
          content={() => this.componentRef}
          trigger={() => (
            <div className="btn btn-primary fw-bold w-100 py-3 text-decoration-none">
              Download to PDF!
            </div>
          )}
        />
      </div>
    );
  }
}
export default PdfComponent;
