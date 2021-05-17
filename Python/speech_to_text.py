import speech_recognition as sr
r = sr.Recognizer()
mic = sr.Microphone()
with mic as source:
    print("speak : ")
    audio = r.listen(source)
    try:
        text = r.recognize_google(audio)
        li = text.split()
        print('You said : {}'.format(text))
    except:
        print('Cant hear you very well')
