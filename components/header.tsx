"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Обновляем хедер, чтобы добавить логотип */}
          <div className="flex items-center">
            <div className="relative w-10 h-10 mr-2">
              <Image src="/logo.png" alt="ПОКАТИТ" width={40} height={40} className="object-contain" />
            </div>
            <span className="font-bold text-xl text-blue-600">ПОКАТИТ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("directions")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Направления
            </button>
            <button
              onClick={() => document.querySelector("section:nth-of-type(2)")?.scrollIntoView({ behavior: "smooth" })}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Галерея
            </button>
            <button
              onClick={() => document.querySelector("section:nth-of-type(8)")?.scrollIntoView({ behavior: "smooth" })}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Локация
            </button>
            <button
              onClick={() => document.querySelector("section:nth-of-type(9)")?.scrollIntoView({ behavior: "smooth" })}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </button>
            <div className="flex items-center space-x-2">
              <a
                href="https://t.me/Hockey_Elite_School_POKATIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0088cc] hover:text-[#0077b5] transition-colors"
                aria-label="Telegram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M21.5 15.5 15.5 9.5M12 12l-8-5 16-4-4 16-4-5M12 12l-5 8"></path>
                </svg>
              </a>
              <a
                href="https://wa.me/79152450897"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#128C7E] transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z"></path>
                </svg>
              </a>
              <a
                href="https://vk.com/hockey_elite_school_pokatit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4C75A3] hover:text-[#3B5998] transition-colors"
                aria-label="ВКонтакте"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.743c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.608 2.18-3.608.119-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@POKATIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF0000] hover:text-[#CC0000] transition-colors"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/pokatit_ice_school"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1306C] hover:text-[#C13584] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <button
              onClick={() => document.querySelector("section:nth-of-type(10)")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Записаться
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Меню"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <div className="flex justify-center space-x-4 py-2 mb-2">
                <a
                  href="https://t.me/Hockey_Elite_School_POKATIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0088cc] hover:text-[#0077b5] transition-colors"
                  aria-label="Telegram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M21.5 15.5 15.5 9.5M12 12l-8-5 16-4-4 16-4-5M12 12l-5 8"></path>
                  </svg>
                </a>
                <a
                  href="https://wa.me/79152450897"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:text-[#128C7E] transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                    <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z"></path>
                  </svg>
                </a>
                <a
                  href="https://vk.com/hockey_elite_school_pokatit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4C75A3] hover:text-[#3B5998] transition-colors"
                  aria-label="ВКонтакте"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.743c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.608 2.18-3.608.119-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@POKATIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF0000] hover:text-[#CC0000] transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
              <button
                onClick={() => scrollToSection("directions")}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Направления
              </button>
              <button
                onClick={() => {
                  document.querySelector("section:nth-of-type(3)")?.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Галерея
              </button>
              <button
                onClick={() => {
                  document.querySelector("section:nth-of-type(9)")?.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Локация
              </button>
              <button
                onClick={() => {
                  document.querySelector("section:nth-of-type(10)")?.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Контакты
              </button>
              <button
                onClick={() => {
                  document.querySelector("section:nth-of-type(10)")?.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Записаться
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
