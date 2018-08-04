import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptHackComponent } from './script-hack/script-hack.component';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScriptHackComponent,
    FileSizePipe
  ],
  exports: [
    ScriptHackComponent,
    FileSizePipe
  ]
})
export class ComponentsModule { }
