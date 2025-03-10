import assets from "./assets.json" with { type: "json"};

for(const asset of assets) {
    console.log(
        `${asset.artist} is a band with top song ${asset.title} and genre ${asset.genre} the song is from the album ${asset.album} and you can listen to it with this link ${asset.link}.`
    )
}