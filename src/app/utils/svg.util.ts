import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MdIconRegistry, ds: DomSanitizer) => {
    const imgDir = 'assets/img';
    const sidebarDir = `${imgDir}/sidebar`;
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl('assets/CI.svg'));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl('assets/CI.svg'));
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl('assets/CI.svg'));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl('assets/CI.svg'));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl('assets/CI.svg'));
}