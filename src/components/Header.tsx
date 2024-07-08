import brand from "@/assets/img/brand.svg"

export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full backdrop-blur-lg bg-background/50 z-50 px-4 py-4 flex items-center justify-center">
        <div className="max-w-6xl w-full flex items-center justify-center">
          <img src={brand} width={90} height={90} alt="Sighted Logo" />
        </div>
      </header>
    )
}
