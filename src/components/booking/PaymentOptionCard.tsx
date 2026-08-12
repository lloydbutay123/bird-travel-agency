type PaymentOptionCardProps = {
  title: string;
  description: string;
  value: string;
  selected?: boolean;
  moreInfo?: boolean;
  onSelect?: (value: string) => void;
};

export default function PaymentOptionCard({
  title,
  description,
  value,
  selected,
  moreInfo,
  onSelect,
}: PaymentOptionCardProps) {
  return (
    <div
      onClick={() => onSelect?.(value)}
      className={`flex items-center justify-between rounded-xl p-4 ${selected && "bg-[#3AA9DC]"}`}
    >
      <div className="flex flex-col gap-2 ">
        <h4 className="font-tradegothic text-[16px] font-bold">{title}</h4>
        <p className="text-[14px]">{description}</p>
        {moreInfo && (
          <button className="self-start underline text-[12px]">
            More info
          </button>
        )}
      </div>
      <div className="flex justify-center items-center h-12 w-12">
        <input
          type="radio"
          name=""
          id=""
          checked={selected}
          onChange={() => {}}
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}
