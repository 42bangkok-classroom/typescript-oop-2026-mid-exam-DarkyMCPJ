interface FullAlbum {}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]>







/*{
  return fetch(ALBUMS_URL)
    .then((res) => res.json())
    .then((albums) => {
      return fetch(PHOTOS_URL)
        .then((res) => res.json())
        .then((photos) => {
          const filteredAlbums = userIds
            ? albums.filter((album: any) => userIds.includes(album.userId))
            : albums;

          return filteredAlbums.map((album: any) => {
            const albumPhotos = photos.filter(
              (photo: any) => photo.albumId === album.id
            );
            return { ...album, photos: albumPhotos };
          });
        });
    });
}*/

//test