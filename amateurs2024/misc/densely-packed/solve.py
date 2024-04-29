import wave
import struct
# Convert audio to byte array
wav = wave.open("laughing.wav", mode='rb')
print(wav)
frame_bytes = bytearray(list(wav.readframes(wav.getnframes())))
for i in range(min(len(frame_bytes), 200)):
    print(frame_bytes[i], end=' ')
