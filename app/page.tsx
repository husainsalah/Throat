"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import logo from "@/public/images/throat-logo.png";
export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* second half */}

      <section className="h-screen flex w-full flex-col justify-center items-center bg-[url('../public/images/splash-bg-img.png')] bg-cover bg-center">
        <Wrapper>
          <div className="p-10 lg:p-40">
            <center>
              <p className="flex w-full flex-col align-center items-center font-bold text-xl text-white p-2 tracking-[.5em]">COMING SOON</p>
              <Image src={logo} alt="Throat Logo" className="min-width-10 w-auto lg:p-10 m-0" />
              <p className="flex w-full flex-col align-center items-center text-base lg:text-2xl text-white p-4">Frontline Artists | Global Activists | Positive Impact</p>
            </center>
          </div>

        </Wrapper>

      </section>

    </section >

  );
}
