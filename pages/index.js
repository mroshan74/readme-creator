import Link from "next/link";
import Dots from "@/pages/svgImages/Dots";
import { LanguageDropDown } from "@/components/LanguageDropDown";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 h-full w-full" aria-label="true">
            <div className="relative h-full">
              <Dots />
            </div>
          </div>
          <div className="relative pt-6 pb-16 sm:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/" className="flex items-center">
                      <img className="h-8 mt-1 w-auto cursor-pointer" src="images/readme.svg" alt="readme-icon"/>
                      <p className="text-gray-800 ml-2 text-md">readmeCreator</p>
                    </Link>
                  </div>
                </div>
                <div className="relative w-28 flex items-center flex-1 md:absolute md:inset-y-0 md:right-0 z-10"><LanguageDropDown/></div>
              </nav>
            </div>
            {/* Hero Section */}
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">The fastest way to create a</span>
                  <span className="block text-green-600">README</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Simple editor allows you to quickly add and customize all the sections you need for your projects's readme.</p>
              </div>
              <div className="flex justify-center mt-6">
                <span className="inline-flex rounded-md shadow">
                  <Link href="/editor" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-gray-600 bg-white hover:text-green-500">Get Started</Link>
                </span>
              </div>
              <div className="text-center">
                <p className="mt-3 mx-auto text-sm text-gray-900">100% free</p>
              </div>
            </div>
          </div>
        </div>
        {/* Secondary Section */}
        <div className="relative">
          <div className="absolute inset-0 flex flex-col">
            <div className="flex-1"></div>
            <div className="flex-1 w-full bg-gray-800"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <img className="relative rounded-md shadow-lg" src="images/readmeCreator.png" alt="readme-creator-screenshot" />
          </div>
        </div>
        {/* Footer Section */}
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-center text-gray-400 text-sm font-semibold tracking-wide">
              Made with love &#9825; by&nbsp;
              <a className="hover:text-green-500" href="https://www.mroshan.dev" target="__blank">Muhammed Roshan</a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
