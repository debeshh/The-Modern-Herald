import logo from '../assets/logo.png';

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand apple-logo" href="#">
        <img src={logo} alt="Logo" style={{ height: "32px", width: "32px", marginRight: "10px", borderRadius: "50%" }}/>
        <span><b>The Modern Herald</b></span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav d-flex justify-content-center">
        <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
        <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
        <div className="nav-link" onClick={()=>setCategory("science")}>Science</div>
        <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
        <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
