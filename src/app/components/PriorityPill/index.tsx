import { Priority } from "@/app/hooks/types";

interface PriorityPillInterface {
  type: Priority;
}

export default function PriorityPill({ type }: PriorityPillInterface) {
  switch (type) {
    case "high":
      return (
        <div className="text-xs rounded-full border-2 border-[#FF6961] px-2 no-underline bg-white text-[#FF6961]">
          High
        </div>
      );
    case "moderate":
      return (
        <div className="text-xs rounded-full border-2 border-[#FFA500] px-2 no-underline bg-white text-[#FFA500]">
          Moderate
        </div>
      );
    case "low":
      return (
        <div className="text-xs rounded-full border-2 border-[#008000] px-2 no-underline bg-white text-[#008000]">
          Low
        </div>
      );
  }
}
