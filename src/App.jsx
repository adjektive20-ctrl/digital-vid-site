export default function DigisystLandingDraft() {
  const services = [
    {
      title: "Пуско-наладка систем управления",
      text: "Точная настройка, запуск и финальная доводка систем управления архитектурным освещением на объекте."
    },
    {
      title: "Проектирование логики управления",
      text: "Разработка структуры управления, принципов работы системы и технической логики под конкретную архитектуру."
    },
    {
      title: "Сценарии освещения",
      text: "Создание световых сценариев, режимов и динамики, которые подчеркивают архитектуру и задают нужное восприятие объекта."
    },
    {
      title: "Экспертные консультации",
      text: "Подбор решений, помощь в выборе оборудования и консультации по практической реализации систем управления освещением."
    }
  ];

  const steps = [
    "Погружение в задачу, архитектуру объекта и требования проекта",
    "Формирование логики управления и принципов работы системы",
    "Подготовка решения под реализацию и согласование сценариев",
    "Пуско-наладка, точная настройка и тестирование на объекте",
    "Финальная сдача, корректировка сцен и сопровождение запуска"
  ];

  const cases = [
    {
      title: "Мост, Кемерово",
      text: "Проект архитектурной подсветки моста с выразительной световой композицией и акцентом на масштаб объекта, ритм опор и визуальное восприятие в городской среде.",
      meta: ["Архитектурная подсветка", "Мост", "Городская среда"],
      type: "single",
      image: "/images/bridge-kemerovo.jpg"
    },
    {
      title: "Фасадные объекты",
      text: "Подбор и настройка решений для фасадного освещения с акцентом на архитектурную пластику, сценарии включения и итоговое визуальное восприятие объекта.",
      meta: ["Архитектурный свет", "Сценарии", "Фасады"],
      type: "split",
      images: ["/images/facade-1.jpg", "/images/facade-2.jpg"]
    },
    {
      title: "Проектирование и сборка ШУО",
      text: "Собираем щиты управления освещением любой сложности под ваше ТЗ с учетом логики работы, состава оборудования и условий дальнейшей эксплуатации.",
      meta: ["ШУО", "Сборка щитов", "Под ваше ТЗ"],
      type: "single",
      image: "/images/shuo-panel.jpg"
    }
  ];

  const brandLogo = (
    <div className="inline-flex items-end gap-3 leading-none select-none lg:translate-y-[-4px]">
      <span className="text-[28px] font-black uppercase tracking-[0.08em] text-white sm:text-[34px] lg:text-[38px]">
        DIGITAL
      </span>
      <span
        className="translate-y-[1px] text-[36px] font-semibold italic tracking-[-0.03em] text-[#e23a3a] sm:text-[42px] lg:text-[48px]"
        style={{ fontFamily: "cursive" }}
      >
        V.I.D.
      </span>
    </div>
  );

  const renderCaseImage = (item) => {
    if (item.type === "single") {
      return (
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.38)), url(${item.image})`
          }}
        />
      );
    }

    if (item.type === "split") {
      return (
        <div className="grid h-full grid-cols-2 gap-[1px] bg-white/10">
          {item.images.map((image, index) => (
            <div
              key={`${item.title}-${index}`}
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.35)), url(${image})`
              }}
            />
          ))}
        </div>
      );
    }

    return <div className="h-full w-full bg-white/5" />;
  };

  return (
    <div className="min-h-screen bg-[#111315] text-white selection:bg-[#e23a3a] selection:text-white">
      <section className="relative overflow-hidden border-b border-white/8 bg-[linear-gradient(180deg,#14171a_0%,#171b1f_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,58,58,0.10),transparent_24%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:120px_120px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-10 -mt-6 lg:mb-12 lg:-mt-10">{brandLogo}</div>
              <h1 className="max-w-[760px] text-[28px] font-semibold tracking-[-0.03em] sm:text-[34px] lg:text-[46px] lg:leading-[1.06]">
                Управление архитектурным освещением для проектов, где важны точность и впечатление
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/64 sm:text-base">
                Проектирование логики управления, пуско-наладка, создание световых сценариев и сопровождение
                сложных систем. Сдержанная инженерная точность без потери визуального эффекта.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contacts"
                  className="rounded-2xl bg-[#e23a3a] px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
                >
                  Обсудить проект
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]"
                >
                  Посмотреть услуги
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-[#e23a3a]/6 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-7">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-white/38">Профиль</div>
                  <div className="mt-7 grid gap-7 sm:grid-cols-2">
                    <div>
                      <div className="text-3xl font-semibold tracking-[-0.04em] text-[#e23a3a]">12+</div>
                      <div className="mt-2 text-sm leading-6 text-white/56">
                        лет практики в системах управления на базе DMX512
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-semibold tracking-[-0.04em] text-[#e23a3a]">2×</div>
                      <div className="mt-2 text-sm leading-6 text-white/56">
                        подтвержденная сертификация Light Stream
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-semibold tracking-[-0.04em] text-[#e23a3a]">B2B</div>
                      <div className="mt-2 text-sm leading-6 text-white/56">
                        ориентация на профессиональные архитектурные проекты
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-semibold tracking-[-0.04em] text-[#e23a3a]">Full cycle</div>
                      <div className="mt-2 text-sm leading-6 text-white/56">
                        от логики управления до запуска и отладки на объекте
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#d96a6a]">О специалисте</p>
            <h2 className="mt-5 max-w-3xl text-[24px] font-semibold tracking-[-0.03em] sm:text-[28px] lg:text-[34px]">
              Свет как инженерная система и инструмент архитектурного впечатления
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-white/64">
              Работаю с множеством российских производителей светодиодных светильников и являюсь
              специалистом по системам управления Light Stream. Благодаря практическому опыту и
              партнерским связям могу подобрать решение под любой светильник и практически любое
              оборудование, выстроить корректную логику управления и довести систему до стабильной
              работы на объекте.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-6">
                <div className="text-sm uppercase tracking-[0.22em] text-white/35">Фокус</div>
                <div className="mt-3 text-[17px] leading-7 text-white/78">
                  Архитектурное освещение, логика управления, сценарии и точная наладка систем.
                </div>
              </div>
              <div className="border-b border-white/10 pb-6">
                <div className="text-sm uppercase tracking-[0.22em] text-white/35">Подход</div>
                <div className="mt-3 text-[17px] leading-7 text-white/78">
                  Техническая точность, визуальная выразительность и внимание к тому, как объект будет
                  работать в реальной эксплуатации.
                </div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.22em] text-white/35">Результат</div>
                <div className="mt-3 text-[17px] leading-7 text-white/78">
                  Управляемая, стабильная и эстетически выверенная система освещения, которая усиливает
                  архитектуру.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#d96a6a]">Услуги</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Комплексные решения для профессиональных проектов
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#e23a3a]/30 hover:bg-white/[0.04]"
              >
                <div className="h-12 w-12 rounded-2xl border border-[#e23a3a]/25 bg-[#e23a3a]/10" />
                <h3 className="mt-8 text-xl font-medium tracking-[-0.02em]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#d96a6a]">Подход к работе</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Выверенный процесс от идеи до запуска объекта
            </h2>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-5 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e23a3a]/30 bg-[#e23a3a]/10 text-sm font-semibold text-[#ff8c8c]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="pt-2 text-sm leading-7 text-white/72">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cases"
        className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(226,58,58,0.04),rgba(255,255,255,0.025))]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-xs uppercase tracking-[0.32em] text-[#d96a6a]">Портфолио</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
            На сайте показана часть реализованных объектов. Полная подборка проектов, фото и видео
            размещена в Telegram и MAX.
          </p>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {cases.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
                <div className="aspect-[16/11] overflow-hidden">{renderCaseImage(item)}</div>
                <div className="p-7">
                  <h3 className="mt-3 text-xl font-medium tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/62">{item.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.meta.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/56"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-8 sm:p-10 lg:p-14">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#e23a3a]/12 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#d96a6a]">Контакты</p>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Обсудим проект, в котором свет должен работать безупречно
              </h2>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <div className="text-sm uppercase tracking-[0.22em] text-white/40">Контакты</div>
              <div className="mt-3 text-[22px] font-semibold leading-[1.35] tracking-[-0.03em] sm:text-[24px]">
                <span className="mb-3 block text-sm font-medium uppercase tracking-[0.24em] text-white/75">
                  Ваш технический специалист
                </span>
                <span className="tracking-[0.04em] text-white">Вихерев</span>{" "}
                <span className="tracking-[0.05em] text-[#4da3ff]">Илья</span>{" "}
                <span className="tracking-[0.04em] text-[#e23a3a]">Дмитриевич</span>
              </div>
              <div className="mt-6 space-y-3 text-sm leading-7 text-white/68">
                <div>Telegram: @digisyst</div>
                <div>Телефон: +7 939 337-48-46</div>
                <div>Пуско-наладка, проектирование и сборка ШУО</div>
              </div>
              <a
                href="https://t.me/digisyst"
                className="mt-8 inline-flex rounded-2xl bg-[#e23a3a] px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
              >
                Перейти в канал
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
