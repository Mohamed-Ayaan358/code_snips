import pyttsx3
engine = pyttsx3.init()
voices = engine.getProperty('voices')
engine.setProperty('Voice', voices[0].id)
engine.setProperty('Rate', 150)


def speak(str):
    engine.say(str)
    engine.runAndWait()


sentence = input("Enter string")
speak(sentence)
