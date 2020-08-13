import {profileTitle, profileSubtitle} from '../utils/constants.js'

export default class UserInfo {
    constructor({nameSelector, jobSelector}) {
      this._name = document.querySelector(nameSelector)
      this._job = document.querySelector(jobSelector)
    } 
  
    getUserInfo() {
      const userInfo = {name: this._name.textContent, job: this._job.textContent}
      return userInfo
    }
  
    setUserInfo(inputValues) {
      profileTitle.textContent = inputValues.name
      profileSubtitle.textContent = inputValues.job}
    }