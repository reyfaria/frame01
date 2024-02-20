const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Node.js Open Graph Image Tag Example</title>
        <meta property="og:image" content="https://media.discordapp.net/attachments/753834104818106448/1208862902040264755/image.png?ex=65e4d44f&is=65d25f4f&hm=c0997bcdc05bdf131b289455a5376498ec37e7e870f7f95ae53137c3f0cdb8ff&=&format=webp&quality=lossless&width=676&height=676"/>
        


        <meta property="fc:frame" content="vNext"/>
        <meta property="fc:frame:image" content="https://media.discordapp.net/attachments/753834104818106448/1208862902040264755/image.png?ex=65e4d44f&is=65d25f4f&hm=c0997bcdc05bdf131b289455a5376498ec37e7e870f7f95ae53137c3f0cdb8ff&=&format=webp&quality=lossless&width=676&height=676"/>

        <meta property="fc:frame:button:1" content="Youtube"/>
        <meta property="fc:frame:button:1:action" content="link"/>
        <meta property="fc:frame:button:1:target" content="https://www.youtube.com/watch?v=Ye677-FkgXE"/>

        <meta property="fc:frame:button:2" content="Image"/>
        <meta property="fc:frame:button:2:action" content="link"/>
        <meta property="fc:frame:button:2:target" content="https://media.discordapp.net/attachments/1163931172234084355/1209210358884073472/Screen_Shot_2024-02-19_at_10.49.54_AM.png?ex=65e617e7&is=65d3a2e7&hm=9033be890f8af1a362b59f94ab30f940a77fb8a04153d5b5e29b72d9d4ed18ba&=&format=webp&quality=lossless"/>

        <meta property="fc:frame:button:3" content="Frame Validator"/>
        <meta property="fc:frame:button:3:action" content="link"/>
        <meta property="fc:frame:button:3:target" content="https://warpcast.com/~/developers/frames"/>

        <meta property="fc:frame:button:4" content="Replit"/>
        <meta property="fc:frame:button:4:action" content="link"/>
        <meta property="fc:frame:button:4:target" content="http://localhost:3000"/>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>This is a simple Node.js app demonstrating additional Open Graph meta tags.</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
