import Topbar from "../Layout/Topbar"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <div>
      {/* Top bar */}
      <Topbar></Topbar>
      {/* navbar */}
      <Navbar></Navbar>
      {/* cart drawer */}
    </div>
  )
}

export default Header