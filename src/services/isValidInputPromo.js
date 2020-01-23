const isValidInputPromo = input => {
  let n = /^[a-zA-Z0-9]{4,25}\b/;

  if (input.search(n) === 0) {
    return true;
  } else {
    return false;
  }
};

export default isValidInputPromo;
