function (user, context, callback) {
    // TODO: implement your rule
    request.post({
        url: configuration.IP_BLACKLIST_URL + context.request.ip
    },
    function (err, response, body) {
      if (response && response.statusCode === 200) {
        callback(err || new UnauthorizedError("IP blacklisted"), user, context);      
      } else {
        callback(null, user, context);      
      }      
    });  
  }