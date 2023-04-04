import Head from "next/head";
import { useState } from "react";
import Header from "@/components/header";
import OrdinalCard from "@/components/ordinalCard";
import OrdinalSettings from "@/components/ordinalSettings";
import Dropbox from "@/components/dropbox";
import Footer from "@/components/footer";

export default function Home() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Ordinal</title>
      </Head>
      <div className="-mr-24 sm:mr-0">
        {/* Header for Page */}
        <Header />
        <div className="px-2 pt-2 md:pt-8  mx-auto items-center md:items-start gap-x-14 md:gap-x-18 lg:gap-x-24 flex flex-col md:flex-row justify-center">
          {/* Screen Overlay for Loading */}
          {file && loading && (
            <div className="fixed top-[50%] left-[50%] -translate-x-24 sm:-translate-x-12 -translate-y-6 text-lg w-full h-full z-10">
              Uploading your ordinal...
            </div>
          )}
          {/* Display Ordinal Card or Settings based on File Availability */}
          {!file ? (
            <OrdinalCard />
          ) : (
            <OrdinalSettings setFile={setFile} loading={loading} />
          )}
          {/* Drop Box for Image */}
          <Dropbox
            file={file}
            setFile={setFile}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
        {/* Footer for Page */}
        <Footer />
      </div>
    </>
  );
}
