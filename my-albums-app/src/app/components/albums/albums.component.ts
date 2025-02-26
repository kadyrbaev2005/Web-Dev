import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlbumsService, Album } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  newAlbumTitle = '';

  constructor(
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchAlbums();
  }

  fetchAlbums() {
    this.albumsService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  deleteAlbum(id: number) {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }

  createAlbum() {
    if (!this.newAlbumTitle.trim()) return;
    const newAlb: Partial<Album> = {
      title: this.newAlbumTitle,
      userId: 1
    };
    this.albumsService.createAlbum(newAlb).subscribe((created) => {
      this.albums.unshift(created);
      this.newAlbumTitle = '';
    });
  }

  goToAlbumDetail(albumId: number) {
    this.router.navigate(['/albums', albumId]);
  }
}
