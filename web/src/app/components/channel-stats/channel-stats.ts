import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { endOfDay, startOfDay, subDays } from "date-fns";

import { Channel, ChannelReportKind, Report, VTuber } from "src/app/models";
import { ApiService } from "src/app/shared";

@Component({
  selector: "hs-channel-stats",
  templateUrl: "channel-stats.html",
  styleUrls: ["channel-stats.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ChannelStats implements OnInit {
  constructor(private api: ApiService) {}

  @Input() vtuber: VTuber;

  start: number;
  end: number;

  get hasYouTubeChannel(): boolean {
    return !!this.vtuber.youtube;
  }

  get hasBilibiliChannel(): boolean {
    return !!this.vtuber.bilibili;
  }

  loading = false;

  channels: Channel[];
  reports: Report<ChannelReportKind>[];

  ngOnInit() {
    this.loading = true;

    const now = Date.now();

    this.api
      .channelReports({
        ids: [this.vtuber.id],
        metrics: [
          ChannelReportKind.youtubeChannelSubscriber,
          ChannelReportKind.youtubeChannelView,
          ChannelReportKind.bilibiliChannelSubscriber,
          ChannelReportKind.bilibiliChannelView,
        ],
        startAt: startOfDay(subDays(now, 7)),
        endAt: endOfDay(now),
      })
      .subscribe((res) => {
        this.loading = false;
        this.channels = res.channels;
        this.reports = res.reports;
      });
  }

  prev() {
    this.start -= 24 * 60 * 60 * 1000;
    this.end -= 24 * 60 * 60 * 1000;
    this.zoomX();
  }

  next() {
    this.start += 24 * 60 * 60 * 1000;
    this.end += 24 * 60 * 60 * 1000;
    this.zoomX();
  }

  changeRange(day: number) {
    this.end = this.reports[0].rows[this.reports[0].rows.length - 1][0];
    this.start = this.end - day * 24 * 60 * 60 * 1000;
    this.zoomX();
  }

  zoomX() {
    [
      "youtube_channel_subscriber",
      "youtube_channel_view",
      "bilibili_channel_subscriber",
      "bilibili_channel_view",
    ].forEach((id) =>
      (window as any).ApexCharts.exec(id, "zoomX", this.start, this.end)
    );
  }
}
