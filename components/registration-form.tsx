"use client"

export default function RegistrationForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-center">Связаться с нами</h3>
      <p className="text-center mb-6 text-gray-600">
        Свяжитесь с нами через WhatsApp или Telegram для записи на тренировку
      </p>

      <div className="flex flex-col gap-4">
        <a
          href="https://wa.me/79152450897"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 rounded-md font-medium hover:bg-green-600 transition-colors"
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
            className="w-5 h-5"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
            <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
            <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z"></path>
          </svg>
          Связаться через WhatsApp
        </a>

        <a
          href="https://t.me/danilachill"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#0088cc] text-white px-6 py-4 rounded-md font-medium hover:bg-[#0077b5] transition-colors"
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
            className="w-5 h-5"
          >
            <path d="M21.5 15.5 15.5 9.5"></path>
            <path d="m12 12-8-5 16-4-4 16-4-5"></path>
            <path d="m12 12-5 8"></path>
          </svg>
          Связаться через Telegram
        </a>
      </div>
    </div>
  )
}
