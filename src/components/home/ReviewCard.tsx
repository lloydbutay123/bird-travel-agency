import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

type ReviewCardProps = {
  title: string;
  review: string;
  author: string;
  company: string;
  source: string;
  image: string;
};

export default function ReviewCard({
  title,
  review,
  author,
  company,
  source,
  image,
}: ReviewCardProps) {
  return (
    <div className="relative h-full">
      {/* offset background */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[20px] bg-[#3AA9DC]/40" />

      {/* card */}
      <div className="card relative h-full rounded-[20px] bg-white p-5 lg:p-6">
        <div className="mb-6">
          <p className="font-tradegothic line-clamp-2 min-h-20 text-[18px] lg:text-[20px] font-bold leading-snug">
            &apos;{title}&apos;
          </p>

          <p className="mt-3 text-[14px] text-[#112211]/60 line-clamp-2">
            {review}
          </p>

          <button className="font-tradegothic mt-3 ml-auto block font-bold text-[16px]">
            View more
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <IoMdStar size={20} color="#FFC107" />
            <IoMdStar size={20} color="#FFC107" />
            <IoMdStar size={20} color="#FFC107" />
            <IoMdStar size={20} color="#FFC107" />
            <IoMdStar size={20} color="#FFC107" />
          </div>

          <p className="font-tradegothic text-[14px] font-bold">{author}</p>
          <p className="text-[12px] text-[#112211]/50">{company}</p>

          <div className="mt-3 flex items-center gap-2">
            <FaGoogle size={18} />
            <p className="font-tradegothic text-[12px] font-bold text-[#112211]/40">
              {source}
            </p>
          </div>
        </div>

        {/* image */}
        <div className="relative w-full h-45 lg:h-50 rounded-lg overflow-hidden">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
