export const projects = [
  {
    slug: 'logo',
    category: 'Разработка логотипа',
    cover: '/images/work-1-logo.jpg',
    cards: [
      {
        title: 'Логотип для бренда одежды Justore',
        image: '/images/work-1-logo.jpg',
      },
      {
        title: 'Айдентика автомобильного салона АВТОМОЛЛ',
        sub: 'первый мультибрендовый автосалон в Краснодаре',
        image: '/images/projects/agrocentr/Агроцентр.jpg',
      },
      {
        title: 'Логотип и айдентика для научного города',
        sub: 'Паект [mini]',
        image: '/images/work-1-logo.jpg',
      },
      {
        title: 'Разработка логотипа и фирменного стиля',
        sub: 'для АГРОЦЕНТРА холдинга AVA Group',
        image: '/images/projects/agrocentr/Агроцентр.jpg',
      },
      {
        title: 'Логотип для бренда одежды Justore',
        image: '/images/projects/provykhodnoy/Провыходной-гайдлайн.jpg',
      },
      {
        title: 'Логотип «Солнечный берег»',
        sub: 'River Club',
        image: '/images/projects/solnechny-bereg/солнечный берег.jpg',
      },
    ],
  },
  {
    slug: 'identity',
    category: 'Айдентика и фирменный стиль',
    cover: '/images/work-2-identity.jpg',
    cards: [
      {
        title: 'Фирменный стиль и айдентика бренда',
        image: '/images/work-2-identity.jpg',
      },
      {
        title: 'Солнечный берег — River Club',
        sub: 'фирменный стиль и брендбук',
        image: '/images/projects/solnechny-bereg/солнечный берег.jpg',
      },
      {
        title: 'Айдентика для АГРОЦЕНТРА',
        sub: 'холдинг AVA Group',
        image: '/images/projects/agrocentr/Агроцентр.jpg',
      },
      {
        title: 'Комплексная айдентика',
        image: '/images/projects/provykhodnoy/Провыходной-гайдлайн.jpg',
      },
    ],
  },
  {
    slug: 'poly',
    category: 'Полиграфия',
    cover: '/images/work-3-poly.jpg',
    cards: [
      { title: 'Буклеты и листовки', image: '/images/work-3-poly.jpg' },
      { title: 'Полиграфия для мероприятий', image: '/images/projects/other/Frame 3.jpg' },
      { title: 'Визитки и открытки', image: '/images/projects/other/Frame 5.jpg' },
      { title: 'Лифлеты и пригласительные', image: '/images/projects/other/Frame 8.jpg' },
      { title: 'Фирменная полиграфия', image: '/images/projects/other/Frame 9.jpg' },
      { title: 'Корпоративная полиграфия', image: '/images/projects/other/Frame 10.jpg' },
    ],
  },
  {
    slug: 'kv',
    category: 'Разработка Key Visual',
    cover: '/images/work-4-kv1.jpg',
    cards: [
      {
        title: 'Key Visual для рекламной кампании',
        image: '/images/work-4-kv1.jpg',
      },
      {
        title: 'Key Visual для центра флебологии АРД',
        sub: 'г. Краснодар',
        image: '/images/projects/flebologiya/Key visual для центра флебологии Задача_ Разработать ключевой визуальный образ для центра флебологии АРД в г. Краснодар. Необходимо ярко и.jpg',
      },
      {
        title: 'Key Visual для бренда',
        image: '/images/work-5-kv2.jpg',
      },
    ],
  },
  {
    slug: 'promo',
    category: 'Материалы для продвижения бренда',
    cover: '/images/projects/akcii/Акции.jpg',
    cards: [
      {
        title: 'Акционные материалы',
        image: '/images/projects/akcii/Акции.jpg',
      },
      {
        title: 'Рекламная кампания — февраль',
        image: '/images/projects/rk-fevral/РК Февраль.jpg',
      },
      {
        title: 'Персональный брендбук',
        sub: 'презентация',
        image: '/images/projects/personal-brand/презентация .jpg',
      },
    ],
  },
  {
    slug: 'social',
    category: 'Оформление социальных сетей',
    cover: '/images/work-6-social.jpg',
    cards: [
      {
        title: 'Оформление Instagram',
        image: '/images/work-6-social.jpg',
      },
      {
        title: 'Шаблоны для ВКонтакте',
        image: '/images/projects/other/Frame 37.jpg',
      },
      {
        title: 'Контент для социальных сетей',
        image: '/images/projects/other/Frame 38.jpg',
      },
    ],
  },
  {
    slug: 'web',
    category: 'Web-дизайн',
    cover: '/images/projects/dental/Дентал-лофт.jpg',
    cards: [
      {
        title: 'Дентал-лофт — сайт клиники',
        sub: 'дизайн лендинга',
        image: '/images/projects/dental/Дентал-лофт.jpg',
      },
      {
        title: 'Главная страница сайта',
        image: '/images/projects/glavnaya/Главная.jpg',
      },
    ],
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null
}
