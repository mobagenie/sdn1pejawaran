YT.keyManager = {
    /* keys: ["AIzaSyBfb4A6rdKGwqTbBa_IPny1SUe3qZKN_tU","AIzaSyB3FqzsmunLC7o6SvWhR7_x3a9PHI4zUDY" ,"AIzaSyCEtMMX1pneDcapjLF-Af2JotnuibRQX-E"], */
	keys: ["AIzaSyCEtMMX1pneDcapjLF-Af2JotnuibRQX-E"],
    keyIndex: 0,
    getKey: function () {
        this.keyIndex = (this.keyIndex + 1) % (this.keys.length);
        return this.keys[this.keyIndex];
    },
    shuffleKeys: function () {
        this.keys.shuffle();
    }
}