"use client";

import { LighthouseNFTContracts } from "./lighthouse/_components/LighthouseNFTContracts";
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
            <span className="block text-2xl mb-2">Meet your new friends</span>
            <span className="block text-4xl font-bold">At Convo</span>
          </h1>
        </div>
      </div>
      <LighthouseNFTContracts />
    </>
  );
};

export default Home;
