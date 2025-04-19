export default function ContactsSection() {
  return (
    <section id="contacts" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Контакты</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f8fafd] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
              <a
                href="https://wa.me/79152450897"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium text-[#2563eb] hover:underline flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-green-500"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z"></path>
                </svg>
                +7 915 245 08 97
              </a>
            </div>
            <div className="bg-[#f8fafd] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Telegram</h3>
              <a
                href="https://t.me/danilachill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium text-[#2563eb] hover:underline flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#0088cc]"
                >
                  <path d="M21.5 15.5 15.5 9.5"></path>
                  <path d="m12 12-8-5 16-4-4 16-4-5"></path>
                  <path d="m12 12-5 8"></path>
                </svg>
                @danilachill
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f8fafd] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">ВКонтакте</h3>
              <a
                href="https://vk.com/hockey_elite_school_pokatit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium text-[#2563eb] hover:underline flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#4C75A3]"
                >
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.743c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.608 2.18-3.608.119-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" />
                </svg>
                hockey_elite_school_pokatit
              </a>
            </div>
            <div className="bg-[#f8fafd] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">YouTube</h3>
              <a
                href="https://www.youtube.com/@POKATIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium text-[#2563eb] hover:underline flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-red-600"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                @POKATIT
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f8fafd] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">RuTube</h3>
              <a
                href="https://rutube.ru/channel/59809514/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium text-[#2563eb] hover:underline flex items-center gap-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0A2896]">
                  <path d="M3.54 0A3.54 3.54 0 0 0 0 3.54v16.92A3.54 3.54 0 0 0 3.54 24h16.92A3.54 3.54 0 0 0 24 20.46V3.54A3.54 3.54 0 0 0 20.46 0H3.54zm11.37 5.5a5.99 5.99 0 0 1 5.99 5.99 5.99 5.99 0 0 1-5.99 5.99h-5.82a5.99 5.99 0 0 1-5.99-5.99 5.99 5.99 0 0 1 5.99-5.99h5.82zm-5.82 2.4a3.59 3.59 0 0 0-3.59 3.59 3.59 3.59 0 0 0 3.59 3.59h5.82a3.59 3.59 0 0 0 3.59-3.59 3.59 3.59 0 0 0-3.59-3.59h-5.82z" />
                </svg>
                ПОКАТИТ
              </a>
            </div>
            <div className="bg-[#f8fafd] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Instagram</h3>
              <a
                href="https://www.instagram.com/pokatit_ice_school?igsh=MWFreGxpZm5lb2I3dA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium text-[#2563eb] hover:underline flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#E1306C]"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @pokatit_ice_school
              </a>
            </div>
          </div>

          <div className="mt-12 bg-[#f8fafd] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Telegram канал школы</h3>
            <a
              href="https://t.me/Hockey_Elite_School_POKATIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium text-[#2563eb] hover:underline flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-[#0088cc]"
              >
                <path d="M21.5 15.5 15.5 9.5"></path>
                <path d="m12 12-8-5 16-4-4 16-4-5"></path>
                <path d="m12 12-5 8"></path>
              </svg>
              Hockey_Elite_School_POKATIT
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
