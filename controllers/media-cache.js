const cachedImages = [];
const no_image = require("../no-image");
function pushImage(sid, data){
cachedImages.push({"sid":sid, "data":data});
}

function popImage(sid){
    const index = cachedImages.findIndex(img => {return img.sid == sid});
    if(index > -1){
        const data = cachedImages[index].data;
        cachedImages.splice(index, 1);
        return data;
    }
    else{
        return no_image.data;
    }
    
}
module.exports.cacheImage = (req, res) => {
    const sid = req.params.sid;
    const base64Data = req.body.data;
    pushImage(sid,base64Data);
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.status(200).json({
        "sid":sid,
        "url":fullUrl
    });
}

module.exports.getImage = (req, res) => {
    const sid = req.params.sid;
    // const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const imageData = popImage(sid);
    const imgType = imageData.split(';')[0].split('/')[1];
    const base64Data = imageData.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
  const img = Buffer.from(base64Data, 'base64');

  res.writeHead(200, {
    'Content-Type': `image/${imgType}`,
    'Content-Length': img.length
  });
  res.end(img);

}

