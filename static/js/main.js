function getmethod() {
    var langname = document.getElementById("language").value;
    if (langname == "Python") {
        document.getElementById("code-editor").innerHTML = `<pre>
        <code>
        import requests
        import json
        
        url="https://tusharapis.onrender.com/getrequest"
        headers = {"Content-Type": "application/json","apikey":"your api key"}
        
        response=requests.get(url=url,headers=headers)
        print(response.text)
        </code>
    </pre>
    `
    }
    else if (langname == "Java") {
        document.getElementById("code-editor").innerHTML = `<pre>
        <code>
        import java.io.BufferedReader;
        import java.io.InputStreamReader;
        import java.net.HttpURLConnection;
        import java.net.URL;
        
        public class HttpRequestExample {
            public static void main(String[] args) {
                try {
                    // Specify the URL
                    String url = "https://tusharapis.onrender.com/getrequest";
        
                    // Create a URL object
                    URL obj = new URL(url);
        
                    // Open a connection using HttpURLConnection
                    HttpURLConnection connection = (HttpURLConnection) obj.openConnection();
        
                    // Set the request method to GET
                    connection.setRequestMethod("GET");
        
                    // Set request headers
                    connection.setRequestProperty("Content-Type", "application/json");
        
                    // Get the response code
                    int responseCode = connection.getResponseCode();
                    System.out.println("Response Code: " + responseCode);
        
                    // Read the response
                    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                    String inputLine;
                    StringBuilder response = new StringBuilder();
        
                    while ((inputLine = in.readLine()) != null) {
                        response.append(inputLine);
                    }
                    in.close();
        
                    // Print the response
                    System.out.println("Response: " + response.toString());
        
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        
        </code>
    </pre>
    `
    }
    else {
        document.getElementById("code-editor").innerHTML = `<pre>
        <code>
        #include &lt;iostream&gt;
        #include &lt;string&gt;
        #include &lt;curl/curl.h&gt;
        
        // Callback function to handle the response data
        size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* output) {
            size_t total_size = size * nmemb;
            output->append(static_cast<char*>(contents), total_size);
            return total_size;
        }
        
        int main() {
            // Initialize cURL
            CURL* curl = curl_easy_init();
            if (!curl) {
                std::cerr << "Failed to initialize cURL" << std::endl;
                return 1;
            }
        
            // Specify the URL
            std::string url = "https://tusharapis.onrender.com/getrequest";
        
            // Set cURL options
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
        
            // Create a string to store the response
            std::string response;
        
            // Set the write callback function to handle the response
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
        
            // Perform the GET request
            CURLcode res = curl_easy_perform(curl);
        
            // Check for errors
            if (res != CURLE_OK) {
                std::cerr << "cURL request failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                // Print the response
                std::cout << "Response: " << response << std::endl;
            }
        
            // Clean up cURL
            curl_easy_cleanup(curl);
        
            return 0;
        }
        
        </code>
    </pre>
    `
    }
}


function postmethod() {
    var langname = document.getElementById("language").value;
    if (langname == "Python") {
        document.getElementById("code-editor").innerHTML = `<pre>
        <code>
        import requests
        import json
        
        url="https://tusharapis.onrender.com/postrequest"
        headers = {"Content-Type": "application/json","apikey":"your api key"}
        
        data={"id": id,"name": "Name","company": "Company"}
        payload=json.dumps(data)
        response=requests.post(url=url,data=payload,headers=headers)
        print(response.text)
        </code>
    </pre>
    `
    }
    else if (langname == "Java") {
        document.getElementById("code-editor").innerHTML = `<pre>
        <code>
        import java.io.BufferedReader;
        import java.io.DataOutputStream;
        import java.io.InputStreamReader;
        import java.net.HttpURLConnection;
        import java.net.URL;
        
        public class HttpPostExample {
            public static void main(String[] args) {
                try {
                    // Specify the URL
                    String url = "https://tusharapis.onrender.com/postrequest";
        
                    // Create a URL object
                    URL obj = new URL(url);
        
                    // Open a connection using HttpURLConnection
                    HttpURLConnection connection = (HttpURLConnection) obj.openConnection();
        
                    // Set the request method to POST
                    connection.setRequestMethod("POST");
        
                    // Set request headers
                    connection.setRequestProperty("Content-Type", "application/json");
        
                    // Enable input/output streams for reading/writing data
                    connection.setDoOutput(true);
                    connection.setDoInput(true);
        
                    // Create JSON data
                    String jsonData = "{\"id\": \"123\",\"name\": \"Name\",\"company\": \"Company\"}";
        
                    // Write the JSON data to the output stream
                    try (DataOutputStream wr = new DataOutputStream(connection.getOutputStream())) {
                        wr.writeBytes(jsonData);
                        wr.flush();
                    }
        
                    // Get the response code
                    int responseCode = connection.getResponseCode();
                    System.out.println("Response Code: " + responseCode);
        
                    // Read the response
                    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                    String inputLine;
                    StringBuilder response = new StringBuilder();
        
                    while ((inputLine = in.readLine()) != null) {
                        response.append(inputLine);
                    }
                    in.close();
        
                    // Print the response
                    System.out.println("Response: " + response.toString());
        
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        
        </code>
    </pre>
    `
    }
    else {
        document.getElementById("code-editor").innerHTML = `<pre>
        <code>
        #include &lt;iostream&gt;
        #include &lt;string&gt;
        #include &lt;curl/curl.h&gt;
        
        size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* output) {
            size_t total_size = size * nmemb;
            output->append(static_cast<char*>(contents), total_size);
            return total_size;
        }
        
        int main() {
            // Initialize cURL
            CURL* curl = curl_easy_init();
            if (!curl) {
                std::cerr << "Failed to initialize cURL" << std::endl;
                return 1;
            }
        
            // Specify the URL
            std::string url = "https://tusharapis.onrender.com/postrequest";
        
            // Set cURL options
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_POST, 1L);
        
            // Create JSON data
            std::string jsonData = "{\"id\": \"123\",\"name\": \"Name\",\"company\": \"Company\"}";
        
            // Set the request headers
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        
            // Set the POST data
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, jsonData.c_str());
        
            // Create a string to store the response
            std::string response;
        
            // Set the write callback function to handle the response
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
        
            // Perform the POST request
            CURLcode res = curl_easy_perform(curl);
        
            // Check for errors
            if (res != CURLE_OK) {
                std::cerr << "cURL request failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                // Print the response
                std::cout << "Response: " << response << std::endl;
            }
        
            // Clean up cURL
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        
            return 0;
        }
        
        </code>
    </pre>
    `
    }
}


function putmethod() {
    var langname = document.getElementById("language").value;
    if (langname == "Python") {
        document.getElementById("code-editor").innerHTML = `<pre>
        <code>
        import requests
        import json
        
        url="https://tusharapis.onrender.com/putrequest/id"
        headers = {"Content-Type": "application/json","apikey":"your api key"}
        
        data={"id": id,"name": "Name","company": "Company"}
        payload=json.dumps(data)
        response=requests.put(url=url,data=payload,headers=headers)
        print(response.text)
        #id and data["id"] should match for PUT request successful
        </code>
    </pre>
    `
    }
    else if (langname == "Java") {
        document.getElementById("code-editor").innerHTML = `<pre>
        <code>
        import java.io.BufferedReader;
        import java.io.DataOutputStream;
        import java.io.InputStreamReader;
        import java.net.HttpURLConnection;
        import java.net.URL;
        
        public class HttpPutExample {
            public static void main(String[] args) {
                try {
                    // Specify the URL
                    String url = "https://tusharapis.onrender.com/putrequest/id";
        
                    // Create a URL object
                    URL obj = new URL(url);
        
                    // Open a connection using HttpURLConnection
                    HttpURLConnection connection = (HttpURLConnection) obj.openConnection();
        
                    // Set the request method to PUT
                    connection.setRequestMethod("PUT");
        
                    // Set request headers
                    connection.setRequestProperty("Content-Type", "application/json");
        
                    // Enable input/output streams for reading/writing data
                    connection.setDoOutput(true);
                    connection.setDoInput(true);
        
                    // Create JSON data
                    String jsonData = "{\"id\": \"123\",\"name\": \"Name\",\"company\": \"Company\"}";
        
                    // Write the JSON data to the output stream
                    try (DataOutputStream wr = new DataOutputStream(connection.getOutputStream())) {
                        wr.writeBytes(jsonData);
                        wr.flush();
                    }
        
                    // Get the response code
                    int responseCode = connection.getResponseCode();
                    System.out.println("Response Code: " + responseCode);
        
                    // Read the response
                    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                    String inputLine;
                    StringBuilder response = new StringBuilder();
        
                    while ((inputLine = in.readLine()) != null) {
                        response.append(inputLine);
                    }
                    in.close();
        
                    // Print the response
                    System.out.println("Response: " + response.toString());
        
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        
        </code>
    </pre>
    `
    }
    else {
        document.getElementById("code-editor").innerHTML = `<pre>
        <code>
        #include &lt;iostream&gt;
        #include &lt;string&gt;
        #include &lt;curl/curl.h&gt;
        
        size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* output) {
            size_t total_size = size * nmemb;
            output->append(static_cast<char*>(contents), total_size);
            return total_size;
        }
        
        int main() {
            // Initialize cURL
            CURL* curl = curl_easy_init();
            if (!curl) {
                std::cerr << "Failed to initialize cURL" << std::endl;
                return 1;
            }
        
            // Specify the URL
            std::string url = "https://tusharapis.onrender.com/putrequest/id";
        
            // Set cURL options
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "PUT");
        
            // Create JSON data
            std::string jsonData = "{\"id\": \"123\",\"name\": \"Name\",\"company\": \"Company\"}";
        
            // Set the request headers
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        
            // Set the PUT data
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, jsonData.c_str());
        
            // Create a string to store the response
            std::string response;
        
            // Set the write callback function to handle the response
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
        
            // Perform the PUT request
            CURLcode res = curl_easy_perform(curl);
        
            // Check for errors
            if (res != CURLE_OK) {
                std::cerr << "cURL request failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                // Print the response
                std::cout << "Response: " << response << std::endl;
            }
        
            // Clean up cURL
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        
            return 0;
        }
        
        </code>
    </pre>
    `
    }
}

function deletemethod() {
    var langname = document.getElementById("language").value;
    if (langname == "Python") {
        document.getElementById("code-editor").innerHTML = `<pre>
        <code>
        import requests
        import json
        
        url="https://tusharapis.onrender.com/deleterequest/id"
        headers = {"Content-Type": "application/json","apikey":"your api key"}
        
        response=requests.delete(url=url,headers=headers)
        print(response.text)
        </code>
    </pre>
    `
    }
    else if (langname == "Java") {
        document.getElementById("code-editor").innerHTML = `<pre>
        <code>
        import java.io.BufferedReader;
        import java.io.InputStreamReader;
        import java.net.HttpURLConnection;
        import java.net.URL;
        
        public class HttpDeleteExample {
            public static void main(String[] args) {
                try {
                    // Specify the URL
                    String url = "https://tusharapis.onrender.com/deleterequest/id";
        
                    // Create a URL object
                    URL obj = new URL(url);
        
                    // Open a connection using HttpURLConnection
                    HttpURLConnection connection = (HttpURLConnection) obj.openConnection();
        
                    // Set the request method to DELETE
                    connection.setRequestMethod("DELETE");
        
                    // Set request headers
                    connection.setRequestProperty("Content-Type", "application/json");
        
                    // Get the response code
                    int responseCode = connection.getResponseCode();
                    System.out.println("Response Code: " + responseCode);
        
                    // Read the response
                    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                    String inputLine;
                    StringBuilder response = new StringBuilder();
        
                    while ((inputLine = in.readLine()) != null) {
                        response.append(inputLine);
                    }
                    in.close();
        
                    // Print the response
                    System.out.println("Response: " + response.toString());
        
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        
        </code>
    </pre>
    `
    }
    else {
        document.getElementById("code-editor").innerHTML = `<pre>
        <code>
        #include &lt;iostream&gt;
        #include &lt;string&gt;
        #include &lt;curl/curl.h&gt;
        
        size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* output) {
            size_t total_size = size * nmemb;
            output->append(static_cast<char*>(contents), total_size);
            return total_size;
        }
        
        int main() {
            // Initialize cURL
            CURL* curl = curl_easy_init();
            if (!curl) {
                std::cerr << "Failed to initialize cURL" << std::endl;
                return 1;
            }
        
            // Specify the URL
            std::string url = "https://tusharapis.onrender.com/deleterequest/id";
        
            // Set cURL options
            curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
            curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "DELETE");
        
            // Set the request headers
            struct curl_slist* headers = nullptr;
            headers = curl_slist_append(headers, "Content-Type: application/json");
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        
            // Create a string to store the response
            std::string response;
        
            // Set the write callback function to handle the response
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
        
            // Perform the DELETE request
            CURLcode res = curl_easy_perform(curl);
        
            // Check for errors
            if (res != CURLE_OK) {
                std::cerr << "cURL request failed: " << curl_easy_strerror(res) << std::endl;
            } else {
                // Print the response
                std::cout << "Response: " << response << std::endl;
            }
        
            // Clean up cURL
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);
        
            return 0;
        }
        
        </code>
    </pre>
    `
    }
}

function clearall() {
    document.getElementById("code-editor").innerHTML = "";
}

function showapipopup() {
    document.getElementById("apiidrequest").style.display = "block";
}

function getapikey() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (!name || !email) {
        alert("Fill all the details");
        return;
    }
    const formdata = { "name": name, "email": email }
    fetch('/getapikey', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
    })
        .then(response => response.json())
        .then(data => {
            if(data.Status=="True"){
                alert("API Key Generated  "+data.apikey);
                document.getElementById("name").value="";
                document.getElementById("email").value="";
            }
            else{
                alert("Some error occ");
            }
        })


}
