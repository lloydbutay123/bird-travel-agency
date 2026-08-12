import Image from "next/image";
import Button from "../ui/Button";

type FeaturedDestinationCardProps = {
  title: string;
  price: number;
  description: string | undefined;
  gallery?: string[];
};

export default function FeaturedDestinationCard({
  title,
  price,
  description,
  gallery,
}: FeaturedDestinationCardProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row w-full lg:gap-6">
      <div className="flex min-h-80 flex-col justify-between p-4 sm:p-5 lg:min-h-106 lg:flex-[1.05] lg:p-6  bg-[#3AA9DC] rounded-[20px]">
        <div className="w-full">
          <div className="flex justify-between items-start mb-5 gap-4">
            <h1 className="font-tradegothic max-w-[70%] font-bold text-[24px] sm:text-[30px] lg:text-[40px] lg:max-w-90 leading-tight">
              {title}
            </h1>
            <div className="shrink-0 rounded-lg bg-white px-3 py-2 text-center">
              <p className="text-xs sm:text-sm">From</p>
              <p className="text-lg font-semibold sm:text-xl">${price}</p>
            </div>
          </div>
          <p className="text-[14px]">{description}</p>
        </div>
        <Button variant="secondary">Book Flight</Button>
      </div>

      <div className="flex-1">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
          {gallery?.map((img, i) => (
            <div
              key={i}
              className="h-37.5 sm:h-40 lg:h-49 relative rounded-xl overflow-hidden"
            >
              <Image src={img} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
