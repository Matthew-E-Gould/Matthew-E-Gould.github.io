import os;
print('running!')

listDir = os.listdir('funny')
#print(listDir)

print('generating file!')

htmlContent = "<!DOCTYPE html><html><head><title>The funny pages</title></head><body>\n"
htmlContent = "<h1>Looks like you found the funny pages!</h1><br>\n"
for dir in listDir:
    htmlContent = htmlContent + "<a href='./"+ dir +"'>"+ dir +"</a><br>\n"

htmlContent = htmlContent + "</body></html>"

print("saving file!")

textfile = open("funny/index.html", "w")
textfile.write(htmlContent)
textfile.close()