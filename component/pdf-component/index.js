import Link from "next/link";
import React from "react";
import ReactToPrint from "react-to-print";
import DataComponent from "../data-component";
class PdfComponent extends React.Component {
  render() {
    // console.log(this.props);
    const { dataRes, setDataRes } = this.props;
    return (
      <div>
        <DataComponent
          data={dataRes}
          ref={(response) => (this.componentRef = response)}
        />
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => (
            <div
              href=""
              className="btn btn-primary fw-bold w-100 py-3 text-decoration-none"
              passHref
            >
              Download to PDF!
            </div>
          )}
        />
      </div>
    );
  }
}
export default PdfComponent;
