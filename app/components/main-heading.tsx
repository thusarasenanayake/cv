export default function MainHeading({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <h4 className="mt-12 py-3 text-2xl font-poppins uppercase text-rose-400">
            {children}
        </h4>
    )
}