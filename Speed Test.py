from turtle import up
import speedtest
import time 
import psutil

intTest = speedtest.Speedtest()

# software is connecting to a nearby server to fetch/run speed test 

intTest.get_servers()
server = intTest.get_best_server

print("Running Test....")


download_result = intTest.download()
upload_result = intTest.upload()
ping = intTest.results.ping

#Convert into mbps

downloadMbps = download_result / 1024 / 1024
uploadMbps = upload_result / 1024 / 1024 

# print speeds 

print(f"Your Download Speed is {downloadMbps:.2f} Mbps")
print(f"Your upload speed is {uploadMbps:.2f} Mbps")
print(f"Ping: {ping} ms")

#conditons 
online_games = 3
web_browsing = 3
music = 1
video_confrences = 5
video_streaming = 6




if downloadMbps > 24 :
    print ("Your connection is good enough for the following tasks: Social Apps, Video Streaming, Online Gaming, Emails, Voice Calls, etc.")
    
# bandwidth test 

# Retrevial of bytes 
    
    lastReceived = psutil.net_io_counters().bytes_recv
    lastSent = psutil.net_io_counters().bytes_sent
    total = lastReceived + lastSent
    
    #recorded bytes will create an infinite loop to print them
    
    while True:
     bytesRec = lastReceived = psutil.net_io_counters().bytes_recv
     bytesSent = lastSent = psutil.net_io_counters().bytes_sent
     byteTot = bytesSent + bytesRec
     
     #subtract the recived by the last received to calculate the total
     trueRec = bytesRec - lastReceived
     trueSent = bytesSent - lastSent
     trueTotal = byteTot - total
     
     rec_mbps = trueRec / 1024 / 1024
     sent_mbps = trueSent / 1024 / 1024
     total_mbps = trueTotal / 1024 / 1024 
     
     print (f"{rec_mbps:.2f} Mbps received, {sent_mbps:.2f} Mbps sent, {total_mbps:.2f}Mbps total")
     
     # using infinte loop technique to constantly update the last recevied to replace it with new values. 
     
     lastReceived = bytesRec
     lastSent = bytesSent
     total = byteTot
     
     time.sleep(1)
    
        
    