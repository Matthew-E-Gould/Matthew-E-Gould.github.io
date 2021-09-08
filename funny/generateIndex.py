import os;
print('running!')

listDir = os.listdir('funny')
#print(listDir)

htmlContent = ""

print('generating file!')

for dir in listDir:
    htmlContent = htmlContent + "<a href='/"+ dir +"'>"+ dir +"</a>"

print("saving file!")

textfile = open("funny/index.html", "w")
textfile.write(htmlContent)
textfile.close()