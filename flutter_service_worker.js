'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a4cb9d26d1b4a0c15cf4f48c418d5620",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "dc8dd8077b1ae7fb1491932f7b1b04f3",
"/": "dc8dd8077b1ae7fb1491932f7b1b04f3",
"main.dart.js": "03c8aec93fb9f0148bc0f542173ae3f1",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/NOTICES": "cdd78d7af764910975390877780029b6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b1c72e020ed59cb4254e275d3b52988a",
"assets/packages/liquid_glass_widgets/shaders/liquid_glass_final_render.frag": "c10579828a31cd25247fadc5d710f9fe",
"assets/packages/liquid_glass_widgets/shaders/lightweight_glass.frag": "c4e611315f1d24e225d86e2e752f5b75",
"assets/packages/liquid_glass_widgets/shaders/interactive_indicator.frag": "741abb216ea4b970c6565178bf8d09ee",
"assets/packages/liquid_glass_widgets/shaders/liquid_glass_geometry_blended.frag": "bfcd689436d3440e8248daa16d8a3840",
"assets/packages/liquid_glass_widgets/shaders/progressive_blur.frag": "44ecd8c3491700d04a3d672892f5d59c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "84861ea3b8718d7bb64e9ab8f7d83360",
"assets/packages/timezone/data/latest_all.tzf": "5e6af46f7fdd153c308fc6531ba69d03",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "d19e5edf641b6929c5f7c86458b863df",
"assets/fonts/MaterialIcons-Regular.otf": "8a74632e7137d4530b9dead471bc0a6e",
"assets/assets/images/my_image.png": "2cc3f1054c509296c7fa2dee3844283c",
"assets/assets/images/bird.png": "c4f6302a5232194957a3e3dbc3a16d2f",
"assets/assets/images/recycle.png": "3292a4371bf2532a7b483d6d2f225b37",
"assets/assets/images/bg6.jpg": "83820ee569d848c22a8451d20917f0b6",
"assets/assets/images/bg5.jpg": "727d7bd3850d8ab73ade5a7b0ea9818a",
"assets/assets/images/fullScreen-1.png": "fc41c8a411e1103e55f1f2d17b586a84",
"assets/assets/images/bg4.jpg": "0f036120fb824bf0b70016446c45cf9c",
"assets/assets/images/194527756-86f669fa-3afd-4834-818e-1bea74d92a28.png": "f59d71facfbdb2406d810bc09e863a87",
"assets/assets/images/bg1.jpg": "688e47740e8c508e3042fcd4e76777ff",
"assets/assets/images/bg3.jpg": "487b36ec0a14f54fd923567d653425e2",
"assets/assets/images/bg2.jpg": "2af039745b7b3af3022f0a109fd5fe1b",
"assets/assets/images/ios_unlock.png": "c0705126513303b55fbe212c3ebe4fbc",
"assets/assets/images/splashbg.jpg": "61a7ce5c8a6717abeeb0306b212e5f58",
"assets/assets/images/_.jpeg": "f9ece71dfcc36832a69902adbf21e2a0",
"assets/assets/images/pngwing.com.png": "3748da378151b877f65a00d01ff4b3aa",
"assets/assets/images/ios_lock.png": "981f8009c6c763d354b0c721b2a15136",
"assets/assets/images/img.jpeg": "1876dec8f94a90993bfed3e65cf6c6d1",
"assets/assets/images/bg.jpg": "1b4e3d85d861df276477b9ba6a98db82",
"assets/assets/apple.png": "4175cb3f47c4c1e93895168c471da03b",
"assets/assets/ios_wallpaper/53339576833242979.jpeg": "3d31139757c4e91f4ff7fc812d44b214",
"assets/assets/ios_wallpaper/345.jpeg": "7e0423c5127366b05253c45d0050bc05",
"assets/assets/ios_wallpaper/24136547998478989.jpeg": "23ebc8d10319d1d810840641ff48975f",
"assets/assets/ios_wallpaper/12807180188130142.jpeg": "3557243f3e5f0c7da541466cc855c4de",
"assets/assets/ios_wallpaper/iPhone%252017%2520Black.png": "748e31f9f6455ddeea8b4654917a4fe7",
"assets/assets/ios_wallpaper/iphone-17e-pink.png": "f5ae54cf5c39494ef5f0c0a888496706",
"assets/assets/ios_wallpaper/iPhone%252016%2520Pro%2520Black%2520Titanium.png": "5154389677297a4bc7e2cd96b4f7b637",
"assets/assets/ios_wallpaper/34.jpeg": "31778e4a907865a603fce27eb5bcb325",
"assets/assets/ios_wallpaper/791789178289905591.jpeg": "9828e893e543c5fef0bba1c5b5a232c4",
"assets/assets/ios_wallpaper/31666003624422734.jpeg": "f6140b38e2aba2f78323cc3fac1f7944",
"assets/assets/ios_wallpaper/se-1-130.Nudibranch_Pink-zinc.png": "0fe0bfacc063da9f4079f835b04cca11",
"assets/assets/ios_wallpaper/7459155630820161.jpeg": "dfe2be02eaf3dfb5ff92536eede1ab39",
"assets/assets/icons/github-darkpurple.png": "e2cbcf84ad70077e0b2966b7a2371f80",
"assets/assets/icons/Chrome-icon.png": "4e87900a7f81b06d2e67ae572c2c0757",
"assets/assets/icons/icons8-video-50.png": "72ccc9b6b5a4870c537d771ad774def0",
"assets/assets/icons/theme1.png": "61c4a8aa6a7a4fc5023b0dcc66c6f751",
"assets/assets/icons/blue_folder.png": "a9d7cce3665616371ab2c4067a9da991",
"assets/assets/icons/control_panal.png": "4410788df5aed520fd688a606544cd8e",
"assets/assets/icons/certificate.png": "d82057e028998bc24d6148bb7b6c87c1",
"assets/assets/icons/icons8-feedback-hub-256.png": "4ef744b0ce0ac64675a3414ad9a91550",
"assets/assets/icons/icons8-github-256.png": "04a4c9bbddbf4f9ac89d7b552db0cbc8",
"assets/assets/icons/safar.png": "150f64bd0a7550652ec17e58abf896b8",
"assets/assets/icons/icons8-linkedin-256.png": "dfa2af9fb03641af9d623855b915bf63",
"assets/assets/icons/icons8-notification-48.png": "c07febcc046a0268811b671c5ebf7822",
"assets/assets/icons/icons8-email-32.png": "aaa5183d765817a64e6b5662631504ea",
"assets/assets/icons/icons8-apple-94.png": "2a39c9d5acb796c6204e5e7d782aac66",
"assets/assets/icons/project.png": "92b7079531fbdcd1ad33f03d4fd5e797",
"assets/assets/icons/folder.png": "5f21be3cc80cf225d5a294e042f34759",
"assets/assets/icons/windows2.png": "e727eba59753742a900fb79e457a9073",
"assets/assets/icons/system/icons8-windows-10-personalization-256.png": "646582e00c8f372051414c9b3f598240",
"assets/assets/icons/system/onedrive.png": "d70c25f8db8fb685ba22982757d6aa86",
"assets/assets/icons/system/desktop.png": "f1721e20888dffa900f8a351411fc0c9",
"assets/assets/icons/system/icons8-booking-32.png": "3eb0bb5ca54ace478b66fa40e44ab70b",
"assets/assets/icons/system/projects.png": "a9ad5bc76069b41f3ad9fcefd5602205",
"assets/assets/icons/system/rename.png": "43481ee010e507dc2d00ab0bb42b0e8f",
"assets/assets/icons/system/music.png": "e756ca3a483262f9bbb9442acd4d1923",
"assets/assets/icons/system/imageres.png": "89ac8913f448ededa9a8cca3123cf00b",
"assets/assets/icons/system/icons8-more-32.png": "7ee5d094a1ba43795294597df571bb13",
"assets/assets/icons/system/icons8-verified-account-256.png": "3f41ade7e36712d95c27a3824259fac3",
"assets/assets/icons/system/del.png": "21cc80117d92488e1c5e1f6d2437cf74",
"assets/assets/icons/system/icons8-pin-32.png": "74f043d636def7d9c297d217cf49cd73",
"assets/assets/icons/system/pc.png": "0239a7458bfd59e155a70aa35646a209",
"assets/assets/icons/system/cut.png": "e31370e71c08290b1bbb3259067b81f5",
"assets/assets/icons/system/cross.png": "de73fa781f9245134a7ad352e92d84e5",
"assets/assets/icons/system/video.png": "9b30c9e67c4a1af421a83d85f024d826",
"assets/assets/icons/system/normalDrive.png": "2f1e34791d4639bd01d1b73ae4079c20",
"assets/assets/icons/system/systemDrive.png": "ada4341488c6f60337befdc2e1889bf9",
"assets/assets/icons/system/icons8-rating-256.png": "1208bad8c0e002acfe44fb69ec13e59a",
"assets/assets/icons/system/icons8-share-32.png": "4b18fa78ce11d6e2a7c0c21e38cdc16a",
"assets/assets/icons/system/network.png": "6e5d0eb9d5febd0714cdd7ac15cb4a7b",
"assets/assets/icons/system/icons8-email-256.png": "d2dc00af9a9ded4122d2df4eadf363e4",
"assets/assets/icons/system/certicates.png": "d57c5f95a04715803289e5aa0a7459cf",
"assets/assets/icons/system/image.png": "37e5ed32baaa8740e61fe8ac68b2a9df",
"assets/assets/icons/system/copy.png": "61348097910d2ee6e3c7ee58a744834f",
"assets/assets/icons/chrome.png": "05530cde09aa90a410f5a0cba9a430c5",
"assets/assets/icons/icons8-view-quilt-256.png": "c16bc6f75e63b39fd590d8e3791b692f",
"assets/assets/icons/pc.png": "8796f9550936646c8f186ceb357ec783",
"assets/assets/icons/recyclebin.png": "f351fbbf7fdd10f27709261aeb91bb4f",
"assets/assets/icons/rate.png": "2212f7f83dddb4b2e373183f8ae163bd",
"assets/assets/icons/linkedin.png": "83bdaa8a306c6881aad4cdc892a99a11",
"assets/assets/icons/video.png": "c4745672efb7e867d62eedc0807ad819",
"assets/assets/icons/profile.png": "537f7991c540f927c79f96ed32161bdf",
"assets/assets/icons/call.png": "3e65aca561067cb5f3ca8388587e1f35",
"assets/assets/icons/sun.png": "2adf2268725bb15701d87f11099f0605",
"assets/assets/icons/photos.png": "8bb930d56107a0e55b26913939b4efe5",
"assets/assets/icons/icons8-rating-32.png": "33c1f98ed63b594c1c51a6af1a98ede6",
"assets/assets/icons/message.png": "426f344052f006ba453d3587e78cccd1",
"assets/assets/icons/icons8-diploma-256.png": "a88fb6c2439e5a1763b8188fc963e092",
"assets/assets/icons/start.png": "20022075e0888c02945c15a463e3781f",
"assets/assets/icons/image.png": "8c13b0e53fee1df49676c4e8e8c8575e",
"assets/assets/icons/icons8-coursera-an-online-learning-platform-offers-massive-open-courses-256.png": "28cd2aedff9785ca79ca986aa4b677f6",
"assets/assets/ios_assets/icons8-email-100.png": "118ba528c939deb018aa8b427665c740",
"assets/assets/ios_assets/icons8-home-100.png": "df62a9194178c96713697234c921ab67",
"assets/assets/ios_assets/icons8-ios-photos-100.png": "f6d235094204b1ecf0919bb580baf6fb",
"assets/assets/ios_assets/icons8-office-phone-100.png": "2c2d2941a1ccaaa0b3e2acbd42ecf6f3",
"assets/assets/ios_assets/camera_ios.png": "f241d883df0c3a38e80a8b40dcb4c094",
"assets/assets/ios_assets/icons8-camera-100.png": "0abb6ac316af7fb53b097ada6e9be1bd",
"assets/assets/ios_assets/b15de2a6-bd7d-4bd4-ab7e-97097b964537-removebg-preview.png": "9d25b3935783027a0d18f13bfe9f5973",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
