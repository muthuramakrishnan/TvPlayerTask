const videos = [
    {'name':'one_minute_facts','url':'Why is there a hole present on top_side of your wash basin_ _ This is the reason why _ Just Minutes.mp4'},{'name': 'enchating_munnar','url':'videoplayback.mp4'}];



class Player{
    private playArea: Element;
    private remote: Element;
    private currentVideo: number;

    constructor(wrapper: Element)
    {
        //APPROACH 1 - ELEMENT CREATION USING PURE DOM - TV PLAYER CREATION
        let cards = document.createElement('div');cards.setAttribute('class','cards');
        let card1 = document.createElement('div');card1.setAttribute('class','card1');
        this.playArea = card1;
        this.currentVideo = 0;
        let img = document.createElement('img');
        img.setAttribute('width','100%');
        img.setAttribute('src','ledtv.png');
        let video = document.createElement('video');
        video.setAttribute('src',videos[this.currentVideo].url);
        video.setAttribute('controls','');
        video.setAttribute('controlslist','nodownload');
        card1.append(img,video);

        //APPROACH 2 - EMBEDDING USING INNER HTML - REMOTE CREATION
        let card2 = document.createElement('div');card2.setAttribute('class','card2');
        this.remote = card2;
        card2.innerHTML = `
        <button id='previous'>Previous Video</button>
                <button id='next'>Next Video</button>
                <button id='volume_up'>Volume Up</button>
                <button id='volume_down'>Volume Down</button>`;
        cards.append(card1,card2);
        wrapper.append(cards);
    }

    addEventListenerToRemote(){
        this.remote.querySelector('#volume_up').addEventListener('click',(event)=>{
            this.playArea.querySelector('video').volume<1?this.playArea.querySelector('video').volume += 0.1:this.playArea.querySelector('video').volume;
        });
        this.remote.querySelector('#volume_down').addEventListener('click',(event)=>{
            this.playArea.querySelector('video').volume>0.1?this.playArea.querySelector('video').volume -= 0.1:this.playArea.querySelector('video').volume;
        });
        this.remote.querySelector('#previous').addEventListener('click',(event)=>{
            this.currentVideo = (Math.abs(this.currentVideo-1))%videos.length;
            this.playArea.querySelector('video').setAttribute('src',videos[this.currentVideo].url);
        });
        this.remote.querySelector('#next').addEventListener('click',(event)=>{
            this.currentVideo = (Math.abs(this.currentVideo+1))%videos.length;
            this.playArea.querySelector('video').setAttribute('src',videos[this.currentVideo].url);
        })
        
    }


}
let container = document.createElement('div');container.setAttribute('class','container');
document.body.append(container);
let player = new Player(container);
player.addEventListenerToRemote();
// player.playArea = 1;