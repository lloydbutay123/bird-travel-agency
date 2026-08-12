"use client";

import ConfirmationHeader from "@/components/listings/ConfirmationHeader";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { FaClock, FaDoorClosed, FaHotel } from "react-icons/fa";

export default function BookingConfirmationStep() {
  return (
    <Container className="mt-12 pb-30">
      <Breadcrumb
        items={[
          { label: "Turkey" },
          { label: "Istanbul" },
          { label: "CVK Park Bosphorus Hotel Istanbul" },
        ]}
      />
      <ConfirmationHeader />
      <div className="flex justify-between mb-16 mt-10">
        <div className="flex flex-col justify-between gap-4 h-77.25 w-77.25 rounded-l-2xl bg-[#EBF6F2] p-6 border border-[#EAEAEA]">
          <div className="flex flex-col gap-1">
            <h3 className="text-[32px] font-semibold">Thur, Dec 8</h3>
            <p className="text-[12px] text-[#112211]/60">Check-In</p>
          </div>
          <div>
            <FaHotel size={24} className="text-[#112211]/20" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[32px] font-semibold">Thur, Dec 8</h3>
            <p className="text-[12px] text-[#112211]/60">Check-Out</p>
          </div>
        </div>
        <div className="relative bg-white flex-1 overflow-hidden border border-[#EAEAEA] rounded-r-2xl">
          <div className="p-6 bg-[#3AA9DC] flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12  rounded-full border border-white overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="font-tradegothic text-[20px] font-bold ">
                James Doe
              </h2>
            </div>
            <p className="font-tradegothic text-[14px] font-bold w-57">
              Superior room - 1 double bed or 2 twin beds
            </p>
          </div>
          <div className="flex items-center gap-8 p-6">
            <div className="flex items-center gap-2">
              <div className="rounded-sm h-8 w-8 flex items-center justify-center bg-[#EBF6F2]">
                <FaClock size={22} color="#3AA9DC" />
              </div>
              <div>
                <h5 className="text-[12px] font-semibold text-[#112211]/60">
                  Check-In time
                </h5>
                <p className="text-[16px] font-medium">12:00pm</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-sm h-8 w-8 flex items-center justify-center bg-[#EBF6F2]">
                <FaClock size={22} color="#3AA9DC" />
              </div>
              <div>
                <h5 className="text-[12px] font-semibold text-[#112211]/60">
                  Check-Out time
                </h5>
                <p className="text-[16px] font-medium">11:30pm</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-sm h-8 w-8 flex items-center justify-center bg-[#EBF6F2]">
                <FaDoorClosed size={22} color="#3AA9DC" />
              </div>
              <div>
                <h5 className="text-[12px] font-semibold text-[#112211]/60">
                  Room no.
                </h5>
                <p className="text-[16px] font-medium">On arival</p>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 p-4">
            <div className="relative h-20.25 w-62">
              <Image
                src="/assets/images/9185570.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-[35px] left-[30px]">
            <h2 className="mb-1 text-[32px] font-semibold">EK</h2>
            <h2 className="text-[12px] font-medium text-[#112211]/60">
              ABC12345
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white border border-[#EAEAEA] w-93.75 h-77.25 rounded-2xl">
          <Image
            src="https://logos-world.net/wp-content/uploads/2023/09/Rosewood-Hotels-Logo.png"
            alt=""
            width={161}
            height={161}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8.5">
        <h4 className="text-[24px] font-semibold">Terms and Conditions</h4>
        <div className="flex flex-col gap-4">
          <h5 className="text-[20px] font-medium">Payments</h5>
          <ul className="list-disc flex flex-col gap-4 ">
            <li className="text-[14px]">
              If you are purchasing your ticket using a debit or credit card via
              the Website, we will process these payments via the automated
              secure common payment gateway which will be subject to fraud
              screening purposes.{" "}
            </li>
            <li className="text-[14px]">
              If you do not supply the correct card billing address and/or
              cardholder information, your booking will not be confirmed and the
              overall cost may increase. We reserve the right to cancel your
              booking if payment is declined for any reason or if you have
              supplied incorrect card information. If we become aware of, or is
              notified of, any fraud or illegal activity associated with the
              payment for the booking, the booking will be cancelled and you
              will be liable for all costs and expenses arising from such
              cancellation, without prejudice to any action that may be taken
              against us.
            </li>
            <li className="text-[14px]">
              Golobe may require the card holder to provide additional payment
              verification upon request by either submitting an online form or
              visiting the nearest Golobe office, or at the airport at the time
              of check-in. Golobe reserves the right to deny boarding or to
              collect a guarantee payment (in cash or from another credit card)
              if the card originally used for the purchase cannot be presented
              by the cardholder at check-in or when collecting the tickets, or
              in the case the original payment has been withheld or disputed by
              the card issuing bank. Credit card details are held in a secured
              environment and transferred through an internationally accepted
              system.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-[20px] font-medium">Contact Us</h4>
          <div>
            <p className="text-[14px]">
              If you have any questions about our Website or our Terms of Use,
              please contact:
            </p>
            <p className="text-[14px]">Golobe Group Q.C.S.C</p>
            <p className="text-[14px]">Golobe Tower</p>
            <p className="text-[14px]">P.O. Box: 22550</p>
            <p className="text-[14px]">Doha, State of Qatar</p>
            <p className="text-[14px]">
              Further contact details can be found at golobe.com/help
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
