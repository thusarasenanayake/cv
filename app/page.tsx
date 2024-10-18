import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import ThemeSwitch from "./components/ThemeSwitch";
import { BiCode } from "react-icons/bi";

const techStack = [
  "Laravel",
  "React",
  "Next.js",
  "NestJS",
  "Tailwind CSS",
  "SCSS",
  "WordPress",
  "Express.js",
  "Java",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Bash",
  "GIT",
];

export default function Home() {
  return (
    <div className="md:w-[950px] mx-auto grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 sm:px-20">
      <main className="flex flex-col row-start-2 ">
        <div className="flex justify-between items-center w-full mb-4 sm:mb-1">
          <h1 className="font-heading dark:text-slate-300 text-[2.2em] uppercase leading-[2.2rem]">
            Thusara Senanayake
          </h1>
          <div className="flex gap-2 items-center print:hidden">
            <ThemeSwitch />
            <a
              className="hover:text-blue-500"
              target="_blank"
              href="https://github.com/thusarasenanayake/cv"
            >
              <BiCode />
            </a>
          </div>
        </div>

        <p className="">Full-stack Developer . Software Engineer</p>
        <p className="leading-none mt-2">
          Software developer experienced in both front-end and back-end
          technologies,
          <br />
          dedicated to creating practical solutions that meet user needs.
        </p>
        <section className="flex flex-wrap gap-x-6 gap-y-1 mt-4">
          <a
            className="flex items-center gap-1"
            href="mailto:thusarasenanayake2@gmail.com"
            target="_blank"
          >
            <FaEnvelope /> thusarasenanayake2@gmail.com
          </a>

          <a
            className="flex items-center gap-1"
            href="https://github.com/thusarasenanayake"
            target="_blank"
          >
            <FaGithub /> thusarasenanayake
          </a>

          <a
            className="flex items-center gap-1"
            href="https://thusarasenanayake.github.io"
            target="_blank"
          >
            <FaGlobe /> thusarasenanayake.github.io
          </a>

          <a
            className="flex items-center gap-1"
            href="https://www.linkedin.com/in/thusara-senanayake"
            target="_blank"
          >
            <FaLinkedin /> thusara-senanayake
          </a>
        </section>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-5 md:gap-y-10 mt-5 md:mt-8">
          <section className="">
            <h2 className="font-heading dark:text-slate-300 text-neutral-700 text-[1.5em] my-2 uppercase">
              Education
            </h2>
            <ul className="list-disc space-y-3">
              <li>
                <h3 className="">
                  Bachelor of Information Technology (External)
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  2022, University of Colombo, Sri Lanka
                </p>
              </li>
              <li>
                <h3 className="">LNBTI Foundation Programme</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  2018, Lanka Nippon BizTech Institute, Maharagama, Sri Lanka
                </p>
              </li>
              <li>
                <h3 className="">
                  General Certificate of Education - Advanced Level
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  2017, Sri Sumangala College, Panadura, Sri Lanka
                </p>
              </li>
              <li>
                <h3 className="">
                  General Certificate of Education - Ordinary Level
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  2014, Elakaka National School, Elakaka, Sri Lanka
                </p>
              </li>
            </ul>
          </section>

          <section className="">
            <h2 className="font-heading dark:text-slate-300 text-neutral-700 text-[1.5em] my-2 uppercase">
              Technology Exposure
            </h2>
            <ul className="grid md:grid-cols-2  list-disc">
              {techStack.map((tech) => (
                <li key={tech}>
                  <h3 className="">{tech}</h3>
                </li>
              ))}
            </ul>
          </section>
          <section className="">
            <h2 className="font-heading dark:text-slate-300 text-neutral-700 text-[1.5em] my-2 uppercase">
              Work experience
            </h2>
            <ul className="list-disc space-y-3">
              <li>
                <h3 className="">eBlix Technologies - Software Engineer</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  2022 - Present, Malabe, Sri Lanka
                </p>
              </li>

              <li>
                <h3 className="">Freelancing - Graphic Designer</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  2019 - 2022, Fiverr
                </p>
              </li>
            </ul>
          </section>
          <section className="">
            <h2 className="font-heading dark:text-slate-300 text-neutral-700 text-[1.5em] my-2 uppercase">
              Languages
            </h2>
            <ul className="list-disc">
              <li>
                <h3 className="">Sinhala - Fluent</h3>
              </li>
              <li>
                <h3 className="">English - Conversational</h3>
              </li>
              <li>
                <h3 className="">Japanese - JLPT N3</h3>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
