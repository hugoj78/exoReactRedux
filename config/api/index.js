import md5 from 'md5';

const privateKey = '0e8c4864b78fb44bdbade257e3a0e0e881e1ba6c';

export const publicKey = '321149f137cc07f579ad944228b754b3';

export const timeStamp = '1';

export const hash = md5(`${timeStamp}${privateKey}${publicKey}`);
