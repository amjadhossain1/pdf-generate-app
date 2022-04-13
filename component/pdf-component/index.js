import Link from "next/link";
import React from "react";
import ReactToPrint from "react-to-print";
import DataComponent from "../data-component";
class PdfComponent extends React.Component {
  render() {
    console.log(this.props);
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
            <button
              onClick={() => setDataRes(null)}
              className="btn btn-outline-primary fw-bold w-100 py-3"
            >
              <Link className='text-decoration-none' href='/'>Download to PDF!</Link>
            </button>
          )}
        />
      </div>
    );
  }
}
export default PdfComponent;
