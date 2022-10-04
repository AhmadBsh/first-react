const nav = (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark text-white fixed-top">
        <div class="container">
            <a className="navbar-brand" href="#">BootStrap Tutorial</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainmenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a href="#" class="nav-link">Get Started</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="navbarDropdownMenuLink">Learn</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a href="#" class="dropdown-item"></a>Learn Bootstrap</li>
                            <li><a href="#" class="dropdown-item"></a>Where to go next</li>
                        </ul>
                    </li>
                    <li class="nav-item"><a href="#" class="nav-link">Ask Me</a></li>
                </ul>
            </div>
        </div >
    </nav >);


const Nav = () => {
    return nav;
}
export default Nav;