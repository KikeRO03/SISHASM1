import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-pdf',
  standalone: true,
  imports: [],
  templateUrl: './pdf.component.html',
  styleUrl: './pdf.component.css'
})
export class PdfComponent{


  constructor() { }

doc = {
  orientation: 'p',
  unit: 'mm',
  format: 'a4',
  putOnlyUsedFonts:true,
  floatPrecision: 16 // or "smart", default is 16
 }
 
}