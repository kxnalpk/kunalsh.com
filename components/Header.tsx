import Spotify from "@/components/Spotify";

export default function Header() {
    return(
      <header className="flex flex-col px-8 gap-4 items-center md:py-6 md:items-start md:justify-end justify-center h-screen">
        <Spotify/>
        <h1 className="text-6xl md:text-8xl">Hey, I’m Kunal Sharma!</h1>
        <p className="font-light text-5xl md:text-7xl md:mb-32">FULLSTACK DEVELOPER</p>
      </header>
    )
  }
  