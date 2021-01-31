/** helps format albums users photos data to single
 *  {...albums,user:...users,firstphoto thumbnail}
 *
 * @param {*} albums
 * @param {*} users
 * @param {*} photos
 */

const formatAlbumData = (albums, users, photos) => {
  const filterById = (id, users) => {
    return users.filter((user) => user.id == id)[0];
  };

  const formattedAlbum = [];
  let imageIndex = 0;
  for (let i = 0; i < albums.length; i++) {
    formattedAlbum.push({
      ...albums[i],
      user: filterById(albums[i].userId, users),
      thumbnailUrl: photos[imageIndex].thumbnailUrl,
    });
    imageIndex + 50;
  }
  //console.log(formattedAlbum);
  return formattedAlbum;
};
export default formatAlbumData;
