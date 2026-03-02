'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';
import type { wagtailcore } from '@/models';

type NavigationLinksProps = {
  menuItems: wagtailcore.Page[];
};

const SearchIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
      fill="#333"
    />
  </svg>
);

const normalizePath = (path: string | null) => {
  if (!path) return '';
  return path.replace(/\/$/, '');
};

export function NavigationLinks({ menuItems }: NavigationLinksProps) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen((prev) => {
      if (prev) {
        document.body.classList.remove('no-scroll');
      } else {
        document.body.classList.add('no-scroll');
      }
      return !prev;
    });
  }, []);

  const isActive = (path: string) => {
    if (!pathname) return false;
    return normalizePath(pathname).startsWith(normalizePath(path));
  };

  const isCurrentPage = (path: string) => {
    if (!pathname) return undefined;
    return normalizePath(pathname) === normalizePath(path) ? 'page' : undefined;
  };

  const menuItemElements = menuItems.map((item) => (
    <li
      key={item.id}
      className={`presentation ${item.title.toLowerCase().replace(/ /g, '')}${isActive(item.meta.html_path) ? ' active' : ''}`}
    >
      <Link
        href={item.meta.html_path}
        aria-current={isCurrentPage(item.meta.html_path)}
      >
        {item.title}
      </Link>
    </li>
  ));

  return (
    <div className="navigation" data-navigation="">
      <Link href="/" className="navigation__logo">
        The Wagtail Bakery
      </Link>

      <button
        type="button"
        className="navigation__mobile-toggle"
        aria-label="Toggle mobile menu"
        aria-expanded={mobileNavOpen}
        data-mobile-navigation-toggle=""
        onClick={toggleMobileNav}
      >
        <span className="navigation__toggle-icon-bar" />
        <span className="navigation__toggle-icon-bar" />
        <span className="navigation__toggle-icon-bar" />
      </button>

      <nav
        className="navigation__mobile"
        data-mobile-navigation=""
        hidden={!mobileNavOpen}
      >
        <Link href="/" className="navigation__logo">
          The Wagtail Bakery
        </Link>
        <ul className="navigation__items nav-pills">{menuItemElements}</ul>
        {/* biome-ignore lint/a11y/useSemanticElements: matching original template's form[role=search] */}
        <form
          action="/search"
          method="get"
          className="navigation__mobile-search"
          role="search"
        >
          <label htmlFor="mobile-search-input" className="u-sr-only">
            Search the bakery
          </label>
          <input
            className="navigation__search-input"
            id="mobile-search-input"
            type="text"
            placeholder="Search"
            autoComplete="off"
            name="q"
          />
          <div aria-hidden="true" className="navigation__search-icon">
            <SearchIcon />
          </div>
        </form>
      </nav>

      <nav className="navigation__desktop" aria-label="Main">
        <ul className="navigation__items nav-pills">{menuItemElements}</ul>
      </nav>

      {/* biome-ignore lint/a11y/useSemanticElements: matching original template's form[role=search] */}
      <form
        action="/search"
        method="get"
        className="navigation__search"
        role="search"
      >
        <label htmlFor="search-input" className="u-sr-only">
          Search the bakery
        </label>
        <input
          className="navigation__search-input"
          id="search-input"
          type="text"
          placeholder="Search"
          autoComplete="off"
          name="q"
        />
        <div aria-hidden="true" className="navigation__search-icon">
          <SearchIcon />
        </div>
      </form>
    </div>
  );
}
