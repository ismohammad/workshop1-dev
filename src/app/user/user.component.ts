import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Inject } from "@angular/core";
import { first } from "rxjs/operators";
import { UserInfo } from "./model/user.info";
import { UserService } from "../user.service";

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl = "dashboard";
  users: UserInfo[] = [];

  constructor(
    @Inject(FormBuilder)
    private formBuilder: FormBuilder,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(Router) private router: Router,
    @Inject(UserService) private userService: UserService
  ) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    console.log("This is u#####sername return URL ",this.returnUrl);
    this.checkusername();
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log("This is username ", this.f.username.value);
    console.log("This is password ", this.f.password.value);
    console.log("This is returnUrl ", this.returnUrl);

    this.router.navigate([this.returnUrl]);
  }

  checkusername(): void {
    const username = +this.route.snapshot.paramMap.get('username');
    console.log("this is usercomponet call ", username);
    this.userService
      .checkusername(username)
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }
}
