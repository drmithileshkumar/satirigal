import './stores-ac084a5d.js';
import { v4 } from 'uuid';

const createPublicID = (name, count) => {
  const splitName = name.split(" ").map((part) => part.trim()).join("");
  return count > 0 ? `${splitName}${count}` : `${splitName}`;
};
const initializeNewUser = (name, phone, count) => {
  let newUser = {
    phone,
    //private
    name,
    profile: "",
    //photo
    banner: "",
    creationTimestamp: Date.now(),
    //private
    privateID: v4(),
    //private
    publicID: createPublicID(name, count),
    //public
    otpID: v4(),
    //private
    products: {},
    likes: []
  };
  return newUser;
};

export { initializeNewUser as i };
//# sourceMappingURL=user-7fc5b247.js.map
