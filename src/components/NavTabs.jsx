import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4 name">Gage Degerness</span>
      </a>

      <ul class="navly">
        <li class="navly-item"><Link to="/" class={currentPage === '/' ? 'item actively' : 'nav-link'}>
          About Me
        </Link></li>
        <li class="navly-item"><Link to="/Portfolio" class={currentPage === '/Portfolio' ? 'item actively' : 'nav-link'}>
          Portfolio
        </Link></li>
        <li class="navly-item"><Link to="/Resume" class={currentPage === '/Resume' ? 'item actively' : 'nav-link'}>
          Resume
        </Link></li>
        <li class="navly-item"><Link to="/Contact" class={currentPage === '/Contact' ? 'item actively' : 'nav-link'}>
          Contact
        </Link></li>
      </ul>
    </header>
  </div>
  );
}

export default NavTabs;
