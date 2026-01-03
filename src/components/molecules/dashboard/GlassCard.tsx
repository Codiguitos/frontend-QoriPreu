import { icons } from "lucide-react"
import Glass from "../../atoms/Glass"
import Text from "../../atoms/Text"
type GlassCardProps = {
  icon?: React.ReactNode,
  title: string,
  number: string
}
const GlassCard = ({icon, title, number}: GlassCardProps) => {
  return (
    <Glass className="">
      <div className="flex gap-2 items-center">
        {icon}
        <Text size="small">{title}</Text>
      </div>
      <Text size="h4" className="text-white">{number}</Text>
    </Glass>
  )
}

export default GlassCard