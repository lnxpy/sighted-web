import brand from "../assets/img/brand.svg"
import brand_dark from "../assets/img/brand_dark.svg"
import { Button } from "./ui/button"
import { useTheme } from "../components/theme-provider"
import { MoonIcon, SunIcon } from "lucide-react"

export default function Header() {

  const {setTheme} = useTheme()
  const theme = useTheme().theme

  return (
      <header className="fixed h-16 top-0 left-0 w-full backdrop-blur-lg bg-background/50 z-50 px-4 py-4 flex items-center justify-center">
        <div className="flex items-center justify-center w-full">
          <img src={theme === "dark" ? brand_dark : brand} height={80} width={80} className="ml-12" alt="Sighted" />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? 
              <SunIcon className="h-4 w-4" />
              :
              <MoonIcon className="h-4 w-4" />
             }
          </Button>
        </div>
      </header>
    )
}
