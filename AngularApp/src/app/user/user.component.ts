import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../shared/user.service';
import { from } from 'rxjs';

declare var M: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] ,
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }//edit to private to public

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = {
        _id: "",
        name: "",
        equipment:"",
        time: null,
        damage: ""
      }
    }
  }

  onSubmit(form : NgForm)
  {
    this.userService.postUser(form.value).subscribe((res) => {
      this.resetForm();
      M.toast({html: 'Saved successfully', classes: 'rounded'});
    });
  }

}
