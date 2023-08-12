import { v as verifyAndDecodeJwt } from './jwt-9769a5f5.js';
import { c as cookie } from './index-d3ea383c.js';
import 'jsonwebtoken';
import './index3-f1aa5d16.js';
import './index-9b9a1ed0.js';
import './index2-56d214e2.js';

const getUser = (event) => {
  if (!event.request.headers.get("cookie")) {
    return null;
  }
  const cookies = cookie.parse(event.request.headers.get("cookie"));
  if (cookies.jwt) {
    return verifyAndDecodeJwt(cookies.jwt);
  }
};
async function handle({ event, resolve }) {
  event.locals.user = getUser(event);
  const response = await resolve(event);
  return response;
}

export { handle };
//# sourceMappingURL=hooks.server-d0ee052f.js.map
