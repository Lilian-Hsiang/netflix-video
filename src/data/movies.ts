export interface Movie {
  id: number
  title: string
  description: string
  poster: string
  backdrop: string
  year: number
  rating: string
  duration: string
  genre: string[]
  videoSrc?: string
}

export interface ContentCategory {
  id: string
  title: string
  movies: Movie[]
}

// randomImg 資料夾中的圖片（選擇直向照片）
const randomImages = [
  '20180609_143953.jpg',
  '20180609_170059.jpg',
  '20180615_172739.jpg',
  '20180616_162134.jpg',
  'LINE_ALBUM_20190103_260423_1.jpg',
  'LINE_ALBUM_20190322天使貓生日_260428_1.jpg',
  'LINE_ALBUM_20230615 謝謝啊貓那麼用心給阿龍的生日驚喜😍😍_260428_1.jpg',
  'LINE_ALBUM_世界恐龍日之佩佩龍26歲ㄌ_260428_1.jpg',
  'LINE_ALBUM_京都遊學_260423_1.jpg',
  'LINE_ALBUM_可愛哭哭龍之我愛龍龍不離不棄哦啾啾啾_260423_1.jpg',
  'LINE_ALBUM_帥龍愛貓貓_260424_1.jpg',
  'LINE_ALBUM_帥龍與貓咪家吃飯嘎~~~_260424_1.jpg',
  'LINE_ALBUM_愛龍當兵前夕剃毛嗚嗚_260424_1.jpg',
  'LINE_ALBUM_感謝張婕妤神攝手之我們真是天生一對嘻嘻😍～_260424_1.jpg',
  'LINE_ALBUM_淡水No.7_260423_1.jpg',
  'LINE_ALBUM_貓婆22歲生日～_260428_1.jpg',
  'LINE_ALBUM_貓貓說要去看Eric 但她比較愛Emos_260423_1.jpg',
  'LINE_ALBUM_陽明山一日遊_260428_1.jpg',
  'S__24543244.jpg',
  'S__25059333.jpg',
]

const allMovies: Movie[] = [
  {
    id: 1,
    title: 'こうさい恋',
    description:
      '在大學中一堂日常不過的日文課上，兩個不平凡的靈魂相遇了，他們的友誼在課堂上日常中逐漸升溫，最終譜出一段浪漫的戀曲，這段長達八年的愛情最終究竟會何去何從?',
    poster: `/images/randomImg/${randomImages[0]}`,
    backdrop: `/images/randomImg/${randomImages[0]}`,
    year: 2025,
    rating: 'PG-13',
    duration: '2h 15m',
    genre: ['Romance', 'Drama'],
    videoSrc: 'https://github.com/Lilian-Hsiang/netflix-video/releases/download/v1.0/uvvw63A-c2sMavHRp4EzY3341HTgpYrrEnIiTAqlmFo.MP4',
  },
  {
    id: 2,
    title: '體驗泰服gogo!',
    description: '',
    poster: `/images/randomImg/${randomImages[1]}`,
    backdrop: `/images/randomImg/${randomImages[1]}`,
    year: 2024,
    rating: 'R',
    duration: '1h 58m',
    genre: ['Action', 'Thriller'],
    videoSrc: 'https://github.com/Lilian-Hsiang/netflix-video/releases/download/v1.0/F0bSiGVJ2zRJWZojbO_VfHEzjUwdSwWVq37jT2IIDug.MP4',
  },
  {
    id: 3,
    title: '泰式按摩讚讚',
    description:
      'In a world where nature has nearly vanished, a botanist discovers the last surviving garden and fights to protect it.',
    poster: `/images/randomImg/${randomImages[2]}`,
    backdrop: `/images/randomImg/${randomImages[2]}`,
    year: 2025,
    rating: 'PG',
    duration: '1h 42m',
    genre: ['Drama', 'Fantasy'],
    videoSrc: 'https://github.com/Lilian-Hsiang/netflix-video/releases/download/v1.0/C58C3A20-0C51-444A-A407-96D861E292F8.MOV',
  },
  {
    id: 4,
    title: '體驗日本和服~',
    description:
      'A detective navigates the rain-soaked neon streets of a futuristic city, hunting a hacker who can rewrite digital identities.',
    poster: `/images/randomImg/${randomImages[3]}`,
    backdrop: `/images/randomImg/${randomImages[3]}`,
    year: 2024,
    rating: 'R',
    duration: '2h 05m',
    genre: ['Sci-Fi', 'Noir'],
    videoSrc: 'https://github.com/Lilian-Hsiang/netflix-video/releases/download/v1.0/9F3FB7A8-79CB-4FE8-9847-FBBBB3253F4A.MP4',
  },
  {
    id: 5,
    title: '生日花花好幸福',
    description:
      'A climber attempts the most dangerous summit in the world, facing both the mountain and personal demons from the past.',
    poster: `/images/randomImg/${randomImages[4]}`,
    backdrop: `/images/randomImg/${randomImages[4]}`,
    year: 2025,
    rating: 'PG-13',
    duration: '1h 50m',
    genre: ['Adventure', 'Drama'],
    videoSrc: 'https://github.com/Lilian-Hsiang/netflix-video/releases/download/v1.0/6D8B9F28-5B5F-4022-BE31-A54369D7FD6F.MP4',
  },
  {
    id: 6,
    title: '和服體驗gogo!',
    description:
      "A renowned chef opens a secret midnight restaurant where every dish tells a story, drawing in the city's most curious food lovers.",
    poster: `/images/randomImg/${randomImages[5]}`,
    backdrop: `/images/randomImg/${randomImages[5]}`,
    year: 2024,
    rating: 'PG',
    duration: '1h 35m',
    genre: ['Comedy', 'Drama'],
    videoSrc: 'https://github.com/Lilian-Hsiang/netflix-video/releases/download/v1.0/52D0A46A-56AD-4887-8B0E-474861080172.MP4',
  },
  {
    id: 7,
    title: '泰國佛寺',
    description:
      'A group of hackers discovers a hidden code embedded in the internet itself, one that could either save or destroy civilization.',
    poster: `/images/randomImg/${randomImages[6]}`,
    backdrop: `/images/randomImg/${randomImages[6]}`,
    year: 2025,
    rating: 'PG-13',
    duration: '2h 10m',
    genre: ['Thriller', 'Sci-Fi'],
    videoSrc: 'https://github.com/Lilian-Hsiang/netflix-video/releases/download/v1.0/3D8EAD15-1CDB-4684-B1CF-D6B885F3B2EA.MOV',
  },
  {
    id: 8,
    title: 'Wildflower',
    description:
      'A young artist returns to her small hometown and rediscovers love, family, and the beauty of simple things.',
    poster: `/images/randomImg/${randomImages[7]}`,
    backdrop: `/images/randomImg/${randomImages[7]}`,
    year: 2024,
    rating: 'PG',
    duration: '1h 45m',
    genre: ['Romance', 'Drama'],
  },
  {
    id: 9,
    title: 'Iron Tide',
    description:
      'During a massive oceanic storm, a submarine crew must survive not only the elements but a mysterious force lurking beneath.',
    poster: `/images/randomImg/${randomImages[8]}`,
    backdrop: `/images/randomImg/${randomImages[8]}`,
    year: 2025,
    rating: 'R',
    duration: '2h 00m',
    genre: ['Action', 'Horror'],
  },
  {
    id: 10,
    title: 'Stardust Lullaby',
    description:
      'An animated tale about a child who befriends a fallen star and together they travel the galaxy bringing light to dark worlds.',
    poster: `/images/randomImg/${randomImages[9]}`,
    backdrop: `/images/randomImg/${randomImages[9]}`,
    year: 2025,
    rating: 'G',
    duration: '1h 30m',
    genre: ['Animation', 'Family'],
  },
  {
    id: 11,
    title: 'Phantom Frequencies',
    description:
      'A radio engineer picks up mysterious broadcasts from what seems to be another dimension, leading to a mind-bending investigation.',
    poster: `/images/randomImg/${randomImages[10]}`,
    backdrop: `/images/randomImg/${randomImages[10]}`,
    year: 2024,
    rating: 'PG-13',
    duration: '1h 55m',
    genre: ['Mystery', 'Sci-Fi'],
  },
  {
    id: 12,
    title: 'Desert Mirage',
    description:
      'Two strangers meet in the vast desert and must rely on each other to survive, discovering unexpected truths along the way.',
    poster: `/images/randomImg/${randomImages[11]}`,
    backdrop: `/images/randomImg/${randomImages[11]}`,
    year: 2025,
    rating: 'PG-13',
    duration: '1h 48m',
    genre: ['Drama', 'Thriller'],
  },
  {
    id: 13,
    title: 'Velocity',
    description:
      "The world's fastest street racer is drawn into an underground tournament where the stakes are life or death.",
    poster: `/images/randomImg/${randomImages[12]}`,
    backdrop: `/images/randomImg/${randomImages[12]}`,
    year: 2024,
    rating: 'PG-13',
    duration: '2h 02m',
    genre: ['Action', 'Sport'],
  },
  {
    id: 14,
    title: 'Forgotten Kingdom',
    description:
      'An archaeologist discovers a hidden civilization deep underground and must decide whether to reveal it to the world.',
    poster: `/images/randomImg/${randomImages[13]}`,
    backdrop: `/images/randomImg/${randomImages[13]}`,
    year: 2025,
    rating: 'PG',
    duration: '2h 20m',
    genre: ['Adventure', 'Fantasy'],
  },
  {
    id: 15,
    title: 'Pixel Hearts',
    description:
      'Two gamers competing in a virtual world tournament discover their online rivalry hides a real-world connection.',
    poster: `/images/randomImg/${randomImages[14]}`,
    backdrop: `/images/randomImg/${randomImages[14]}`,
    year: 2024,
    rating: 'PG',
    duration: '1h 40m',
    genre: ['Romance', 'Comedy'],
  },
  {
    id: 16,
    title: 'Deep Silence',
    description:
      'A documentary filmmaker investigates the mysterious disappearance of an entire deep-sea research team.',
    poster: `/images/randomImg/${randomImages[15]}`,
    backdrop: `/images/randomImg/${randomImages[15]}`,
    year: 2025,
    rating: 'R',
    duration: '1h 52m',
    genre: ['Documentary', 'Thriller'],
  },
  {
    id: 17,
    title: 'Lantern Festival',
    description:
      'During a magical lantern festival, wishes come true — but at a cost no one expects.',
    poster: `/images/randomImg/${randomImages[16]}`,
    backdrop: `/images/randomImg/${randomImages[16]}`,
    year: 2024,
    rating: 'PG',
    duration: '1h 38m',
    genre: ['Fantasy', 'Drama'],
  },
  {
    id: 18,
    title: 'Circuit Breaker',
    description:
      'When AI systems across the globe start acting independently, a small team of engineers race to prevent a digital apocalypse.',
    poster: `/images/randomImg/${randomImages[17]}`,
    backdrop: `/images/randomImg/${randomImages[17]}`,
    year: 2025,
    rating: 'PG-13',
    duration: '2h 08m',
    genre: ['Sci-Fi', 'Thriller'],
  },
]

const ringMovie: Movie = {
  id: 100,
  title: '對戒製作紀錄',
  description: '一段精心記錄的對戒製作過程，從金屬熔煉到細緻雕琢，見證愛情的永恆象徵誕生。',
  poster: `/images/randomImg/${randomImages[13]}`,
  backdrop: `/images/randomImg/${randomImages[13]}`,
  year: 2025,
  rating: 'G',
  duration: '10m',
  genre: ['Documentary'],
  videoSrc: 'https://github.com/Lilian-Hsiang/netflix-video/releases/download/v1.0/%E5%B0%8D%E6%88%92%E8%A3%BD%E4%BD%9C%E7%B4%80%E9%8C%84.mp4',
}

const elephantMovie: Movie = {
  id: 101,
  title: '大象大象小費小費',
  description:
    '在大學中一堂日常不過的日文課上，兩個不平凡的靈魂相遇了，他們的友誼在課堂上日常中逐漸升溫，最終譜出一段浪漫的戀曲，這段長達八年的愛情最終究竟會何去何從?',
  poster: `/images/randomImg/${randomImages[0]}`,
  backdrop: `/images/randomImg/${randomImages[0]}`,
  year: 2025,
  rating: 'PG-13',
  duration: '2h 15m',
  genre: ['Romance', 'Drama'],
  videoSrc: 'https://github.com/Lilian-Hsiang/netflix-video/releases/download/v1.0/uvvw63A-c2sMavHRp4EzY3341HTgpYrrEnIiTAqlmFo.MP4',
}

export const categories: ContentCategory[] = [
  {
    id: 'trending',
    title: '熱門趨勢',
    movies: [ringMovie, elephantMovie, ...allMovies.slice(1, 7)],
  },
  {
    id: 'new-releases',
    title: '最新上架',
    movies: allMovies.slice(4, 12),
  },
  {
    id: 'action',
    title: '動作冒險',
    movies: allMovies.filter((m) => m.genre.some((g) => ['Action', 'Adventure'].includes(g))),
  },
  {
    id: 'scifi',
    title: '旅遊奇幻',
    movies: allMovies.filter((m) => m.genre.some((g) => ['Sci-Fi', 'Fantasy'].includes(g))),
  },
  {
    id: 'drama',
    title: '愛情浪漫片',
    movies: allMovies.filter((m) => m.genre.includes('Drama')),
  },
  {
    id: 'my-list',
    title: '我的片單',
    movies: [allMovies[0], allMovies[3], allMovies[6], allMovies[9], allMovies[14]],
  },
]

export const featuredMovie: Movie = allMovies[0]

export default allMovies
