"use client";

import { LighthouseNFTContracts } from "./_components/LighthouseNFTContracts";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/fil-frame";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col  pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Time to Meet</span>
            <span className="block text-4xl font-bold">New Friends</span>
          </h1>
        </div>
      </div>
      <LighthouseNFTContracts />
    </>
  );
};

export default Home;
