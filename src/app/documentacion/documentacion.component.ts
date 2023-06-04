import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent {
  pdfUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Establece la URL del archivo PDF
    this.pdfUrl = this.sanitizer.bypassSecurityTrustUrl('/assets/documentacion.pdf');
  }
  
}
