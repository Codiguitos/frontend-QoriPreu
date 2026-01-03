import React from 'react'
import LinkClassCard from '../../molecules/dashboard/LinkClassCard'
import Text from '../../atoms/Text'
const NextClassSection = () => {
    const clases = [
        {
            name: 'Matematica I',
            fecha: '25 Nov 2024',
            hora: '4:00 PM',
            link: 'https://example.com/classlink1'
        },
        {
            name: 'Fisica II',
            fecha: '26 Nov 2024',
            hora: '10:00 AM',
            link: 'https://example.com/classlink2'
        },
        {
            name: 'Quimica Orgánica',
            fecha: '27 Nov 2024',
            hora: '2:00 PM',
            link: 'https://example.com/classlink3'
        }
    ]
    return (
    <section className='bg-[#0d1512] rounded-xl p-5 border border-gray-800'>
        <Text size='h5' className='text-white mb-3'>Proximas Clases</Text>
        <div className='grid gap-5'>
            {clases.map((clase, index) => (
                <LinkClassCard
                    key={index}
                    name={clase.name}
                    fecha={clase.fecha}
                    hora={clase.hora}
                    link={clase.link}
                />
            ))}
        </div>
    </section>
  )
}

export default NextClassSection