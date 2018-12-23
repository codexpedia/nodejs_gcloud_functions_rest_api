/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */

exports.restApi = (req, res) => {

	const requestInfo = {
      'customMsg': "This is a custom message, the other fields here are some of the request data, you can do all sorts of things you can imagine with these request data." ,
	  	'method': req.method,
      'headers': req.headers,
	  	'url': req.url,
	  	'path': req.path,
	  	'body': req.body
	}

  /**
   * Other things you can do here:
   * Do something according to the request method, is it a GET, POST, PUT or DELETE.
   * Do something according to the headers, does is have a token you need to verify before processing the request?
   * Do something according to the url and path, do you recognize these url and path?
   * Do somethign according to the body, does the body contain anything intersted to you?
   */

   // Not doing anything for now other than just sending back some of the request info.
  res.status(200).send(JSON.stringify(requestInfo, null, 2));
};


// curl -H "API_TOKEN: 12345" -H "Content-Type: application/json" -X GET https://replace-this-with-your-cloud-project-info.cloudfunctions.net/simple-rest-api/hello/world/?userid=123

// curl -H "Content-Type: application/json" -X POST -d '{"id":"123","name":"james"}' https://replace-this-with-your-cloud-project-info.cloudfunctions.net/simple-rest-api/hello/world/

// curl -X PUT https://replace-this-with-your-cloud-project-info.cloudfunctions.net/simple-rest-api/user

// curl -X DELETE https://replace-this-with-your-cloud-project-info.cloudfunctions.net/simple-rest-api/user



