import { BsStars } from "react-icons/bs";

type OverviewFeaturedCardProps = {
  title: string;
};

export default function OverviewFeaturedCard({
  title,
}: OverviewFeaturedCardProps) {
  return (
    <div className="rounded-xl border border-[#3AA9DC] w-41.5 h-36.25 py-4 pl-4 pr-16 flex flex-col justify-between">
      <BsStars size={32} />
      <p className="text-[14px] font-medium">{title}</p>
    </div>
  );
}
