export default function Footer() {
    return (
        <>
            <div className="py-7 print:hidden"></div>

            <footer className="justify-center items-end">
                <div className="hidden print:block mt-12 p-3 text-sm font-light text-center">
                    online version is available at <a target="_blank" className="decoration-dashed text-blue-500 hover:text-blue-600" href="https://google.com">here
                    </a>
                </div>
                <div className="print:hidden mt-12 p-3 text-sm font-light text-center">
                    source code is available at <a target="_blank" className="decoration-dashed text-blue-500 hover:text-blue-600" href="https://google.com">here
                    </a>
                </div>
                
            </footer>

        </>
    )
}