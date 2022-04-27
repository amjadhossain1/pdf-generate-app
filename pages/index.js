import Head from "next/head";
import { useState } from "react";
import FormSection from "../component/Form/";
import PdfComponent from "../component/pdf-component";

export default function Home() {
  const [dataRes, setDataRes] = useState(null);
  // console.log("data: ", dataRes);
  return (
    <div className="">
      <Head>
        <title>PDF Generate App</title>
      </Head>

      {!dataRes ? (
        <FormSection dataRes={dataRes} setDataRes={setDataRes} />
      ) : (
        <PdfComponent dataRes={dataRes} setDataRes={setDataRes} />
      )}
    </div>
  );
}
