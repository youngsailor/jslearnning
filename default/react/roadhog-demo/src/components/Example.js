import React from 'react';
import axios from 'axios';
const Example = () => {
  return (
    <div>
        //访问的就是.webpackrc中定义的代理地址，后面接上/user
      <button onClick={()=>axios.get('api/users')}>send ajsx</button>
    </div>
  );
};

Example.propTypes = {
};

export default Example;
