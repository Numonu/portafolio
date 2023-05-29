export function Tooltip({children , title , href="#" }){
    return <>
        <a className="relative group" href={href} target="_blank">
            {children}
            <div className="bg-dark font-futura font-normal w-max px-2 py-1 origin-bottom scale-0 absolute left-1/2 -top-2 -translate-x-1/2 -translate-y-full rounded-md group-hover:scale-100 transition-transform">
                {title}
                <div className="bg-dark absolute w-2 aspect-square rotate-45 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></div>
            </div>
        </a>
    </>
}