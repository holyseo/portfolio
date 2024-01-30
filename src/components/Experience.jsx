export function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col bg-red place-items-center text-white"
    >
      <div className=" mb-16 bg-gradient-to-b from-blue-600 from-30% via-90% to-blue-400 bg-clip-text text-transparent uppercase font-extrabold text-2xl md:text-3xl xl:text-5xl">
        Experience
      </div>

      <div className=" flex flex-col gap-3 max-w-6xl px-2 text-sm md:text-base xl:text-lg">
        <div className="flex flex-row flex-wrap justify-between items-start border-b-2 border-white border-opacity-50 p-2">
          <div className="flex flex-row place-items-start gap-2 md:gap-5 xl:gap-10">
            <div className="text-red-600 min-w-44 font-bold text-sm md:text-base xl:text-xl">
              Northcoders
            </div>
            <div className="font-bold min-w-32">
              Junior Full-Stack Software Developer
            </div>
          </div>
          <div className="w-fit text-sm">October 2023 to Current</div>
        </div>
        <div className=" font-light tracking-wide min-w-fit">
          Gained hands-on experience in full-stack software development with
          JavaScript
          <ul className=" indent-(-10) pl-10">
            <li className="py-3 font-semibold underline">Frontend</li>
            <li className=" list-disc list-outside ">
              Implemented user interfaces using ReactJS and CSS
            </li>
            <li className="list-disc list-outside">
              Used industry methodologies such as test-driven development &
              agile project management
            </li>
            <li className="list-disc list-outside">
              Developed technical skills in remote development and pair
              programming
            </li>
          </ul>
          <ul className=" indent-(-10) pl-10">
            <li className="py-3 font-semibold underline">Backend</li>
            <li className="list-disc list-outside">
              Created REST APIs using Express and PSQL with MVC model
            </li>
          </ul>
        </div>
        <div className=" flex flex-col gap-3 mb-6">
          <div className="flex flex-row justify-between items-start gap-4 border-b-2 border-white border-opacity-50 py-2 my-5">
            <div className="flex flex-row place-items-start gap-2 md:gap-5 xl:gap-10 ">
              <div className="text-amber-500 min-w-44 font-bold text-sm md:text-base xl:text-xl">
                Relational Peacebuilding Inititives
              </div>
              <div className="font-bold min-w-32 ">Korea Program Manager</div>
            </div>
            <div className="w-fit text-sm">June 2020 to October 2023</div>
          </div>
          <div className=" font-light tracking-wide">
            <ul className=" indent-(-10) pl-10">
              <li className=" list-disc list-outside">
                Facilitated the CEO in scheduling and preparing for
                international travel to meet with senior government officials in
                various countries, including Korea, the United States,
                Switzerland, Mongolia, and more.
              </li>
              <li className=" list-disc list-outside">
                Managed and supervised all IT-related matters, including website
                development, maintenance and cybersecurity
              </li>
              <li className=" list-disc list-outside">
                Liaised with networks among Koreans in the UK to increase
                financial support for the organisation
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-3 mb-6">
          <div className="flex flex-row justify-between items-start  border-b-2 border-white border-opacity-50 py-2">
            <div className="flex flex-row place-items-center gap-2 md:gap-5 xl:gap-10 ">
              <div className=" text-sky-600 min-w-44 font-bold text-sm md:text-base xl:text-xl">
                Career break
              </div>
              <div className="font-bold min-w-32 ">
                Relocated to the UK with family from New Zealand
                <span className="brightness-150 self-end ">🇳🇿</span>
              </div>
            </div>
            <div className="w-fit text-sm"> </div>
          </div>
          <div className=" font-light tracking-wide">
            <ul className=" indent-(-10) pl-10">
              <li className=" list-disc list-outside ">
                Relocated to Cambridge from New Zealand to support my wife's job
                at the University
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-3 my-5">
          <div className="flex flex-row justify-between items-start border-b-2 border-white border-opacity-50 py-2">
            <div className="flex flex-row place-items-start gap-2 md:gap-5 xl:gap-10  ">
              <div className="text-green-700 min-w-44 font-bold text-sm md:text-base xl:text-xl">
                Community Pharmacy
              </div>
              <div className="font-bold min-w-32 ">Pharmacist</div>
            </div>
            <div className="w-fit text-sm">January 2016 to December 2018</div>
          </div>
          <div className=" font-light tracking-wide">
            <ul className=" indent-(-10) pl-10">
              <li className=" list-disc list-outside ">
                Advised customers on the recommended dosage, warnings, storage,
                and possible side effects of all dispensed medication
              </li>
              <li className="list-disc list-outside">
                Assisted customers with the purchase of Over-The-Counter (OTC)
                medications
              </li>
              <li className="list-disc list-outside">
                Placed orders to replenish stock of equipment, medication,
                supplies, etc
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-3 my-5">
          <div className="flex flex-row justify-between items-start border-b-2 border-white border-opacity-50 py-2">
            <div className="flex flex-row place-items-start gap-2 md:gap-5 xl:gap-10  ">
              <div className=" text-yellow-300 min-w-44 font-bold text-sm md:text-base xl:text-xl">
                Advanced Marketing Development Australia and New Zealand
              </div>
              <div className="font-bold min-w-32 ">
                Web Developer (Frontend)
              </div>
            </div>
            <div className="w-fit text-sm">January 2013 to September 2015</div>
          </div>
          <div className=" font-light tracking-wide">
            <ul className=" indent-(-10) pl-10">
              <li className=" list-disc list-outside ">
                Enhanced frontend development for clients across various
                sectors, including pharmacies and not-for-profits
              </li>
              <li className="list-disc list-outside">
                Provided valuable insights for design and functionality
                improvements, ensuring optimal user experience
              </li>
              <li className="list-disc list-outside">
                Delivered ongoing aftercare support, assisting clients in
                assessing and optimising their website performance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
