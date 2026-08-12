import * as Slider from "@radix-ui/react-slider";

type SliderComponentProps = {
  value: number[];
  min: number;
  max: number;
  step: number;
  onValueChange: (value: number[]) => void;
  formatLabel?: (value: number) => string;
};

export default function SliderCoponent({
  value,
  min,
  max,
  step = 1,
  onValueChange,
  formatLabel,
}: SliderComponentProps) {
  return (
    <div>
      <div className="h-4 " />
      <Slider.Root
        className="relative flex w-full touch-none select-none items-center mb-4"
        value={value}
        min={min}
        max={max}
        step={step}
        onValueChange={onValueChange}
      >
        <Slider.Track className="relative h-0.5 w-full grow rounded-full bg-gray-200">
          <Slider.Range className="absolute h-full rounded-full bg-[#112211]" />
        </Slider.Track>
        <Slider.Thumb className="block h-6 w-6 rounded-full bg-[#3AA9DC]" />
        <Slider.Thumb className="block h-6 w-6 rounded-full bg-[#3AA9DC]" />
      </Slider.Root>

      <div className="flex justify-between">
        <p className="text-[12px] font-medium ">
          {formatLabel ? formatLabel(value[0]) : value[0]}
        </p>
        <p className="text-[12px] font-medium">
          {formatLabel ? formatLabel(value[1]) : value[1]}
        </p>
      </div>
    </div>
  );
}
