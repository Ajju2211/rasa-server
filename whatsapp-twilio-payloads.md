## Whatsapp Twilio Payloads
### Only Text Message Received
```
numMedia = body.NumMedia (= "0")
message = body.Body
```
###  Image Received(Media content)
```
file-type = body.MediaContentType0;
numMedia = body.NumMedia (= "1")
    if (file-type is equal to "image/jpeg" or "image/jpg" or "image/png" or ..)
        {
            image-data = body.Body.MediaUrl0;
            }
    message = body.Body
```

###  Video Received(Media content)
```
file-type = body.MediaContentType0;
numMedia = body.NumMedia (= "1")
    if (file-type is equal to "video/mp4" or "video/ogg" or "video/wav" or ..)
        {
            image-data = body.Body.MediaUrl0;
            }
    message = body.Body

```
###  Audio/VoiceNote Received(Media content)
```
file-type = body.MediaContentType0;
numMedia = body.NumMedia (= "1")
    if (file-type is equal to "audio/ogg" or "audio/mp3" or "audio/mpeg"  or ..)
        {
            image-data = body.Body.MediaUrl0;
            }

```
###  Current location
```
numMedia = body.NumMedia (= "0")
Latitude = body.Latitude;
Longitude = body.Longitude;
eg: Latitude: '17.4282181',
    Longitude: '78.63898',

```
###  Live Location (Not supported)
```
numMedia = body.NumMedia (= "0")
return empty body message
body.Body = ""
```
###  Documents upload (not supported)
```
numMedia = body.NumMedia (= "0")
return empty body message
body.Body = <filename_of_the_document>
will return no data
```
###  Sender Number
```
eg: "whatsapp:+917997289947"
sender_num = body.From
```
### To be send to number (reply twilio number)
```
eg: "whatsapp:+14155238886" 
twilio_num_received = body.To
```
### sample json object received
```
{
  MediaContentType0: 'audio/mpeg',
  SmsMessageSid: 'MM380c0a050871ea7f4ef1068dd19d1399',
  NumMedia: '1',
  SmsSid: 'MM380c0a050871ea7f4ef1068dd19d1399',
  SmsStatus: 'received',
  Body: '',
  To: 'whatsapp:+14155238886',
  NumSegments: '1',
  MessageSid: 'MM380c0a050871ea7f4ef1068dd19d1399',
  AccountSid: 'AC2b6fe24ddcbc1ff000aa1354a831b85b',
  From: 'whatsapp:+917997289947',
  MediaUrl0: 'https://api.twilio.com/2010-04-01/Accounts/AC2b6fe24ddcbc1ff000aa1354a831b85b/Messages/MM380c0a050871ea7f4ef1068dd19d1399/Media/ME64d94de13d3da42cdc345e95fe3d34a7',
  ApiVersion: '2010-04-01'
}
```