import os;
print('running!')

listDir = os.listdir('funny')
#print(listDir)

print('generating file!')

htmlContent = "<!DOCTYPE html><html><head><title>The funny pages</title></head><body>"
for dir in listDir:
    htmlContent = htmlContent + "<a href='/"+ dir +"'>"+ dir +"</a>"

htmlContent = htmlContent + "</body></html>"

print("saving file!")

textfile = open("funny/index.html", "w")
textfile.write(htmlContent)
textfile.close()