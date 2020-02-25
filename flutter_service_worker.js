'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "506f1ce236e832ae18dd400bda2f3fd6",
"/main.dart.js": "5e300ed8b67cacc7596a7e3f60f7132a",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "4554cca8f1aea7686f4fa8a4eff2e0d6",
"/.git/config": "caaf571635863e683f3af0f0dd316da9",
"/.git/objects/9e/b22b6815b69adcb2599d837d74af533655062f": "aeece62c76545319c0e8d60d31d3b958",
"/.git/objects/da/b8fc0c869cb6059a2b245bf358834a6f31d954": "41174ee0c4a2bb47ad510c3d6080ce02",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/44/6152ef19354fd12c8f5c7c495e859c22bd65d7": "0a9a24b837fe1267bb94d750a959df29",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/c4/6df2fa65d09a0dee75e4a0cd638662a3a1b0ac": "ba230f8723227410954350a332418ea8",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "db03dff1ab3ebe46645859791f312c68",
"/.git/logs/refs/heads/master": "db03dff1ab3ebe46645859791f312c68",
"/.git/logs/refs/remotes/origin/master": "6eb4b0ac69c4dba55aaf4e372c5aacc3",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/refs/heads/master": "b7abb1dce30a2013c386e9b038e27891",
"/.git/refs/remotes/origin/master": "b7abb1dce30a2013c386e9b038e27891",
"/.git/index": "5d2731e82b0219bc91f15ab7fde501d6",
"/.git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
"/assets/LICENSE": "1a80be6c5724a31e6f9c9e06dba53b63",
"/assets/AssetManifest.json": "100bd9290c9fd4452dedc87cff914d4d",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/flare/analysis.flr": "b8fa0d4f991626f2a425832c51f4e3d9"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
