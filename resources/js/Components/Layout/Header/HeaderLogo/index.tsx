import { Link } from "@inertiajs/react"
import HeaderImg from "/public/assets/images/header1-logo.svg"
const HeaderLogo = () => {
  return (
    <div className="header-main-logo d-lg-block d-none">
      <Link href="/"><img alt="image" src={HeaderImg} /></Link>
    </div>
  )
}

export default HeaderLogo