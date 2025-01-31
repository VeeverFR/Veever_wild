import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { AccueilIcon } from "../../assets/images/AccueilIcone";
import { CatalogIcon } from "../../assets/images/CatalogIcone";
import { ParametreIcon } from "../../assets/images/ParametreIcon";
import { ProfileIcon } from "../../assets/images/ProfileIcone";
import { SearchIcon } from "../../assets/images/SearchIcone";

export default function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : "";
  const controlHeader = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }

    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => controlHeader();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controlHeader]);

  return (
    <header className={`header ${show ? "header-visible" : "header-hidden"}`}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              <AccueilIcon />
            </NavLink>
          </li>
          <li>
            <SearchIcon />
          </li>
          <li>
            <NavLink to="/catalog" className={getNavLinkClass}>
              <CatalogIcon />
            </NavLink>
          </li>
          <li>
            <ProfileIcon />
          </li>
          <li>
            <ParametreIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
}
