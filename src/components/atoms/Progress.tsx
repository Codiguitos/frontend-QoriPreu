const variantColors = {
  primary: {
    bg: 'bg-gray-700',
    fill: 'bg-gradient',
    text: 'text-[#00A676]'
  },
  secondary: {
    bg: 'bg-gray-700',
    fill: 'bg-blue-500',
    text: 'text-blue-500'
  },
  success: {
    bg: 'bg-gray-700',
    fill: 'bg-green-500',
    text: 'text-green-500'
  },
  warning: {
    bg: 'bg-gray-700',
    fill: 'bg-yellow-500',
    text: 'text-yellow-500'
  },
  error: {
    bg: 'bg-gray-700',
    fill: 'bg-red-500',
    text: 'text-red-500'
  }
} as const;

const sizes = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
  xl: 'h-4'
} as const;

type ProgressVariant = keyof typeof variantColors;
type ProgressSize = keyof typeof sizes;

interface ProgressProps {
  value: number;
  max?: number;
  variant?: ProgressVariant;
  size?: ProgressSize;
  showLabel?: boolean;
  label?: string;
  className?: string;
}

const Progress = ({
  value,
  max = 100,
  variant = 'primary',
  size = 'md',
  showLabel = true,
  label,
  className = ''
}: ProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const colors = variantColors[variant];

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm text-gray-400">{label}</span>}
          <span className={`text-sm font-semibold ${colors.text}`}>
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      
      <div className={`w-full ${colors.bg} rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className={`${colors.fill} ${sizes[size]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
export default Progress;