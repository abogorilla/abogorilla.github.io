import random as r
klassen = ["Kristina", "Andreas", "Faris", "Adrian", "Pijus", "Jonas", "Ignacio", "May Linn" ,"Henrik"]
print(klassen)
print("Antall elevar er", len(klassen))
print("Dagens elev er", klassen[r.randrange(0,len(klassen))])
print("Dagens banditt er", klassen[r.randrange(0,len(klassen))])