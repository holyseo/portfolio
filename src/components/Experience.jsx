export function Experience() {
  return (
    <div
      id="experience"
      className="flex flex-col place-items-center text-white text-2xl"
    >
      <div>
        <span className=" bg-gradient-to-b from-blue-600 from-30% via-90% to-blue-400 bg-clip-text text-transparent uppercase font-extrabold text-3xl">
          Experience
        </span>
      </div>

      <div className=" text-lg text-slate-300 max-w-6xl items-start mt-12 px-16 ">
        <div className=" flex flex-col gap-3 mb-16">
          <div className="flex flex-row justify-between items-start w-3xl gap-40 border-b-2 border-white py-2">
            <div className="flex flex-row justify-start gap-10 ">
              <div className="text-red-600 font-extrabold text-lg">
                Northcoders
              </div>
              <div className="font-bold ">
                Junior Full-Stack Software Developer
              </div>
            </div>
            <div className="w-fit text-sm">October 2023 to Current</div>
          </div>
          <div className=" font-light tracking-wide">
            Gained hands-on experience in full-stack software development with
            JavaScript
            <ul>
              <li className="py-3 font-semibold underline">Frontend</li>
              <li className=" indent-5 list-disc list-inside ">
                Implemented user interfaces using ReactJS and CSS
              </li>
              <li className=" indent-(-10) pl-5 list-disc list-inside">
                Used industry methodologies such as test-driven development &
                agile project management
              </li>
              <li className=" indent-(-10) pl-5 list-disc list-inside">
                Developed technical skills in remote development and pair
                programming
              </li>
            </ul>
            <ul>
              <li className="py-3 font-semibold underline">Backend</li>
              <li className=" indent-(-10) pl-5 list-disc list-inside">
                Created REST APIs using Express and PSQL with MVC model
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-3 mb-16">
          <div className="flex flex-row justify-between items-start gap-40 border-b-2 border-white py-2">
            <div className="flex flex-row justify-start gap-10 ">
              <div className="text-amber-500 font-extrabold text-lg">
                Relational Peacebuilding Inititives
              </div>
              <div className="font-bold ">Korea Program Manager</div>
            </div>
            <div className="w-fit text-sm">June 2020 to October 2023</div>
          </div>
          <div className=" font-light tracking-wide">
            <ul>
              <li className=" indent-(-10) pl-5 list-disc list-inside">
                Facilitated the CEO in scheduling and preparing for
                international travel to meet with senior government officials in
                various countries, including Korea, the United States,
                Switzerland, Mongolia, and more.
              </li>
              <li className=" indent-(-10) pl-5 list-disc list-inside">
                Managed and supervised all IT-related matters, including website
                development, maintenance and cybersecurity
              </li>
              <li className=" indent-(-10) pl-5 list-disc list-inside">
                Liaised with networks among Koreans in the UK to increase
                financial support for the organisation
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-3 mb-16">
          <div className="flex flex-row justify-between items-start w-3xl gap-40 border-b-2 border-white py-2">
            <div className="flex flex-row justify-start gap-10 ">
              <div className=" text-sky-600 font-extrabold text-lg">
                Career break
              </div>
              <div className="font-bold ">
                Relocated to the UK wiht family from New Zealand
                <span className="text-3xl self-end ">🇳🇿</span>
              </div>
            </div>
            <div className="w-fit text-sm">January 2016 to December 2018</div>
          </div>
          <div className=" font-light tracking-wide">
            <ul>
              <li className=" indent-(-10) pl-5  list-disc list-inside ">
                Advised customers on the recommended dosage, warnings, storage,
                and possible side effects of all dispensed medication
              </li>
              <li className=" indent-(-10) pl-5 list-disc list-inside">
                Assisted customers with the purchase of Over-The-Counter (OTC)
                medications
              </li>
              <li className=" indent-(-10) pl-5 list-disc list-inside">
                Placed orders to replenish stock of equipment, medication,
                supplies, etc
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-3 my-5">
          <div className="flex flex-row justify-between items-start gap-40 border-b-2 border-white py-2">
            <div className="flex flex-row justify-start w-3xl gap-10 ">
              <div className="text-green-700 font-extrabold text-lg">
                Community Pharmacy
              </div>
              <div className="font-bold ">Pharmacist</div>
            </div>
            <div className="w-fit text-sm">January 2016 to December 2018</div>
          </div>
          <div className=" font-light tracking-wide">
            <ul>
              <li className=" indent-(-10) pl-5  list-disc list-inside ">
                Advised customers on the recommended dosage, warnings, storage,
                and possible side effects of all dispensed medication
              </li>
              <li className=" indent-(-10) pl-5 list-disc list-inside">
                Assisted customers with the purchase of Over-The-Counter (OTC)
                medications
              </li>
              <li className=" indent-(-10) pl-5 list-disc list-inside">
                Placed orders to replenish stock of equipment, medication,
                supplies, etc
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
