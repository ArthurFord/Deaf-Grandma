import re

def deaf_grandma():
    goodbye = "GOODBYE!"
    response = input()
    n = re.search(r"([A-Z])\w+", response)
    if n == None:
        print("SPEAK UP, KID!")
        deaf_grandma()
    elif n.string != goodbye:
        print("NO, NOT SINCE 1946!")
        deaf_grandma()
    else:
        print("LEAVING SO SOON?")
        response2 = input()
        m = re.search(r"([A-Z])\w+", response2)
        if  m != None and m.string == goodbye:
            print("LATER, SKATER!")
        elif m == None:
            print("SPEAK UP, KID!")
            deaf_grandma()
        elif m.string != goodbye:
            print("NO, NOT SINCE 1946!")
            deaf_grandma()

deaf_grandma()
