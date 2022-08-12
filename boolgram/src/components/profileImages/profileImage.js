import './profileImage.css'

function UserProfileImage({imgSrc, imgAltText, size=55, border=false}) {
  let imgStyleClass = border ? 'profile-circular-image-with-border' : 'profile-circular-image';
  return (
    <img src={imgSrc} alt={imgAltText} width={size} height={size} className={imgStyleClass} />
  );
}

export default UserProfileImage;