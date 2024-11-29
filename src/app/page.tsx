import React from "react";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import BussinessNumbers from "@/components/BussinessNumbers";
import Design from "@/components/Design";
import Marketing from "@/components/Marketing";
import Design2 from "@/components/Design2";


export default function Home() {
  return (
    <main >
       <Hero/>
       <Clients/>
       <BussinessNumbers/>
       <Design/>
       <Design2/>
        <Marketing/>
    </main>
  );
}
