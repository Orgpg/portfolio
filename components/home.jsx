import { ArrowDown } from "lucide-react"

export default function Home() {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
          <span className="block">Hi, I'm</span>
          <span className="block text-blue-600 dark:text-blue-400 mt-2">Wai Phyo Aung</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Full Stack Developer specializing in building exceptional digital experiences
        </p>
        <div className="mt-10">
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
          >
            Learn more about me
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-gray-600 dark:text-gray-300 focus:outline-none">
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </div>
  )
}

