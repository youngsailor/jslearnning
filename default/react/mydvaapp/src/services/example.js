import request from '../utils/request';
import {delay} from '../utils/utils';

export function query() {
  return request('/api/users');
}
