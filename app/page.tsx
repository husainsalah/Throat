"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";
import logo from "@/public/images/logo.png";
export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      {/* second half */}

      <section className="h-screen lg:flex w-full flex-col justify-center items-center bg-[url('../public/images/splash-bg-img.png')]">
        <Wrapper>
          <div className="p-40">
            <center>
              <p className="flex w-full flex-col align-center items-center text-2xl text-white p-2">Coming Soon</p>
              <Image src={logo} alt="Throat Logo" className="p-10" ></Image>
              <p className="flex w-full flex-col align-center items-center text-2xl text-white p-4">Where frontline artists meet global activists.</p>
            </center>
          </div>
          <div className="">
            <Button size="xl" className="w-full font-bold" variant="brand">
              <a
                href="https://github.com/lucky-chap/kaminari"
                target="_blank"
                rel="noreferrer"
                className="pb-1 dark:text-zinc-800 text-zinc-100"
              >
                Signup for Updates
              </a>{" "}
            </Button>
          </div>
        </Wrapper>

      </section>

    </section >

  );
}
