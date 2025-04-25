import Link from "next/link"

interface NavigationProps {
  color?: "white" | "dark"
}

export function Navigation({ color = "dark" }: NavigationProps) {
  const textColor = color === "white" ? "text-white hover:text-blue-200" : "text-gray-800 hover:text-blue-600"

  return (
    <nav className="flex items-center space-x-6">
      <Link href="/" className={`${textColor} font-medium`}>
        Home
      </Link>
      <Link href="/about" className={`${textColor} font-medium`}>
        About Us
      </Link>
      <Link href="/faq" className={`${textColor} font-medium`}>
        FAQ
      </Link>
    </nav>
  )
}
