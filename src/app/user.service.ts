import { Injectable,Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./environments/environment";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}
  checkUsername(username: string) {
    console.log("this is service all ", username);
    return this.http.get("${environment.apiUrl}/checkusername/${username}");
  }
}
