
const sizeMap = {
  h1: "text-4xl md:text-7xl bg-gradient-to-br from-[#ffffff] to-[#00A676] bg-clip-text text-transparent font-bold",
  h2: "text-3xl md:text-5xl font-bold",
  h3: "text-2xl md:text-4xl font-bold",
  h4: "text-xl md:text-3xl font-bold",
  h5: "text-lg md:text-2xl font-semibold",
  h6: "text-base md:text-xl font-semibold",
  p: "text-base md:text-[16px] text-[#b8c4c0]",
  small: "text-sm md:text-sm text-[#b8c4c0]",
  normal: ""
}
type TextProps={
    children:React.ReactNode | unknown,
    size:"h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"small"|"p"|"normal",
    className?:string,
    variant?:"title" | "body" | "normal"|"subtitle"
}

const Text = ({children,className,size="p"}:TextProps) => {
  const Tag: any = size === "normal" ? "span" : size;   
  return (
    <Tag className={` ${sizeMap[size]} ${className}  `}>{children}</Tag>
  )
}

export default Text