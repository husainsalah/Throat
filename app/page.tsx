"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import logo from "@/public/images/logo.png";
export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* second half */}

      <section className="h-screen flex w-full flex-col justify-center items-center bg-[url('../public/images/splash-bg-img.png')]">
        <Wrapper>
          <div className="p-10 lg:p-40">
            <center>
              <p className="flex w-full flex-col align-center items-center text-2xl text-white p-2 tracking-widest">COMING SOON</p>
              <Image src={logo} alt="Throat Logo" className="min-width-20 lg:p-10" />
              <p className="flex w-full flex-col align-center items-center text-2xl text-white p-4">Where frontline artists meet global activists.</p>
            </center>
          </div>
          <div className="">
            <Button size="xl" className="w-full font-light" variant="brand">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="pb-1 dark:text-zinc-800 text-zinc-100"
              >
                SIGNUP FOR UPDATES
              </a>{" "}
            </Button>
          </div>
          <div className="pt-40 pr-8 lg:pt-0 w-full text-right text-zinc-500">
            <p>Photo by Morgana Wingard</p>
          </div>
        </Wrapper>

      </section>

    </section >

  );
}
