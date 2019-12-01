import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}
  
  checkusername(username: string) {
    console.log(
      "this is service all ",
      `${environment.apiUrl}/checkusername/${username}`
    );
    return this.http.get(`${environment.apiUrl}/checkusername/${username}`);
  }
}
