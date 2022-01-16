import { VTuberIds, BatchIds } from "vtubers";

export type MessageIds =
  | "updatedAt"
  | "name"
  | "total"
  | "subscribers"
  | "views"
  | "lastDay"
  | "last7Days"
  | "last30Days"
  | "youtubeChannel"
  | "bilibiliChannel"
  | "youtubeStream"
  | "youtubeSchedule"
  | "settings"
  | "toggleDarkMode"
  | "averageViewers"
  | "maximumViewers"
  | "streamHasEnded"
  | "streaming"
  | "streamStartTime"
  | "streamDuration"
  | "youtubeSubscribers"
  | "bilibiliSubscribers"
  | "youtubeViews"
  | "bilibiliViews"
  | "vtuberSelected"
  | "selectLanguage"
  | "recentStreams"
  | "streamViewers"
  | "selectDate"
  | "noStream"
  | "streamTimeOn"
  | "streamTimes"
  | "liveChat"
  | "paidLiveChat"
  | "normal"
  | "member"
  | "streamLikes"
  | "blue"
  | "lightBlue"
  | "green"
  | "yellow"
  | "orange"
  | "magenta"
  | "red"
  | "GBP"
  | "JPY"
  | "KRW"
  | "ILS"
  | "EUR"
  | "PHP"
  | "INR"
  | "USD"
  | "AUD"
  | "AED"
  | "ARS"
  | "BAM"
  | "BGN"
  | "BOB"
  | "BYN"
  | "CAD"
  | "CHF"
  | "CLP"
  | "COP"
  | "CRC"
  | "CZK"
  | "DKK"
  | "EGP"
  | "GTQ"
  | "HKD"
  | "HNL"
  | "HRK"
  | "HUF"
  | "ISK"
  | "MXN"
  | "MYR"
  | "NIO"
  | "NOK"
  | "TWD"
  | "NZD"
  | "PEN"
  | "PLN"
  | "BRL"
  | "RON"
  | "RSD"
  | "RUB"
  | "SAR"
  | "SEK"
  | "SGD"
  | "TRY"
  | "ZAR"
  | VTuberIds
  | BatchIds;

export type Translations = Record<MessageIds, string>;
