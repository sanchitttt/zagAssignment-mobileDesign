interface HeadingProps {
    children: React.ReactNode,
    color?: string,
    fontSize?: string,
    bold?: boolean
}

interface SubHeadingProps {
    children: React.ReactNode,
    color?: string,
    fontSize?: string,
    bold?: boolean
}

export function Heading({ children, color = 'black', fontSize = '25px', bold = true }: HeadingProps) {
    return <h1 className={`font-main text-[${fontSize}] text-${color} ${bold && 'font-bold'}`}>
        {children}
    </h1>
}

export function SubHeading({ children, color = '#666', fontSize = '20px', bold = true }: SubHeadingProps) {
    return <h1 className={`font-main text-[${fontSize}] text-[${color}] ${bold && 'font-semibold'}`}>
        {children}
    </h1>
}