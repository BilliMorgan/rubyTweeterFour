require 'rack'

class App
  def call(env)


    # print env['PATH_INFO']


    status = 200
    headers = {
    "Access-Control-Allow-Headers" => "x-requested-with, content-type", 
    "Access-Control-Allow-Origin" => "*",
    # "Access-Control-Request-Headers" => "*",
    "Content-Type" => "application/json",
    
  }
    body = [
      "hello world from back-end"
    ]
    [status, headers, body]
  end
end
