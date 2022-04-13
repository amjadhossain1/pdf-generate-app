import Head from "next/head";
import { useState } from "react";
import FormSection from "../component/Form/";
import PdfComponent from "../component/pdf-component";

export default function Home() {
  const [dataRes, setDataRes] = useState(null);

  return (
    <div className="">
      <Head><title>PDF Generate App</title></Head>
       <FormSection dataRes={dataRes} setDataRes={setDataRes} />      
    </div>
  );
}
