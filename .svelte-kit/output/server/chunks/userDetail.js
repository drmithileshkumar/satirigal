const initializeNewUserDetail = (publicID, type, details, common) => {
  let newUserDetail = {
    publicID,
    //public
    type,
    details,
    //person: gender, dob, rank, experience; other: established
    common
    //bio, email, zip, city, country, website, waves, following, followers
  };
  return newUserDetail;
};
export {
  initializeNewUserDetail as i
};
