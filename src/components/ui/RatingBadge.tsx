type RatingProps = {
  rating: number | string;
};

export default function RatingBadge({ rating }: RatingProps) {
  return (
    <div className="flex items-center justify-center h-8 w-10 text-[12px] border border-[#3AA9DC] rounded-sm">
      {rating}
    </div>
  );
}
