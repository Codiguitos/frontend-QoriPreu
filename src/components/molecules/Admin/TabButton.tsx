
const TabButton = ({ active, onClick, icon, label, count, color }: any) => {
    // Map de colores para el estado activo
    const colorClasses: any = {
        yellow: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/50',
        green: 'bg-green-500/10 text-green-500 border-green-500/50',
        gray: 'bg-gray-700 text-gray-200 border-gray-500'
    };

    return (
        <button
            onClick={onClick}
            className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border
                ${active 
                    ? `${colorClasses[color]} shadow-lg` 
                    : 'bg-transparent text-gray-400 border-transparent hover:bg-white/5 hover:text-gray-200'
                }
            `}
        >
            {icon}
            {label}
            {count !== undefined && (
                <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${active ? 'bg-black/20' : 'bg-gray-800'}`}>
                    {count}
                </span>
            )}
        </button>
    );
};
export default TabButton;