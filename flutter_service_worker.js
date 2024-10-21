'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "59c1ebcb5322254508df02e6b386137d",
"assets/AssetManifest.bin.json": "13019ed7b886a7f0a5600d21eaa097e7",
"assets/AssetManifest.json": "125a604e5fbdb53bc777ea2a2096492c",
"assets/assets/arabic.png": "00153a499a8bf115a5826ebf51fc2506",
"assets/assets/background.png": "ba2648df31dbf6574bc8a04c4293652c",
"assets/assets/car.png": "c0d84ea7698b214bb7bff21011362d2c",
"assets/assets/driver.png": "b707cff8ca0fda73ed144b9d040a8b6a",
"assets/assets/english.png": "a18d005784fa6ea4417a7eb9d0c66fd0",
"assets/assets/example.gif": "667565587e3828ab12c1500d7f23de03",
"assets/assets/gif.gif": "7414dfc4cfc7e6c38fb3a3d292ebc787",
"assets/assets/logo.png": "cddd76fe97f47008a524f5da005ea29f",
"assets/assets/splash.png": "05439a94adab28923fc4321b32b7d343",
"assets/assets/translations/ar-EG.json": "ba3dc62f16cc27d6b3b314b9a5025056",
"assets/assets/translations/en-US.json": "589250b6f9ccb269c96595a3135df2cc",
"assets/assets/wlogo.png": "3b1306300dd2f12b061ebbe8a7e24ec2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "14cb651788dec10e6098f60b0d0982a2",
"assets/NOTICES": "bc18c6e3ba87124fa55e57875f907ece",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "cddd76fe97f47008a524f5da005ea29f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d937bb60dfc635850e15348d867f16ed",
"icons/Icon-192.png": "cddd76fe97f47008a524f5da005ea29f",
"icons/Icon-512.png": "cddd76fe97f47008a524f5da005ea29f",
"icons/Icon-maskable-192.png": "cddd76fe97f47008a524f5da005ea29f",
"icons/Icon-maskable-512.png": "cddd76fe97f47008a524f5da005ea29f",
"index.html": "510bfbe81baffb1543730858e38c66bb",
"/": "510bfbe81baffb1543730858e38c66bb",
"main.dart.js": "ae5ba880d0c05f08c2d3bba2732ce14b",
"manifest.json": "16e17ddbe1e1a7c1970352e250516dc2",
"splash/img/dark-1x.gif": "72b9aedc83ac799e11868b0dd11850cc",
"splash/img/dark-1x.png": "a8a024dbdf8aa1c68c187e890e3c413e",
"splash/img/dark-2x.gif": "58dcc2f4a41b157274b55b6f2f7321f8",
"splash/img/dark-2x.png": "8c202e8bb06f5fd0659d393f4bd92d4e",
"splash/img/dark-3x.gif": "8040801c52663e5e016768429468d33b",
"splash/img/dark-3x.png": "cc94b69e3ab16c6460c065b8cd8aac01",
"splash/img/dark-4x.gif": "84e17f73745b63dc3eec4098bce205db",
"splash/img/dark-4x.png": "fb56e23d8430c06b46aaaa98b5a7ed7e",
"splash/img/light-1x.gif": "72b9aedc83ac799e11868b0dd11850cc",
"splash/img/light-1x.png": "a8a024dbdf8aa1c68c187e890e3c413e",
"splash/img/light-2x.gif": "58dcc2f4a41b157274b55b6f2f7321f8",
"splash/img/light-2x.png": "8c202e8bb06f5fd0659d393f4bd92d4e",
"splash/img/light-3x.gif": "8040801c52663e5e016768429468d33b",
"splash/img/light-3x.png": "cc94b69e3ab16c6460c065b8cd8aac01",
"splash/img/light-4x.gif": "84e17f73745b63dc3eec4098bce205db",
"splash/img/light-4x.png": "fb56e23d8430c06b46aaaa98b5a7ed7e",
"version.json": "5a7d04e905b40554ff1cd0392ed910f0"};
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
