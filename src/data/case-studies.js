export const caseStudies = [
  {
    slug: 'solnechny-bereg',
    title: 'Солнечный берег',
    subtitle1: 'Разработка логотипа и фирменного стиля для коттеджного поселка в Подмосковье. Главное УТП объекта — расположение около реки.',
    subtitle2: 'Разработано в составе холдинга AVA Group. Проект включал полный комплект айдентики: логотип, фирменный стиль, брендбук.',
    images: [
      '/images/cases/solnechny-bereg/page-0001.jpg',
      '/images/cases/solnechny-bereg/page-0002.jpg',
      '/images/cases/solnechny-bereg/page-0003.jpg',
      '/images/cases/solnechny-bereg/page-0004.jpg',
      '/images/cases/solnechny-bereg/page-0005.jpg',
      '/images/cases/solnechny-bereg/page-0006.jpg',
      '/images/cases/solnechny-bereg/page-0007.jpg',
      '/images/cases/solnechny-bereg/page-0008.jpg',
      '/images/cases/solnechny-bereg/page-0009.jpg',
      '/images/cases/solnechny-bereg/page-0010.jpg',
      '/images/cases/solnechny-bereg/page-0011.jpg',
      '/images/cases/solnechny-bereg/page-0012.jpg',
      '/images/cases/solnechny-bereg/page-0013.jpg',
      '/images/cases/solnechny-bereg/page-0014.jpg',
      '/images/cases/solnechny-bereg/page-0015.jpg',
      '/images/cases/solnechny-bereg/page-0016.jpg',
      '/images/cases/solnechny-bereg/page-0017.jpg',
      '/images/cases/solnechny-bereg/page-0018.jpg',
      '/images/cases/solnechny-bereg/page-0019.jpg',
      '/images/cases/solnechny-bereg/page-0020.jpg',
      '/images/cases/solnechny-bereg/page-0021.jpg',
      '/images/cases/solnechny-bereg/page-0022.jpg',
    ],
    previews: [
      { image: '/images/cases/solnechny-bereg/page-0015.jpg', title: 'Логотип и знак' },
      { image: '/images/cases/solnechny-bereg/page-0001.jpg', title: 'Фирменный стиль' },
      { image: '/images/cases/solnechny-bereg/page-0002.jpg', title: 'Брендбук' },
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
