import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatTreeModule } from "@angular/material/tree";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";

import { SharedModule } from "src/app/shared/shared.module";
import { ComponentsModule } from "src/app/components/components.module";

import { Settings } from "./settings";
import { PlaylistSelector } from "./playlist-selector/playlist-selector";
import { TimezoneSettings } from "./timezone-settings/timezone-settings";
import { YouTubeSettings } from "./youtube-settings/youtube-settings";
import { VTubersSettings } from "./vtubers-settings/vtubers-settings";
import { ThemeSettings } from "./theme-settings/theme-settings";
import { NgswSettings } from "./ngsw-settings/ngsw-settings";
import { Licenses } from "./licenses/licenses";
import { PrivacyPolicy } from "./privacy-policy/privacy-policy";

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatTreeModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: "",
        component: Settings,
        pathMatch: "full",
      },
      {
        path: "ngsw",
        component: NgswSettings,
      },
      {
        path: "licenses",
        component: Licenses,
      },
      {
        path: "privacy",
        component: PrivacyPolicy,
      },
    ]),
  ],
  declarations: [
    Settings,
    ThemeSettings,
    TimezoneSettings,
    PlaylistSelector,
    VTubersSettings,
    YouTubeSettings,
    NgswSettings,
    Licenses,
    PrivacyPolicy,
  ],
})
export class SettingsModule {}
