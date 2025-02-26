import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Album {
  userId: number;
  id: number;
  title: string;
}
export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  createAlbum(album: Partial<Album>): Observable<Album> {
    return this.http.post<Album>(`${this.BASE_URL}/albums`, album); //post for creating a new album
  }

  updateAlbum(id: number, album: Partial<Album>): Observable<Album> {
    return this.http.put<Album>(`${this.BASE_URL}/albums/${id}`, album); //put for updating
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/albums/${id}`);
  }

  getAlbumPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.BASE_URL}/albums/${albumId}/photos`);
  }
}