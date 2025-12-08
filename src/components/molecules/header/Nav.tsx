import LinkNav from '../../atoms/LinkNav'

type NavProps={
    listName:string[],
    classname?:string
}
const Nav = ({listName,classname}:NavProps) => {
    return (
        <nav className={`md:flex md:gap-10 ${classname}`}>
            {listName.map((e,index)=>(
                <LinkNav key={`${e}${index}`} texto={e}/>
            ))}
        </nav>
    )
}

export default Nav