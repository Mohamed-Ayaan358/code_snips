import PyPDF2

pdfFileObj = open('sample.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
for i in range(pdfReader.numPages):
    pageObj = pdfReader.getPage(i)
    print(pageObj.extractText())
pdfFileObj.close()
