#filfabrikk.py
#her skal vi lage 10000 filer

import os

mNavn = input("Kva vil du at mappa skal heite? ")
os.mkdir(mNavn)
os.chdir(mNavn)

for n in range(10000):

    n = str(n)
    filami = open ("filnummer" + n ,"w")
    
    filami.write("No er eg ferdig"+n)
    filami.close()

antall_filer = int(n) + 1 
print("No har eg lagd", antall_filer ,"Filer og er ferdig")
# No har eg lagd 10000 mapper
