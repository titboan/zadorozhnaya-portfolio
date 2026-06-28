export const projects = [
  {
    slug: 'logo',
    category: 'Разработка логотипа',
    desc: 'Разработка логотипа как ключевого элемента целостной фирменной айдентики, гармоничное сочетание с другими бренд-коммуникациями и усиливание общего имиджа',
    cover: '/images/work-1-logo.jpg',
    images: [
      '/images/work-1-logo.jpg',
      '/images/projects/agrocentr/Агроцентр.jpg',
      '/images/projects/provykhodnoy/Провыходной-гайдлайн.jpg',
    ],
  },
  {
    slug: 'identity',
    category: 'Айдентика и фирменный стиль',
    desc: 'Глубокое погружение в нишу бизнеса, анализ конкурентов и проработка потенциального клиента помогают разработать айдентику, которая будет задавать необходимое позицианирование бренда на рынке.',
    cover: '/images/work-2-identity.jpg',
    images: [
      '/images/work-2-identity.jpg',
      '/images/projects/solnechny-bereg/солнечный берег.jpg',
    ],
  },
  {
    slug: 'poly',
    category: 'Полиграфия',
    desc: 'Фирменная полиграфия является неотъемлемой частью бренда. Буклеты, листовки, визитки, открытки, лифлеты, пригласительные.',
    cover: '/images/work-3-poly.jpg',
    images: [
      '/images/work-3-poly.jpg',
      '/images/projects/other/Frame 3.jpg',
      '/images/projects/other/Frame 5.jpg',
      '/images/projects/other/Frame 8.jpg',
      '/images/projects/other/Frame 9.jpg',
      '/images/projects/other/Frame 10.jpg',
    ],
  },
  {
    slug: 'kv',
    category: 'Разработка Key Visual',
    desc: 'Грамотно разработанный key visual способен вызывать у целевой аудитории определенные чувства и ассоциации с брендом. Я помогу установить более глубокую эмоциональную связь с покупателями и повысить их лояльность.',
    cover: '/images/work-4-kv1.jpg',
    images: [
      '/images/work-4-kv1.jpg',
      '/images/work-5-kv2.jpg',
    ],
  },
  {
    slug: 'promo',
    category: 'Материалы для продвижения бренда',
    desc: 'Презентации, карточки для маркетплейсов, online-реклама, гайды, рекламные конструкции.',
    cover: '/images/projects/akcii/Акции.jpg',
    images: [
      '/images/projects/akcii/Акции.jpg',
      '/images/projects/rk-fevral/РК Февраль.jpg',
      '/images/projects/personal-brand/презентация .jpg',
    ],
  },
  {
    slug: 'social',
    category: 'Оформление социальных сетей',
    desc: 'Instagram, ВКонтакте, YouTube. Разработка визуального оформления и шаблонов + ведение аккаунта на постоянной основе.',
    cover: '/images/work-6-social.jpg',
    images: [
      '/images/work-6-social.jpg',
      '/images/projects/other/Frame 37.jpg',
      '/images/projects/other/Frame 38.jpg',
    ],
  },
  {
    slug: 'web',
    category: 'Web-дизайн',
    desc: 'Разрабатываем сайт, который полностью соответствует требованиям заказчика. Предложим экспертные рекомендации и создадим как многостраничный веб-ресурс, так и продающую одностраничную лендинг-страницу. Мобильная версия входит в стоимость.',
    cover: '/images/projects/dental/Дентал-лофт.jpg',
    images: [
      '/images/projects/dental/Дентал-лофт.jpg',
      '/images/projects/glavnaya/Главная.jpg',
    ],
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null
}
