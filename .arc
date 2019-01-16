#
# Warning! Do Not Edit
# --------------------
# This is a generated file and will be overwritten
#
@app
begin-app

@http
get /
get /time

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
