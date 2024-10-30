import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { DBZMainComponent } from './pages/main-page.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    DBZMainComponent,
    FormComponent
  ],
  exports: [
    
    DBZMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
