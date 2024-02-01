export function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success, error);

    function success(data) {
      resolve(data);
    }

    function error(error) {
      reject(error);
    }
  });
}
