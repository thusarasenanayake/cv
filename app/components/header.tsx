import { Globe, Envelope, GithubLogo } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
    return (
        <>
            <h2 className={"text-green-600 text-5xl text-center font-extralight"}>Thusara <span
                className="font-normal text-green-500">Senanayake</span></h2>
            <p className="text-center dark:text-slate-300 text-slate-600 text-sm">software engineer <span className="px-1 font-bold">.</span> web
                developer</p>

            <div className="flex flex-wrap  sm:flex-row  mx-8 justify-center my-5">

                <a href="" className="items-center mt-1 flex border-0 sm:border-x border-slate-300 px-2">
                    <Envelope weight="light" />
                    <span className="font-poppins text-xs px-1">contact@thusara.dev</span>
                </a>

                <a href="" className="items-center mt-1 border-0 flex sm:border-x border-slate-300 px-2">
                    <Globe weight="light" />
                    <span className="font-poppins text-xs px-1">thusara.dev/contact</span>
                </a>

                <a className="items-center mt-1 flex border-0 sm:border-x border-slate-300 px-2" href="#">
                    <GithubLogo weight="light" />
                    <span className="font-poppins text-xs px-1">thusarasenanayake</span>
                </a>

            </div>
        </>
    )
}