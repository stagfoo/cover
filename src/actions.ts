import { state } from './index';
import { toBase64 } from 'utils'
import domtoimage from 'dom-to-image';

const canvasId = 'steg-can';

export function coverImage(e: any) {
  toBase64(e.target.files[0]).then(data => {
    state._update('updateImage', data)
  }).catch(err => {
    console.error(err)
  })
}

export function newYoutube(e: any) {
  state._update('updateYoutube', e.target.value)
}

export function createCover() {
  const cover: any = document.querySelector('#cover-uploader')
  domtoimage.toPng(cover)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      createCanvasImage(dataUrl, 480, canvasId, () => {
        window['writeMsgToCanvas'](canvasId, `${state.youtube}`, "cover-app", 0)
      })
      setTimeout(() => {
        downloadCanvas('sample.cover.png');
        state._update('updateYoutube', "")
        state._update('updateImage', null)
        document.querySelector(canvasId).remove()

      }, 1000)

    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
}

function downloadCanvas(filename:string){
  let link = document.createElement('a');
  link.download = filename;
  link.href = (document.getElementById(canvasId) as any).toDataURL()
  link.click();
}


function getVideoId(input: string) {
  return input.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/)[1]; 
  }

export function playTrack(e){
  state._update('updateTrack', "")
  state._update('updateTrackCover', null)
  toBase64(e.target.files[0]).then(data => {
    state._update('updateTrackCover', data)
    createCanvasImage(data, 480, 'player-can', () => {
      const message = window['readMsgFromCanvas']('player-can', "cover-app", 0)
      const trackId = getVideoId(message)
      state._update('updateTrack', trackId[1])
      document.querySelector('#player-can').remove()
    })
  }).catch(err => {
    //console.error(err)
  })
}

function createCanvasImage(dataURI, maxsize, canvasid, cb) {
    maxsize = (maxsize === undefined) ? 0 : maxsize;
    var reader = new FileReader();
    reader.onload = function (e) {
      var data =  (e.target as any).result;
      var image = new Image();
      image.onload = function () {
        var w = image.width;
        var h = image.height;
        if (maxsize > 0) {
          if (w > maxsize) {
            h = h * (maxsize / w);
            w = maxsize;
          }
          if (h > maxsize) {
            w = w * (maxsize / h);
            h = maxsize;
          }
          w = Math.floor(w);
          h = Math.floor(h);
        }
        var canvas = document.createElement('canvas');
        canvas.id = canvasid;
        canvas.width = w;
        canvas.height = h;
        canvas.style.display = "none";
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(canvas);
        var context = canvas.getContext('2d');
        context.drawImage(image, 0, 0, image.width, image.height, 0, 0, w, h);
        cb()
        
      };
      image.src = (data as string);
    };
    reader.readAsDataURL(dataURItoBlob(dataURI));
}

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], {type: mimeString});
  return blob;

}
