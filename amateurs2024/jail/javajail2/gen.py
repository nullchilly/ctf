#!/usr/local/bin/python3

import subprocess

BANNED = ['import', 'throws', 'new']
BANNED += ['File', 'Scanner', 'Buffered', 'Process', 'Runtime', 'ScriptEngine', 'Print', 'Stream', 'Field', 'javax']
BANNED += ['flag.txt', '^', '|', '&', '\'', '\\', '[]', ':']

print('''
      Welcome to the Java Jail.
      Have fun coding in Java!
      ''')

print('''Enter in your code below (will be written to Main.java), end with --EOF--\n''')

code = """
class Main {
  public static void main(String... args) {
    try {
      System.out.println(String.class.getClass().forName("java.nio.file.F"+"iles").getMethod("readAllLines", java.nio.file.Path.class).invoke(
        null, String.class.getClass().forName("java.nio.file.Paths").getMethod("get", String.class, args.getClass()).invoke(null, "fl"+"ag.txt", args)));
    } catch (Exception e) {
        e.printStackTrace();
    }
  }
}
"""

for word in BANNED:
    if word in code:
        print(word)
        print('Not allowed')
        exit()

with open('/tmp/Main.java', 'w') as f:
    f.write(code)

print("Here's your output:")
output = subprocess.run(['java', '-Xmx648M', '-Xss32M', '/tmp/Main.java'], capture_output=True)
print(output.stdout.decode('utf-8'))
