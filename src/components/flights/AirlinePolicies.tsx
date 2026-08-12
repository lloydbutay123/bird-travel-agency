import { FaClock } from "react-icons/fa";

type AirlinePoliciesProps = {
  policies: string[];
};

export default function AirlinePolicies({ policies }: AirlinePoliciesProps) {
  return (
    <div className="p-4 rounded-lg bg-[#3AA9DC]/60">
      <h3 className="font-tradegothic mb-4 text-[24px] font-bold">
        Emirates Airlines Policies
      </h3>
      <div className="flex items-center gap-4">
        {policies.map((policy, index) => (
          <div key={index} className="flex flex-1 items-center gap-4">
            <FaClock size={24} />
            <p className="text-[#112211]/75 font-[16px]">{policy}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
