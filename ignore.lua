local response = syn.request(
    {
        Url = "http://localhost:3000/api/auth",  -- This website helps debug HTTP requests
        Method = "POST",
        Headers = {
            ["Content-Type"] = "application/json"
        }
    }
)

for i, v in pairs(response) do
    print(i, v)
end