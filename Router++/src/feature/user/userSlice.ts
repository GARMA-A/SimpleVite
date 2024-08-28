type PositionObj = {
  coords: {
    latitude: number;
    longitude: number;
  };
  
};
type AddressObj = {
  locality: string;
  city: string;
  postcode: string;
  countryName: string;
};


function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  // 1) We get the user's geolocation position
  const positionObj: PositionObj = await getPosition() as PositionObj;
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  //const addressObj:AddressObj = await getAddress(position) as AddressObj;
 // const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  //return { position, address };
}
