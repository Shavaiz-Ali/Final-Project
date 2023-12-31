

export const Wrapper = ({children, className}) => {
    return(
        <div className={`relative max-w-[1280px] mx-auto px-5 ${className}`}>
            {children}
        </div>
    )
}
