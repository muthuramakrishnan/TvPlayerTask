var videos = [
    { 'name': 'one_minute_facts', 'url': 'Why is there a hole present on top_side of your wash basin_ _ This is the reason why _ Just Minutes.mp4' }, { 'name': 'enchating_munnar', 'url': 'videoplayback.mp4' }
];
var Player = /** @class */ (function () {
    function Player(wrapper) {
        //APPROACH 1 - ELEMENT CREATION USING PURE DOM - TV PLAYER CREATION
        var cards = document.createElement('div');
        cards.setAttribute('class', 'cards');
        var card1 = document.createElement('div');
        card1.setAttribute('class', 'card1');
        this.playArea = card1;
        this.currentVideo = 0;
        var img = document.createElement('img');
        img.setAttribute('width', '100%');
        img.setAttribute('src', 'ledtv.png');
        var video = document.createElement('video');
        video.setAttribute('src', videos[this.currentVideo].url);
        video.setAttribute('controls', '');
        video.setAttribute('controlslist', 'nodownload');
        card1.append(img, video);
        //APPROACH 2 - EMBEDDING USING INNER HTML - REMOTE CREATION
        var card2 = document.createElement('div');
        card2.setAttribute('class', 'card2');
        this.remote = card2;
        card2.innerHTML = "\n        <button id='previous'>Previous Video</button>\n                <button id='next'>Next Video</button>\n                <button id='volume_up'>Volume Up</button>\n                <button id='volume_down'>Volume Down</button>";
        cards.append(card1, card2);
        wrapper.append(cards);
    }
    Player.prototype.addEventListenerToRemote = function () {
        var _this = this;
        this.remote.querySelector('#volume_up').addEventListener('click', function (event) {
            _this.playArea.querySelector('video').volume < 1 ? _this.playArea.querySelector('video').volume += 0.1 : _this.playArea.querySelector('video').volume;
        });
        this.remote.querySelector('#volume_down').addEventListener('click', function (event) {
            _this.playArea.querySelector('video').volume > 0.1 ? _this.playArea.querySelector('video').volume -= 0.1 : _this.playArea.querySelector('video').volume;
        });
        this.remote.querySelector('#previous').addEventListener('click', function (event) {
            _this.currentVideo = (Math.abs(_this.currentVideo - 1)) % videos.length;
            _this.playArea.querySelector('video').setAttribute('src', videos[_this.currentVideo].url);
        });
        this.remote.querySelector('#next').addEventListener('click', function (event) {
            _this.currentVideo = (Math.abs(_this.currentVideo + 1)) % videos.length;
            _this.playArea.querySelector('video').setAttribute('src', videos[_this.currentVideo].url);
        });
    };
    return Player;
}());
var container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.append(container);
var player = new Player(container);
player.addEventListenerToRemote();
// player.playArea = 1;
