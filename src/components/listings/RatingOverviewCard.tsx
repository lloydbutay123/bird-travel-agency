type RatingOverviewCardProps = {
  rating: number;
  label: string;
  reviewCount: number;
};

export default function RatingOverviewCard({
  rating,
  label,
  reviewCount,
}: RatingOverviewCardProps) {
  return (
    <div className="rounded-xl bg-[#3AA9DC] w-41.5 h-36.25 py-4 pl-4 pr-16 flex flex-col justify-between">
      <h2 className="font-tradegothic text-[32px] font-bold mb-4">{rating}</h2>
      <div>
        <h4 className="text-[16px] font-bold">{label}</h4>
        <p className="text-[14px] font-medium">{reviewCount} reviews</p>
      </div>
    </div>
  );
}
