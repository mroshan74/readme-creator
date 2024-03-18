import DropDown from "@/pages/svgImages/DropDown"

export const languageSupports = [
  {
    label: "English",
    route: "/"
  },
  {
    label: "Malayalam",
    route: "/ml"
  }
]

export const LanguageDropDown = () => {
  return (
    <div className="group inline-block relative">
      <button className="text-gray-800 py-2 px-4 rounded inline-flex items-center">
        <span className="mr-1">
          <img className="w-auto h-10 mr-1" src="images/language.svg" alt="language-selector" />
        </span>
        <DropDown />
      </button>
      <ul className="absolute text-gray-800 pt-1 origin-top transform-gpu transition-transform scale-y-0 group-hover:scale-y-100 focus-within:scale-y-100">
        {languageSupports.map(({ label, route }, index) => (
          <li key={`${label}_${index}`}>
            <a className="block w-32 px-4 py-2 whitespace-nowrap bg-gray-200 hover:bg-green-400" href={route}>{label}</a>
          </li>
        ))}
        <li><a className="text-xs break-words block w-32 px-4 py-2 whitespace-nowrap bg-gray-200 hover:bg-green-400" href="http://www.example.com" target="__blank">Translation Error</a></li>
      </ul>
    </div>
  )
}