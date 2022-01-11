import type { Translations } from "./data";

import locale from "@angular/common/locales/en";
import dateFnsLocale from "date-fns/locale/en-US";

const translations: Translations = {
  // UI
  updatedAt: "Última vez actualizado {$INTERPOLATION}",
  name: "Nombre",
  total: "Total",
  subscribers: "Subscriptores",
  views: "Visualizaciones",
  lastDay: "Último día",
  last7Days: "Últimos 7 días",
  last30Days: "Últimos 30 días",
  youtubeChannel: "Canales de Youtube",
  bilibiliChannel: "Canales de Bilibili",
  youtubeStream: "Directo de YouTube",
  youtubeSchedule: "Horario YouTube",
  settings: "Configuración",
  toggleDarkMode: "Modo Noche",
  averageViewers: "Promedio de Espectadores",
  maximumViewers: "Máximo de Espectadores",
  streamHasEnded: "Directo a terminado",
  streaming: "Directo en vivo",
  streamStartTime: "Hora de comienzo",
  streamDuration: "Duración",
  youtubeSubscribers: "Subscriptores de Youtube",
  bilibiliSubscribers: "Subscriptores de Bilibili",
  youtubeViews: "Reproducciones de YouTube",
  bilibiliViews: "Reproducciones de Bilibili",
  vtuberSelected: "VTuber seleccionado",
  selectLanguage: "Seleccionar Lenguaje",
  recentStreams: "Transmisiones recientes",
  streamViewers: "Espectadores",
  selectDate: "Seleccionar fecha",
  // TODO(i18n)
  noStream: "No stream on {$INTERPOLATION}",
  streamTimeOn: "Stream {$INTERPOLATION} on {$INTERPOLATION_1}",
  streamTimes: "Stream Times",

  // VTubers
  hololive: "Hololive Official",
  hololive_en: "Hololive English",
  hololive_id: "Hololive Indonesia",
  yagoo: "YAGOO",
  sora: "Tokino Sora",
  roboco: "Roboco",
  miko: "Sakura Miko",
  suisei: "Hoshimachi Suisei",
  fubuki: "Shirakami Fubuki",
  matsuri: "Natsuiro Matsuri",
  haato: "Akai Haato",
  aki: "Aki Rosenthal",
  mel: "Yozora Mel",
  choco: "Yuzuki Choco",
  choco_alt: "Yuzuki Choco Sub",
  shion: "Murasaki Shion",
  aqua: "Minato Aqua",
  subaru: "Oozora Subaru",
  ayame: "Nakiri Ayame",
  pekora: "Usada Pekora",
  rushia: "Uruha Rushia",
  flare: "Shiranui Flare",
  marine: "Houshou Marine",
  noel: "Shirogane Noel",
  kanata: "Amane Kanata",
  coco: "Kiryu Coco",
  watame: "Tsunomaki Watame",
  towa: "Tokoyami Towa",
  himemoriluna: "Himemori Luna",
  lamy: "Yukihana Lamy",
  nene: "Momosuzu Nene",
  botan: "Shishiro Botan",
  polka: "Omaru Polka",
  chloe: "Sakamata Chloe",
  iroha: "Kazama Iroha",
  koyori: "Hakui Koyori",
  laplus: "La+ Darknesss",
  lui: "Takane Lui",
  mio: "Ookami Mio",
  okayu: "Nekomata Okayu",
  korone: "Inugami Korone",
  azki: "AZKi",
  risu: "Ayunda Risu",
  moona: "Moona Hoshinova",
  iofi: "Airani Iofifteen",
  ollie: "Kureiji Ollie",
  melfissa: "Anya Melfissa",
  reine: "Pavolia Reine",
  amelia: "Watson Amelia",
  calliope: "Mori Calliope",
  gura: "Gawr Gura",
  inanis: "Ninomae Ina'nis",
  kiara: "Takanashi Kiara",
  irys: "IRyS",
  sana: "Tsukumo Sana",
  ceres: "Ceres Fauna",
  ouro: "Ouro Kronii",
  mumei: "Nanashi Mumei",
  hakos: "Hakos Baelz",
  luna: "Kaguya Luna",
  nekomiya: "Nekomiya Hinata",
  tamaki: "Inuyama Tamaki",
  ayamy: "Ayamy",
  nabi: "Aoi Nabi",
  pochimaru: "Pochimaru",
  nana: "Kagura Nana",
  ui: "Shigure Ui",
  miyabi: "Hanasaki Miyabi",
  izuru: "Kanade Izuru",
  aruran: "Arurandeisu",
  rikka: "Rikka",
  astel: "Astel Leda",
  temma: "Kishido Temma",
  roberu: "Yukoku Roberu",
  shien: "Kageyama Shien",
  oga: "Aragami Oga",

  // Batches
  hololive_og: "Hololive Talents",
  hololive_1st: "Hololive 1st Gen",
  hololive_2nd: "Hololive 2nd Gen",
  hololive_3rd: "Hololive 3rd Gen",
  hololive_4th: "Hololive 4th Gen",
  hololive_5th: "Hololive 5th Gen",
  hololive_6th: "Hololive 6th Gen",
  hololive_gamers: "Hololive Gamers",
  innk_music: "Innk Music",
  hololive_id_1st: "Hololive Indonesia 1st Gen",
  hololive_id_2nd: "Hololive Indonesia 2nd Gen",
  hololive_en_myth: "Hololive English -Myth-",
  hololive_en_vsinger: "Hololive English VSinger",
  hololive_en_council: "Hololive English -Council-",
  holostars_1st: "Holostars 1st Gen",
  holostars_2nd: "Holostars 2nd Gen",
  holostars_3rd: "Holostars 3rd Gen",
  others: "Otros",
};

export { locale, dateFnsLocale, translations };
