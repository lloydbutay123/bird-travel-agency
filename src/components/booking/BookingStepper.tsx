import { BookingStep } from "@/features/booking/types";

type BookingStepperProps = {
  steps: BookingStep<string>[];
  currentStepIndex: number;
};

export default function BookingStepper({
  steps,
  currentStepIndex,
}: BookingStepperProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-4">
      {steps.map((step, index) => {
        const isActive = index === currentStepIndex;
        const isDone = index < currentStepIndex;

        return (
          <div key={step.id} className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                  isActive || isDone
                    ? "bg-[#3AA9DC]"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`hidden md:block text-sm font-medium ${
                  !isActive && "text-[#112211]/60"
                }`}
              >
                {step.label}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div className="h-[1px] flex-1 bg-gray-300" />
            )}
          </div>
        );
      })}
    </div>
  );
}
