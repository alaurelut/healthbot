angular.module('starter.services', [])

.service("User",
    function($http, $q) {

      // Return public API.
      return ({
          getMeasure: getMeasure
      });

        function getMeasure() {
            var url = 'http://wbsapi.withings.net/measure?action=getmeas&oauth_consumer_key=2bbd5cc2b5d0e673359cbdbc6f96406431532d3d091b604eb20b50d04bcd18&oauth_nonce=9e3cfa9b0b4a6f536a9f46df3603356f&oauth_signature=DwM8YMYUlZuci69F40i9HVA5NNM%3D&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1464172863&oauth_token=62b612ce26c6192ee4ee28b2ebbb62c1931341e6d44483817b85c08d0887&oauth_version=1.0&userid=10400566';

            var request = {
                method: 'GET',
                url: url,
                headers: {
                    "Accept": "*/*"
                }
            }

            return ($http(request).then(handleSuccess, handleError));
        }


        function handleSuccess(response) {
            return (response.data);
        }

        function handleError(response) {

            if (!angular.isObject(response.data) ||
                !response.data.message
            ) {

                return ($q.reject("An unknown error occurred."));

            }

            // Otherwise, use expected error message.
            return ($q.reject("An known error occurred."));

        }

    }
);
