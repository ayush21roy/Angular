import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './user-auth/login/login.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button'
import { log } from 'console';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildOneComponent } from './child-one/child-one.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, LoginComponent,
    CommonModule, HeaderComponent, FormsModule, MatSlideToggleModule, MatButtonModule,
    ChildComponent, UserDetailsComponent, ChildOneComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'blog';
  titleForm = 'form';
  getName() {
    alert("function called")
  }
  show = true;
  userData: any = {}

  getData(data: NgForm) {
    console.warn(data);
    this.userData = data;
  }

  // toggle-logic
  display = true
  toggle() {
    this.display = !this.display
  }

  //to-do list
  list: any[] = []
  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item });
    console.warn(this.list);
  }

  removeTask(id: number) {
    console.log(id);
    this.list = this.list.filter((item) => item.id !== id)
  }

  // transfer data from parent to child
  data = 10;
  updateChild() {
    this.data = Math.floor(Math.random() * 10)
  }

  userDetails = [
    { name: 'Ayush', email: 'a@A.com' },
    { name: 'Bittu', email: 'b@B.com' },
    { name: 'Cathrine', email: 'c@C.com' },
  ]

  // child to parent data

  updateData(item: string) {
    console.warn(item);
  }
}

