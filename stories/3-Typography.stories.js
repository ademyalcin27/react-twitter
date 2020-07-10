import React from 'react';
import * as Icons from '../components/icons';
import TextTitle from '../components/text-title';


export default {
  title: 'Typograhpy',
};
export const Title = () => (
  <div>
    <TextTitle>Hello World</TextTitle>
    <TextTitle bold={false}>Hello World</TextTitle>
  </div>
);
