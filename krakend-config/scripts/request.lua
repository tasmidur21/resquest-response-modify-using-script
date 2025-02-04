function proxy.request(req)
    req.headers["X-Custom-Lua"] = "ModifiedByLua"
end
