"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import VideoGallery from "@/components/video-gallery"
import ContactsSection from "@/components/contacts-section"
import TelegramChannel from "@/components/telegram-channel"
import RegistrationForm from "@/components/registration-form"
import RegistrationModal from "@/components/registration-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="pt-24 pb-16 md:pt-32 md:pb-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Школа хоккейного
                <br />
                мастерства <span className="text-blue-600">ПОКАТИТ</span>
              </h1>

              <div className="bg-white rounded-lg p-6 shadow-md mb-8">
                <h2 className="text-xl font-bold text-blue-600 mb-4">Для кого наши тренировки:</h2>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <span className="font-medium">Взрослые любители</span> — работаю с игроками любого уровня, включая
                      новичков
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <span className="font-medium">Дети всех возрастов</span> — спортшкольники и начинающие
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <span className="font-medium">Индивидуальный подход</span> — персональный план развития для
                      каждого
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <div>
                      <span className="font-medium">Игровые тренировки</span> — формат 3 на 3 с разбором ошибок и
                      тактики
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-blue-600 mb-4">Наши социальные сети:</h2>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://t.me/Hockey_Elite_School_POKATIT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#0088cc] text-white px-3 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M21.5 15.5 15.5 9.5"></path>
                      <path d="m12 12-8-5 16-4-4 16-4-5"></path>
                      <path d="m12 12-5 8"></path>
                    </svg>
                    Telegram
                  </a>

                  <a
                    href="https://wa.me/79152450897"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-3 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                      <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z"></path>
                    </svg>
                    WhatsApp
                  </a>

                  <a
                    href="https://vk.com/hockey_elite_school_pokatit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#4C75A3] text-white px-3 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.864 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.743c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.27-1.422 2.18-3.608 2.18-3.608.119-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z" />
                    </svg>
                    ВКонтакте
                  </a>

                  <a
                    href="https://www.youtube.com/@POKATIT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#FF0000] text-white px-3 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    YouTube
                  </a>

                  <a
                    href="https://rutube.ru/channel/59809514/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#0A2896] text-white px-3 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M3.54 0A3.54 3.54 0 0 0 0 3.54v16.92A3.54 3.54 0 0 0 3.54 24h16.92A3.54 3.54 0 0 0 24 20.46V3.54A3.54 3.54 0 0 0 20.46 0H3.54zm11.37 5.5a5.99 5.99 0 0 1 5.99 5.99 5.99 5.99 0 0 1-5.99 5.99h-5.82a5.99 5.99 0 0 1-5.99-5.99 5.99 5.99 0 0 1 5.99-5.99h5.82zm-5.82 2.4a3.59 3.59 0 0 0-3.59 3.59 3.59 3.59 0 0 0 3.59 3.59h5.82a3.59 3.59 0 0 0 3.59-3.59 3.59 3.59 0 0 0-3.59-3.59h-5.82z" />
                    </svg>
                    RuTube
                  </a>

                  <a
                    href="https://www.instagram.com/pokatit_ice_school"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#E1306C] text-white px-3 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Записаться на тренировку
                </button>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full h-[400px]">
                <Image src="/logo-large.png" alt="ПОКАТИТ логотип" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ПОКАТИТ - кто мы? Section (replacing "Смотрите, как проходят наши тренировки") */}
      <section className="py-16 md:py-24 bg-cover bg-center" style={{ backgroundImage: "url('/images/video-bg.png')" }}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">ПОКАТИТ - кто мы?</h2>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/FoNA0l7jUIw"
                title="КТО МЫ? Школа хоккейного мастерства ПОКАТИТ"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">О школе ПОКАТИТ</h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image src="/about-image.jpg" alt="О школе ПОКАТИТ" fill className="object-cover" />
              </div>
            </div>

            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                Школа элитного хоккейного мастерства ПОКАТИТ — это место, где рождаются чемпионы. Наша миссия — раскрыть
                потенциал каждого игрока, независимо от его текущего уровня.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <div className="text-lg">
                    Уникальная методика, объединяющая лучшие практики мировых хоккейных школ
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <div className="text-lg">Индивидуальный подход к каждому игроку</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <div className="text-lg">Тренировки для игроков всех возрастов и уровней подготовки</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <div className="text-lg">Игровые тренировки в формате 3 на 3 с разбором тактики</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Философия</h2>

          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202025-02-28%20013112-wpNmrmoWDiu7CObhmGHXQSi5aKdMmj.png"
                  alt="Данила Самохвалов"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Данила Самохвалов</h3>
              <p className="text-lg text-gray-600 mb-4">Основатель школы ПОКАТИТ</p>

              <p className="text-lg mb-6">
                Я – тренер, который сделает все для того что бы вывести вас на новый уровень! Работаю с игроками
                начинающего, среднего и высокого уровня подготовки. У меня есть собственная система, которая собрала
                лучшее из мировых хоккейных школ – от Скандинавии до Северной Америки.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-6">
                Моя фишка – индивидуальный подход. Каждый игрок – это отдельная история. Если у вас есть записи игр –
                отлично, я их разберу. Если нет – посмотрю сам. На основе анализа мы составим тренировочный план,
                который поможет подтянуть слабые стороны и усилить сильные. Я искренне убеждён: нужно работать над
                слабыми сторонами, чтобы сделать их лучшими, и с таким же усердием совершенствовать сильные, чтобы они
                оставались вашими главными козырями.
              </p>

              <p className="text-lg mb-6">
                Тренировки – это не просто лёд. Мы работаем и в зале, и на земле – всё, чтобы развивать именно те
                навыки, которые вам нужны. Каждое занятие строго индивидуально, а цель всегда одна – работать во имя
                того, чтобы вывести вашу игру на новый уровень.
              </p>
            </div>

            <div>
              <p className="text-lg mb-6">
                Я фанат силового катания, потому что знаю: без правильной техники нет элитной игры. Катание – это
                фундамент успеха, основа, на которой строится каждая деталь вашей игры. Хотите быть лучшими? Начинаем с
                катания. (Примеры ярких представителей силового катания: Александр Овечкин, Нейтан МакКиннон, Сидни
                Кросби, Кирилл Капризов, Коннор МакДэвид)
              </p>

              <p className="text-lg mb-6">
                Я никогда не стою на месте и всегда держу руку на пульсе мировых трендов в хоккее и подготовке лучших
                игроков. Слежу за передовыми методиками, посещаю международные лагеря и впитываю всё лучшее, что
                предлагает мир хоккея. Это даёт мне возможность не только развиваться самому, но и передавать эти знания
                вам.
              </p>

              <p className="text-lg mb-6">
                Если вы любите хоккей так же, как и я, то мы точно сработаемся. Любовь к игре – это наше топливо. На
                каждой тренировке я выкладываюсь вместе с вами, чтобы результат был заметен в игре.
              </p>

              <p className="text-lg">
                О себе: Играл в молодёжных и профессиональных лигах Чехии и Германии, участвовал в лучших хоккейных
                лагерях Скандинавии и Северной Америки. Мой подход – это не просто подкатки, а детальная работа над
                каждой мелочью, которая делает игру лучше.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-medium">
              На первом занятии мы обсудим всё, что нужно, чтобы начать путь к вашему успеху. Главное – внимание к
              деталям, желание расти и готовность идти к цели!
            </p>
          </div>
        </div>
      </section>

      {/* Training Directions */}
      <section id="directions" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Направления тренировок</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beginners Group */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/beginners-group.png" alt="Группа начинающих" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Группа начинающих</h3>
                <p className="text-gray-600 mb-4">
                  Для тех, кто делает первые шаги в хоккее. Фокус на базовых навыках катания и владения клюшкой.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Основы техники катания</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Базовое владение клюшкой</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Понимание правил игры</span>
                  </li>
                </ul>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors"
                >
                  Записаться
                </button>
              </div>
            </div>

            {/* Development Group */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/development-group.png" alt="Группа развития" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Группа развития</h3>
                <p className="text-gray-600 mb-4">
                  Для игроков с базовыми навыками. Углубленная работа над техникой и тактикой.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Продвинутая техника катания</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Улучшение владения шайбой</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Основы тактики и позиционирования</span>
                  </li>
                </ul>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors"
                >
                  Записаться
                </button>
              </div>
            </div>

            {/* Professional Group */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/professional-group.png"
                  alt="Профессиональная группа"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Профессиональная группа</h3>
                <p className="text-gray-600 mb-4">
                  Для опытных игроков. Интенсивные тренировки с акцентом на детали и игровые ситуации.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Элитная техника катания</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Продвинутая работа с шайбой</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Сложные тактические схемы</span>
                  </li>
                </ul>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors"
                >
                  Записаться
                </button>
              </div>
            </div>

            {/* Individual Training */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/individual-training.png"
                  alt="Индивидуальные тренировки"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Индивидуальные тренировки</h3>
                <p className="text-gray-600 mb-4">
                  Персональные занятия с тренером. Максимальное внимание к вашим потребностям.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Персональный план развития</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Работа над конкретными навыками</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Видеоанализ и обратная связь</span>
                  </li>
                </ul>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors"
                >
                  Записаться
                </button>
              </div>
            </div>

            {/* Adult Group */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/adult-group.png" alt="Взрослая группа" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Взрослая группа</h3>
                <p className="text-gray-600 mb-4">
                  Для взрослых любителей всех уровней. Тренировки с учетом возрастных особенностей.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Адаптированные нагрузки</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Техника и тактика для любителей</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Игровые тренировки</span>
                  </li>
                </ul>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors"
                >
                  Записаться
                </button>
              </div>
            </div>

            {/* Game Training */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/professional-group.png"
                  alt="Игровые тренировки 3 на 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Игровые тренировки 3 на 3</h3>
                <p className="text-gray-600 mb-4">
                  Интенсивные игровые сессии с разбором тактики и работой над ошибками.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Игровые ситуации</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Тактический разбор</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Развитие игрового мышления</span>
                  </li>
                </ul>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors"
                >
                  Записаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section id="gallery" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Галерея</h2>
          <VideoGallery />
        </div>
      </section>

      {/* Telegram Channel */}
      <TelegramChannel />

      {/* Location */}
      <section
        id="location"
        className="py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/location-bg.png')" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Локация</h2>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4">Адрес:</h3>
                <p className="text-lg mb-6">
                  Москва, ул. Сокольнический Вал, 1Б
                  <br />
                  Академия «Спартак», Сокольники
                </p>

                <h3 className="text-xl font-bold mb-4">Как добраться:</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>
                      <strong>Метро:</strong> Сокольники (5 минут пешком)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>
                      <strong>Автомобиль:</strong> Парковка на территории арены
                    </span>
                  </li>
                </ul>
              </div>

              <div className="md:w-1/2 h-64 md:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.5457523815896!2d37.67566687687955!3d55.79186997346429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5352f3e50b6e7%3A0x1e7e79b8d5e3bc3a!2z0JDRgNC10L3QsCDQodC_0LDRgNGC0LDQuiwg0KHQvtC60L7Qu9GM0L3QuNC60Lg!5e0!3m2!1sru!2sru!4v1708987078555!5m2!1sru!2sru"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <ContactsSection />

      {/* Registration */}
      <section
        id="registration"
        className="py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contacts-bg.png')" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <RegistrationForm />
          </div>
        </div>
      </section>

      <Footer />

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
