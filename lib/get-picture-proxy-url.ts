export const getPictureProxyURL = (url: string | undefined) => {
  let picture: string;
  if (url && url.startsWith("ipfs://")) {
    const result = url.slice(7, url.length);
    picture = `https://lens.infura-ipfs.io/ipfs/${result}`;
  } else {
    picture = "/default_profile.jpeg";
  }

  return picture;
};
