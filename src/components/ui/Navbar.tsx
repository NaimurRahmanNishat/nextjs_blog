"use client";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsChevronDown, BsInstagram, BsSearch } from "react-icons/bs";
import { FaBlog, FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

const mainNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Categories",
    href: "/categories",
    subItems: [
      {
        label: "Politics",
        href: "/categories/politics",
      },
      {
        label: "Health",
        href: "/categories/health",
      },
      {
        label: "Design",
        href: "/categories/design",
      },
    ],
  },
  {
    label: "Lifestyle",
    href: "/categories/lifestyle",
  },
  {
    label: "Education",
    href: "/categories/education",
  },
  {
    label: "Health",
    href: "/categories/health",
  },
  {
    label: "Technology",
    href: "/categories/technology",
  },
  {
    label: "Culture",
    href: "/categories/culture",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "More",
    href: "#",
    subItems: [
      {
        label: "Search",
        href: "/search",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Privicy Policy",
        href: "/privicy-policy",
      },
      {
        label: "Terms of Service",
        href: "/terms-of-service",
      },
    ],
  },
];
const Navbar = () => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const theme = "light";
  return <header className="relative bg-white font-lora text-gray-800">
    {/* top header start */}
    <div className="hidden md:block py-3">
      <div className="blog-container flex items-center justify-between">
        <h1 className="flex-shrink-0">
          <Link href="/" className="flex items-center text-2xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300">
            <FaBlog/>
            <span className="ml-1">Blogs</span>
          </Link>
        </h1>
        {/* top header right side */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 cursor-pointer rounded-full text-gray-500 hover:text-primary transition-colors focus:outline-none"><BsSearch size={18}/></button>
          {
            isSearchOpen && (
              <form action="/search" className="absolute top-full right-0 mt-2 p-2 bg-white rounded-md shadow-lg w-48 md:w-72 z-10 border border-gray-300">
                <input type="text" name="q" placeholder="Search..." className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 focus:outline"/>
              </form>
            )
          }
          </div>
          <button className="p-2 cursor-pointer rounded-full text-gray-500 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
            {theme === "light" ? (
              <IoMdMoon size={18} className="text-gray-500 hover:text-primary transition-colors focus:outline-none"/>
            ) : (
              <IoMdSunny size={18} className="text-gray-500 hover:text-primary transition-colors focus:outline-none"/>
            )
            }
          </button>
          {/* social network icons */}
          <ul className="flex items-center space-x-3">
            <li className="p-2 border rounded-full border-gray-300 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
              <Link href={"#"} className="text-gray-500">
              <FaTwitter size={12} className="text-gray-500 hover:text-primary transition-colors focus:outline-none"/>
              </Link>
            </li>
            <li className="p-2 border rounded-full border-gray-300 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
              <Link href={"#"} className="text-gray-500">
              <FaFacebookF size={12} className="text-gray-500 hover:text-primary transition-colors focus:outline-none"/>
              </Link>
            </li>
            <li className="p-2 border rounded-full border-gray-300 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
              <Link href={"#"} className="text-gray-500">
              <BsInstagram size={12} className="text-gray-500 hover:text-primary transition-colors focus:outline-none"/>
              </Link>
            </li>
          </ul>
          <Link href={"/contact"} className="px-5 py-2 border border-gray-300 text-gray-800 rounded-md hover:bg-green-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
            Contact
          </Link>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-5 py-2 border cursor-pointer border-gray-300 bg-green-600 text-white rounded-md hover:bg-green-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
      </div>
    </div>
    {/* top header end */}
    {/* main navigation start */}
    <nav className="py-3 border-b border-gray-200">
      {/* large screen navigation */}
      <div className="blog-container">
        {/* mobile menu toggle (hamburger) */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <h1 className="flex-shrink-0">
            <Link href="/" className="flex items-center text-2xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300">
              <FaBlog/>
              <span className="ml-1">Blogs</span>
            </Link>
          </h1>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="py-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors duration-300 lg:hidden">
              {isMobileMenuOpen ? (
                <HiOutlineX size={24} className="text-gray-500 hover:text-primary transition-colors focus:outline-none"/>
              ) : (
                <HiOutlineMenu size={24} className="text-gray-500 hover:text-primary transition-colors focus:outline-none"/>
              )
              }
            </button>
        </div>
        <ul className="hidden lg:flex items-center justify-between space-x-6">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.label} className="group relative">
                <Link href={item.href} className={`inline-flex items-center text-sm uppercase font-medium rounded-md text-gray-500 hover:text-primary transition-colors duration-300 ${isActive ? "font-semibold text-primary" : ""}`}>
                  {item.label}
                  {item.subItems && (
                    <BsChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform"/>
                  )}
                </Link>
                {
                  item.subItems && (
                    <ul className="absolute right-0 top-full mt-0 min-w-[200px] bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block overflow-hidden z-20">
                      {item.subItems.map((subItem) => {
                        return (
                          <li key={subItem.label} className="mt-1">
                            <Link href={subItem.href} className="block px-4 py-2 text-sm uppercase text-gray-700 hover:bg-gray-100 transition-colors duration-300">
                              {subItem.label}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )
                }
              </li>
            )
          })}
        </ul>
      </div>
      {/* mobile screen navigation */}
      {
        isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="flex justify-end p-4">
              <button className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                <HiOutlineX size={24}/>
              </button>
            </div>
            <ul className="flex flex-col p-4 space-y-2">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.label} className="group relative">
                    <Link href={item.href} className={`inline-flex items-center text-sm uppercase font-medium rounded-md text-gray-500 hover:text-primary transition-colors duration-300 ${isActive ? "font-semibold text-primary" : ""}`}>
                      {item.label}
                      {item.subItems && (
                        <BsChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform"/>
                      )}
                    </Link>
                    {
                      item.subItems && (
                        <ul className="absolute left-0 top-full mt-0 min-w-[200px] bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block overflow-hidden z-20">
                          {item.subItems.map((subItem) => {
                            return (
                              <li key={subItem.label} className="mt-1">
                                <Link href={subItem.href} className="block px-4 py-2 text-sm uppercase text-gray-700 hover:bg-gray-100 transition-colors duration-300">
                                  {subItem.label}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      )
                    }
                  </li>
                )
              })}
              <li>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-5 py-2 border cursor-pointer border-gray-300 bg-green-600 text-white rounded-md hover:bg-green-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary">Sign In</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton/>
              </SignedIn>
              </li>
            </ul>
          </div>
        )
      }
    </nav>
    {/* main navigation end */}
  </header>;
};

export default Navbar;
