import { FaCheck } from "react-icons/fa";
import Text from './Text';

interface PlanItemProps {
  text: string;
}

const PlanItem = ({ text }: PlanItemProps) => {
  return (
    <div className="flex items-center gap-2 border-b border-b-[rgba(255,255,255,0.1)]">
      <FaCheck className="text-[#00A676]" />
      <Text size="p">{text}</Text>
    </div>
  );
};

export default PlanItem;