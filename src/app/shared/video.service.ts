import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from '../API';

@Injectable({
  providedIn: 'root'
})
export class VideoService extends API {
  header: HttpHeaders;
  url = "videos";

  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set ('Content-type', 'application/json');
  }

  async getVideo() {
    return this.get(`${this.url}`, this.header).toPromise();
  }

  
  async getVideoById(id: number) {
    return this.get(`${this.url}/${id}`, this.header).toPromise();
  }


  async postVideo(data) {
    return this.post(`${this.url}`, data, this.header).toPromise();
  }

  async putVideo(id: number, data) {
    return this.put(`${this.url}/${id}`, data, this.header).toPromise();
  }

  async deleteVideo(id: number) {
    return this.delete(`${this.url}/${id}`, this.header).toPromise();
  }
}
