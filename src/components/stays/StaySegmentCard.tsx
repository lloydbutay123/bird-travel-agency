"use client";

import { rooms } from "@/data/freebies";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaHotel } from "react-icons/fa";

type StaySegmentCardProps = {
  roomName: string;
  propertyLogo: string;
  propertyName: string;
  propertyAddress: string;
  checkInDate: string;
  checkOutDate: string;
  pricePerNight: number;
};

export default function StaySegmentCard({
  roomName,
  propertyLogo,
  propertyName,
  propertyAddress,
  checkInDate,
  checkOutDate,
  pricePerNight,
}: StaySegmentCardProps) {
  const pathname = usePathname();

  const isBooking = pathname.includes("/booking");

  return (
    <div className="card bg-white rounded-xl px-6 py-8">
      {isBooking && (
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[24px] font-bold font-tradegothic w-full max-w-122.75">
            {roomName}
          </h3>
          <h4 className="text-[32px] text-[#FF8682] font-bold">
            ${pricePerNight}
            <span className="text-[14px]">/night</span>
          </h4>
        </div>
      )}

      <div className="flex gap-6 items-center px-8 mb-10 py-4 border border-[#3AA9DC] rounded-lg">
        <div className="w-16 h-11.25 relative">
          <Image
            src={propertyLogo}
            alt={propertyName}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="mb-2 text-[24px] font-semibold">{propertyName}</h3>
          <p className="text-[14px] text-[#112211]/60">{propertyAddress}</p>
        </div>
      </div>

      <div
        className={`flex items-center ${!isBooking ? "justify-center gap-20" : "justify-between"}`}
      >
        <div className="flex flex-col gap-2">
          <h4 className="text-[20px] font-semibold">{checkInDate}</h4>
          <p className="text-[14px] text-[#112211]/60 font-medium">Check-In</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative w-9 border border-[#000000]">
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black" />
          </div>
          <FaHotel size={48} />
          <div className="relative w-9 border border-[#000000]">
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-[20px] font-semibold">{checkOutDate}</h4>
          <p className="text-[14px] text-[#112211]/60 font-medium">Check-Out</p>
        </div>
      </div>
    </div>
  );
}
