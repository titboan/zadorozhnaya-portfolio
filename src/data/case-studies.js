export const caseStudies = [
  {
    slug: 'solnechny-bereg',
    title: 'Солнечный берег',
    subtitle1: 'Разработка логотипа и фирменного стиля для коттеджного поселка в Подмосковье. Главное УТП объекта — расположение около реки.',
    subtitle2: 'Разработано в составе холдинга AVA Group. Проект включал полный комплект айдентики: логотип, фирменный стиль, брендбук.',
    images: Array.from({ length: 20 }, (_, i) => `/images/cases/solnechny-bereg/page-${String(i + 1).padStart(2, '0')}.jpg`),
    previews: [
      { image: '/images/cases/solnechny-bereg/page-10.jpg', title: 'Логотип и знак' },
      { image: '/images/cases/solnechny-bereg/page-06.jpg', title: 'Фирменный стиль' },
      { image: '/images/cases/solnechny-bereg/page-09.jpg', title: 'Брендбук' },
    ],
  },

  {
    slug: 'agrocentr',
    title: 'Агроцентр',
    subtitle1: 'Разработка логотипа и фирменного стиля (GUIDEBOOK) для АГРОЦЕНТРА.',
    subtitle2: 'Холдинг AVA Group. Комплексная разработка айдентики с нуля включая логотип, гайдлайн и фирменные носители.',
    images: Array.from({ length: 29 }, (_, i) => `/images/cases/agrocentr/page-${String(i + 3).padStart(2, '0')}.jpg`),
    previews: [
      { image: '/images/cases/agrocentr/page-03.jpg', title: 'Логотип' },
      { image: '/images/cases/agrocentr/page-05.jpg', title: 'Фирменный стиль' },
      { image: '/images/cases/agrocentr/page-10.jpg', title: 'Гайдлайн' },
    ],
  },
]

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug) ?? null
}
