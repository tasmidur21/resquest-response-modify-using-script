function proxy.response(res)
    res.body = string.gsub(res.body, "Hello from Backend", "Modified by Lua")
end
