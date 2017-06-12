import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  /**
   * chack user for unique
   * @param data user credentials
   */
  checkUserCredsForUnique(data: Object): boolean {
    return true;
  }

  /**
   * send data to sever to register user
   * @param data credentials for user to register
   */
  sendRegisterData(data: Object): void {
  }

}
