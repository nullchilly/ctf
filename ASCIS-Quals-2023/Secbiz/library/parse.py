import requests
from bs4 import BeautifulSoup

# Define the URL of the server
url = 'http://45.77.33.129:5000/'

# Send an HTTP GET request to the server
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content
    soup = BeautifulSoup(response.content, 'html.parser')

    # Find all the 'a' tags with href attribute
    links = soup.find_all('a', href=True)
    # print(len(links))
    v = []
    for link in links:
        href = link['href']
        v.append(href)
        # print(link['href'])
    v.sort()
    print(v)
    # for i in range(len(v)):
    #   print(v[i])
    ans = []
    for i in range(1, 497):
      str = f"rfc9{i}.html"
      if (str in v):
        pass
        # print(i)
      else:
        # print(f"9{i}")
        ans.append(f"9{i}")
    print(ans)
    for i in range(0, len(ans)):
        print(ans[i])

    # Extract and print the href attributes containing 'ASCIS{' in their HTML content
    for link in links:
        href = link['href']
        href_url = f"{url}/{href}"
        break
        link_response = requests.get(href_url)
        print(href, link_response.content[:20])
        if (href == "RFC-all.tar.gz"):
            continue

        if link_response.status_code == 200:
            link_soup = BeautifulSoup(link_response.content, 'html.parser')
            # print(link_soup)
            if link_soup.find(text=lambda text: 'ASCIS{' in text):
                print(f"String 'ASCIS{{' found in {href}")
                print(link_response.content)
                exit(0)
        else:
            print(f"Failed to retrieve data from {href_url}. Status code: {link_response.status_code}")
else:
    print(f"Failed to retrieve data from {url}. Status code: {response.status_code}")

