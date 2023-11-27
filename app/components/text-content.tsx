export default function TextContent({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <h4 className="py-3 text-2xl font-poppins uppercase text-rose-400">
            {children}
        </h4>
    )
}