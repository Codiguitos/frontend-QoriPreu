import Text from '../../atoms/Text'
import PlanItem from '../../atoms/PlanItem'
import Button from '../../atoms/Button'
type PlanCardProps={
    title:string,
    text:string,
    list:string[],
    popular?:boolean
}
const PlanCard = ({title,text,list,popular=false}:PlanCardProps) => {
  return (
    <article className={`bg-[linear-gradient(135deg,rgba(0,107,75,0.05),rgba(0,166,118,0.02))] hover:-translate-y-[10px]
                        hover:shadow-[0_20px_60px_rgba(0,107,75,0.3)] w-full max-w-[400px]
                        flex flex-col gap-5 relative
                        border-2 ${popular?"border-[#00A676]":"border-[rgba(0,107,75,0.3)] "}  rounded-[24px] p-12 relative overflow-hidden transition-all duration-400`}>
        {popular && <span className='bg-[linear-gradient(135deg,#FFB800,#FF9500)] py-1 absolute top-4 right-4 text-[13px] rounded-full w-max px-2 font-medium text-black'>Mas popular</span>}
        <Text size='h4' className='text-[#00A676] font-bold'>{title}</Text>
        <Text size='p'>{text}</Text>
        <div className='flex flex-col gap-2'>

            {
                list.map(e=>(
                    <PlanItem key={e}text={e}></PlanItem>
                ))
            }
        </div>
        <Button variant='primary'>Matricularme Ahora</Button>
    </article>
  )
}

export default PlanCard