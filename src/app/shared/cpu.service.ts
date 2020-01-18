import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from '../API';

@Injectable({
  providedIn: 'root'
})
export class CpuService extends API {
  header: HttpHeaders;
  url = "cpu";

  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set ('Content-type', 'application/json');
  }

  async getMother() {
    return this.get(`${this.url}`, this.header).toPromise();
  }

  
  async getMotherById(id: number) {
    return this.get(`${this.url}/${id}`, this.header).toPromise();
  }


  async postMother(data) {
    return this.post(`${this.url}`, data, this.header).toPromise();
  }

  async putMother(id: number, data) {
    return this.put(`${this.url}/${id}`, data, this.header).toPromise();
  }

  async deleteMother(id: number) {
    return this.delete(`${this.url}/${id}`, this.header).toPromise();
  }
}
