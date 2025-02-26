import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumsService, Album } from '../../services/albums.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  updatedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = parseInt(idParam, 10);
      this.albumsService.getAlbum(id).subscribe((data) => {
        this.album = data;
        this.updatedTitle = data.title;
      });
    }
  }

  save() {
    if (!this.album) return;
    this.albumsService.updateAlbum(this.album.id, { title: this.updatedTitle })
      .subscribe((updated) => {
        this.album = updated;
        alert('Album updated!');
      });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }

  goToPhotos() {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
}
