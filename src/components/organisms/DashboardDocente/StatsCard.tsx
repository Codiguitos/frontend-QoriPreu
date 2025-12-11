import Text from '../../atoms/Text'

type StatsCardProps = {
    icon: React.ReactNode,
    label: string,
    value: string | number,
    color: string
}

const StatsCard = ({ icon, label, value, color }: StatsCardProps) => {
    return (
        <article className='bg-[#0d1512] rounded-xl p-6 border border-gray-800 hover:border-[#006B4B] hover:shadow-lg transition-all'>
            <div className='flex items-center justify-between'>
                <div>
                    <Text size='small' className='text-gray-400 mb-2'>{label}</Text>
                    <Text size='h4' className='text-white'>{value}</Text>
                </div>
                <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center text-white`}>
                    {icon}
                </div>
            </div>
        </article>
    )
}

export default StatsCard
