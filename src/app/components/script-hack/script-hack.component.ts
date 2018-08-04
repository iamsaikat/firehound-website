import { Component, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-script-hack',
  templateUrl: './script-hack.component.html'
})
export class ScriptHackComponent implements AfterViewInit {
  @Input() src: string;
  @Input() type: string;
  @ViewChild('script') script: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.convertToScript();
  }

  convertToScript() {
      const element = this.script.nativeElement;
      const script = document.createElement('script');
      script.type = this.type ? this.type : 'text/javascript';
      if (this.src) {
          script.src = this.src;
      }
      if (element.innerHTML) {
          script.innerHTML = element.innerHTML;
      }
      const parent = element.parentElement;
      parent.parentElement.replaceChild(script, parent);
  }

}
