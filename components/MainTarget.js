import  Link  from 'next/link';

export default function MainTarget({maintarget}){
    return(
        <div>
            <span>{maintarget.id}</span>
            {" : "}
            <Link href={`/maintargets/${maintarget.id}`}>
                <a>{maintarget.maintarget}</a>
            </Link>
        </div>
    )
}