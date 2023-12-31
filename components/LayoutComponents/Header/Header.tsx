import Logo from '@/public/logos/logo.svg'
import Container  from '@/components/Container/Container'
import Link from 'next/link'
import Image from 'next/image'




export function Header(){
    const navLinks =
[
    {link:'/', nome:'Home'},
    {link:'/servicos', nome:'Servicos'},
    {link:'/produtos', nome:'Produtos'},
    {link:'/contato', nome:'Contato'},

]
    return(
        <header className='fixed top-0 z-10 flex items-center w-screen h-28 bg-blue-700 font-sans'>
            <Container>
                <div className='flex items-center gap-14 h-full justify-between'>
                    <Link href={'/'}>
                    <Image 
                        src={Logo}
                        alt={'Logo'}
                        className='max-w-[225px]'
                    />
                    </Link>
                    
                    <div className='flex items-center gap-12'>
                        <ul className='flex gap-4 text-white font-bold'>
                            {navLinks.map((link, index)=>(
                                <li key={index}><Link href={link.link}>
                                        {link.nome}
                                    </Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

            </Container>
                    
        </header>
    )
}