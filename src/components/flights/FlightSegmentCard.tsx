"use client";

import { FaClock, FaPlane, FaWifi } from "react-icons/fa";
import Divider from "../ui/Divider";
import { IoFastFood } from "react-icons/io5";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import Image from "next/image";
import { usePathname } from "next/navigation";

type FlightSegmentCardProps = {
  date: string;
  duration: string;
  airlineLogo: string;
  airline: string;
  aircraft: string;
  features: string[];
  departureTime: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalAirport: string;
  showPriceHeader?: boolean;
};

const featureIcons: Record<string, React.ReactNode> = {
  plane: <FaPlane size={24} />,
  wifi: <FaWifi size={24} />,
  time: <FaClock size={24} />,
  food: <IoFastFood size={24} />,
  seat: <MdAirlineSeatReclineNormal size={24} />,
};

export default function FlightSegmentCard({
  date,
  duration,
  airlineLogo,
  airline,
  aircraft,
  features,
  departureTime,
  departureAirport,
  arrivalTime,
  arrivalAirport,
  showPriceHeader,
}: FlightSegmentCardProps) {
  return (
    <div className="card bg-white rounded-xl px-6 py-8">
      {showPriceHeader && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[24px] font-bold font-tradegothic">
            Emirates A350 Airbus
          </h3>
          <h4 className="text-[32px] text-[#FF8682] font-bold">$240</h4>
        </div>
      )}
      <div className="flex items-center justify-between mb-6">
        <h4
          className={`font-tradegothic ${!showPriceHeader ? "text-[20px]" : "text-[16px]"} font-bold`}
        >
          {date}
        </h4>

        <p className="text-[20px] font-medium text-[#112211]/75">{duration}</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
        <div className="flex gap-6 items-center px-8 py-4 border border-[#3AA9DC] rounded-lg w-full lg:w-auto">
          <div className="w-16 h-11.25 relative">
            <Image src={airlineLogo} alt="" fill className="object-contain" />
          </div>
          <div>
            <h3 className="mb-2 text-[24px] font-semibold">{airline}</h3>
            <p className="text-[14px] text-[#112211]/60">{aircraft}</p>
          </div>
        </div>
        <div className="px-6 py-4 flex items-center gap-6">
          {features.map((feature, index) => (
            <div key={feature} className="flex h-12 items-center gap-6">
              {featureIcons[feature]}
              {index !== features.length - 1 && (
                <Divider orientation="vertical" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`flex items-center ${!showPriceHeader ? "justify-center" : "justify-between"}`}
      >
        <div className="flex flex-col xl:flex-row items-center gap-4">
          <h4 className="text-[24px] font-semibold">{departureTime}</h4>
          <p className="text-[16px] text-[#112211]/60 font-medium line-clamp-1">
            {departureAirport}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative w-9 border border-[#000000]">
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black" />
          </div>
          <FaPlane size={48} />
          <div className="relative w-9 border border-[#000000]">
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black" />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-4">
          <h4 className="text-[24px] font-semibold text-end">{arrivalTime}</h4>
          <p className="text-[16px] text-[#112211]/60 font-medium line-clamp-1">
            {arrivalAirport}
          </p>
        </div>
      </div>
    </div>
  );
}
