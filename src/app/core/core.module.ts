import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpModule } from "@angular/http";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from 'src/app/utils/svg.util';
import { SharedModule } from "../shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SlidebarComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SlidebarComponent,
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MdIconRegistry, ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error("模块已经存在，不能再次加载！");
    }
    loadSvgResources(ir, ds);
  }
}
