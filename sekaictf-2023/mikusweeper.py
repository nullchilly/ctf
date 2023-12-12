username = "nullchilly"

f = open("max.txt")
max_wpm = float(f.read())
print(max_wpm)
if max_wpm > 500000:
  exit(0)
f.close()

import asyncio, time
from playwright.async_api import async_playwright

expected = "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab"

async def main():
  async with async_playwright() as p:
    browser = await p.chromium.launch(headless=False, args = [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-infobars',
      '--window-position=0,0',
      '--ignore-certifcate-errors',
      '--ignore-certifcate-errors-spki-list',
      '--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36'
    ])
    context = await browser.new_context()

    page = await context.new_page()
    await page.goto('https://play.typeracer.com/?universe=insane')
    await page.get_by_text("SIGN IN").first.click(force=True)
    await page.keyboard.type(username)
    await page.keyboard.press('Tab')
    await page.keyboard.type('thanhdatvclok')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')

    async def intercept_request(route):
      request = route.request
      if request.resource_type == "xhr" and request.url.startswith("https://play.typeracer.com/gameserv;jsessionid"):
        a = request.post_data.split("|")
        if len(a) > 33:
          endpoint = a[6]
          payload = a[13]
          if endpoint == "updatePlayerProgress" and payload.startswith("TLv1"):
            a[13] = "TLv1,en,49,T1h1e1y1 1d1o1n1'1t1 1k1n1o1w1 1t1h1a1t1 1w1e1 1k1n1o1w1 1t1h1e1y1 1k1n1o1w1 1w1e1 1b1o1t1t1e1d1.1!0,5,0,0+T,36,1+h,86,2+e,17,3+y,43,4+ ,5,6,91,0+d,50,1+o,8,2+n,41,3+',73,4+t,37,5+ ,11,5,57,0+k,16,1+n,50,2+o,49,3+w,16,4+ ,16,5,33,0+t,83,1+h,28,2+a,48,3+t,33,4+ ,21,3,79,0+w,13,1+e,44,2+ ,24,5,36,0+k,26,1+n,13,2+o,54,3+w,34,4+ ,29,5,38,0+t,47,1+h,76,2+e,16,3+y,47,4+ ,34,5,76,0+k,7,1+n,27,2+o,43,3+w,44,4+ ,39,3,102,0+w,6,1+e,3,2+ ,42,7,52,0+b,20,1+o,43,2+t,49,3+t,66,4+e,1,5+d,1,6+.,"
            # a[13] = r"""TLv1,en,3,U-1w0U1000\!0,1,1,0+U1+w2+U,"""
            # a[13] = a[13].replace("a", "u").replace("b","w")
            await route.continue_(post_data = "|".join(a))
            return
      await route.continue_()
    await page.route("**/*", intercept_request)

    time.sleep(5)
    await page.get_by_title("close this popup", exact=True).first.click(force=True)
    while True:
      await page.get_by_text("Enter a Typing Race").click(force=True)
      while True:
        try:
          element = await page.query_selector('.inputPanel span')
          text = await page.evaluate('(element) => element.parentElement.textContent', element)
          if text == expected:
            # time.sleep(20)
            input_element = await page.query_selector('.txtInput')
            while True:
              if await page.evaluate('(element) => element.value', input_element) == "":
                await page.evaluate('(element) => { element.value = "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab" }', input_element)
                await page.evaluate('(element) => { element.dispatchEvent(new KeyboardEvent("keypress", { key: "a" })) }', input_element)
                await page.query_selector(".raceAgainLink")
                # time.sleep(3)
                wele = await page.query_selector('.StatsTable .gwt-Anchor')
                wele = await page.query_selector('.StatsTable .gwt-Label')
                wpm = await page.evaluate('(element) => element.textContent', wele)
                wpm = float(wpm.split()[0])
                print(wpm)
                # element = await page.query_selector('.inputPanel span')
                # time.sleep(100)
                if wpm > max_wpm:
                  f = open("max.txt", "w")
                  f.write(str(wpm))
                  f.close()
                if wpm < 10000:
                  # time.sleep(1000)
                  print("fuck")
                  return
                if wpm > 500000:
                  print("uwu")
                  return
                break
          break
        except:
          pass
      await page.get_by_text("Main menu (leave race)").click(force=True)

asyncio.run(main())