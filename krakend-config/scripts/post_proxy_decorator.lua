function post_proxy_decorator(resp)
    print("Calling post_proxy_decorator")

    -- Load the response
    local response = resp:load()
    if not response then
        print("Error: No response loaded")
        return
    end

    -- Retrieve the response data
    local responseData = response:data()
    if not responseData then
        print("Error: No response data found")
        return
    end

    -- Log the response data for debugging
    -- Assuming responseData has a method to convert to a table or JSON
    -- local responseDataTable = responseData:to_table()  -- Hypothetical method
    -- print("Response Data:", require('json').encode(responseDataTable))  -- Convert to JSON string for better readability

    -- Extract the source result from the response data
    local responseContent = responseData:get("source_result")
    if not responseContent then
        print("Error: No source_result found in response data")
        responseData:set("result", "failed")
        return
    end

    -- Extract the message from the source result
    local message = responseContent:get("avatar_url")
    print("Message",message)
    if not message then
        print("Error: No message found in source_result")
        responseData:set("result", "failed")
        return
    end

    -- Check if the message contains "Successfully"
    local isSuccess = string.match(message, "Successfully") ~= nil

    -- Set the result based on the success check
    if isSuccess then
        responseData:set("result", "success")
        print("Result set to success")
    else
        responseData:set("result", "failed")
        print("Result set to failed")
    end
end