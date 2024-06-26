"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import logo from "@/public/images/logo.png";
export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* second half */}

      <section className="h-screen flex w-full flex-col justify-center items-center bg-[url('../public/images/splash-bg-img.png')] bg-cover">
        <Wrapper>
          <div className="p-10 lg:p-40">
            <center>
              <p className="flex w-full flex-col align-center items-center font-bold text-xl text-white p-2 tracking-[.5em]">COMING SOON</p>
              <Image src={logo} alt="Throat Logo" className="min-width-10 w-auto lg:p-10 m-0" />
              <p className="flex w-full flex-col align-center items-center text-2xl text-white p-4">Where frontline artists meet global activists</p>
            </center>
          </div>
          <div className="">
            <Button size="xl" className="w-full rounded-full border-2 border-transparent bg-neutral-500/25 hover:bg-neutral-500/75 text-zinc-800 border-2 border-black" variant="brand">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="pb-1 text-sm tracking-[.5em] font-bold text-zinc-400 hover:text-zinc-100"
              >
                SIGNUP FOR UPDATES
              </a>{" "}
            </Button>
          </div>
          <div className="pt-40 pr-8 lg:pt-0 w-full text-right">
            <p><i>Photo by Morgana Wingard</i></p>
          </div>
        </Wrapper>

      </section>

    </section >

  );
}
