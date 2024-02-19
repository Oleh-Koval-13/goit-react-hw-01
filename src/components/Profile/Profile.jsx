import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
    return (<div className={css.profileContainer}>
 <div>
   <img
    src={image}
    alt="User avatar"
    className={css.profileImage}
    />
    <p className={css.profileName}>{name}</p>
    <p className={css.profileTagLocation}>@{tag}</p>
    <p className={css.profileTagLocation}>{location}</p>
  </div>

  <ul className={css.profileList}>
    <li className={css.profileListItem}>
      <span>Followers</span>
      <span className={css.profileListItemBottom}>{stats.followers}</span>
    </li>
    <li className={css.profileListItem}>
     <span>Views</span>
     <span className={css.profileListItemBottom}>{stats.views}</span>
    </li>
    <li className={css.profileListItem}>
     <span>Likes</span>
    <span className={css.profileListItemBottom}>{stats.likes}</span>
    </li>
   </ul>
</div>
)
};