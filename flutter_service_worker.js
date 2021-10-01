'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "064a8d1dcb08e3c56ac94a125557c177",
"assets/assets/ab2.png": "a58edb38fc88ec1e9bed6ffe60c8c0b0",
"assets/assets/fractbud.json": "12a0cfe468e96b0bf4fa0296e7b52fac",
"assets/assets/fractitiousv2.json": "70e5af7600b7b4ef9c7be1a60270c97a",
"assets/assets/fractitous.json": "5e62cab401a5c93e4e81701293de6276",
"assets/assets/fractitous_image1.jpeg": "598d65646ac77e708a66a1957a7646e6",
"assets/assets/fractwoah.json": "343ee1d8ccfa01bae9a6c2095582a77d",
"assets/assets/images/PXLMV01.png": "9fc1a572a7437707cfa1a6d8e105cf88",
"assets/assets/images/PXLMV02.png": "8e8bf3154defa8e459840e2d7b8f233d",
"assets/assets/images/PXLMV03.png": "9b35798b83386e506b2b568fb6fdab67",
"assets/assets/images/PXLMV04.png": "cce47d054cddbf07ac58494cafc9b992",
"assets/assets/images/PXLMV05.png": "5b8d09365ee6c1b3cefa26c0a6af84cf",
"assets/assets/images/PXLMV06.png": "d8e91808c499a31f825b5464346b106c",
"assets/assets/images/PXLMV07.png": "dadb00eac28a2feac10669b28d04e3ff",
"assets/assets/images/PXLMV08.png": "ce0fac7e7e1bc2868a3e6611a2a36577",
"assets/assets/images/PXLMV09.png": "73a1c45092a214b3af802f121fd6c3a5",
"assets/assets/images/PXLMV10.png": "5115399469d05f8e01464e39654e12f2",
"assets/assets/images/PXLMV11.png": "0b2d6aeb981809c818541bc317c6745a",
"assets/assets/images/PXLMV12.png": "14297166505549022dc96332ce48ef1c",
"assets/assets/images/PXLMV13.png": "fc2cf12bddd1c9578575e9286833c29d",
"assets/assets/images/PXLMV14.png": "67c90eb76df179471d2bbe3289dc2e4c",
"assets/assets/images/PXLMV15.png": "8fb9b43bbe2fb3701e2abd3d60361917",
"assets/assets/images/PXLMV16.png": "76b301526487b5516ad9c3f073bf573e",
"assets/assets/images/PXLMV17.png": "e5a2ef126a6c5157fccfb0a339daa613",
"assets/assets/images/PXLMV18.png": "72b345bb7e5eeb9e42d4a12f60d88098",
"assets/assets/images/PXLMV19.png": "6388584d8c2250a6c09ac1c8bb76f4c6",
"assets/assets/images/PXLMV20.png": "4b3d1a380a11d725f5fa18dbcd83a4cb",
"assets/assets/images/PXLMV21.png": "e4f26522d4168ddf30a2b5e7287b1eb3",
"assets/assets/images/PXLMV22.png": "ba18a7e60fc3877381a6f429c24e60e8",
"assets/assets/images/PXLMV23.png": "9965ad1f76e75cbd145b33c869c0dd06",
"assets/assets/images/PXLMV24.png": "5220379580f55fdf90710fb8356db0be",
"assets/assets/images/PXLMV25.png": "d4027df4ce8ddf70a1f6343634f8a1bc",
"assets/assets/images/PXLMV26.png": "ac8f7309ecd204a786c2ec0502e8eb69",
"assets/assets/images/PXLMV27.png": "9844ae96e2122bd1d6915013cb1e0589",
"assets/assets/images/PXLMV28.png": "24450b8e2c78ed444e25137e8cb9bfe8",
"assets/assets/images/PXLMV29.png": "33c6d322c9fb275d7de5e741ce91be37",
"assets/assets/images/PXLMV30.png": "cc42e347478ea38819e378e3746cecb6",
"assets/assets/images/PXLMV31.png": "14526234a035b7a71a91d850ca84a342",
"assets/assets/images/PXLMV32.png": "c8cb15d6b8c03ef774f546ae502ff2ed",
"assets/assets/images/PXLMV33.png": "c2b6f9e3e7688dbf6aaeb6a3df9d6632",
"assets/assets/images/PXLMV34.png": "e9af6079931b4b97ca3346f893f3bd78",
"assets/assets/images/PXLMV35.png": "2b275fa3e13a08f11efdda4a226fff2e",
"assets/assets/images/PXLMV36.png": "fa6ab03447027ec2c2ecafb5d67a4cde",
"assets/assets/images/PXLMV37.png": "606a7cf632c2f163656996765d90ec08",
"assets/assets/images/PXLMV38.png": "fe780b7b531ce264112044948894050b",
"assets/assets/images/PXLMV39.png": "939df78230dd63da727594ce2a926a20",
"assets/assets/images/PXLMV40.png": "0cf5410882e0b5947d2e3f15b75d6a18",
"assets/assets/images/PXLMV41.png": "f688b4229b17ff1ab09a88be0757b5c9",
"assets/assets/images/PXLMV42.png": "4f5c094b33a32cd4804995e01e0d56c3",
"assets/assets/images/PXLMV43.png": "073618943b40d20dc229bd500dfdcd70",
"assets/assets/images/PXLMV44.png": "580ef044e0cde21e65cbc36f235556ea",
"assets/assets/images/PXLMV45.png": "3866cf02bd2bd6b623c88ca57a4c48b2",
"assets/assets/images/PXLMV46.png": "2b7e3df54154be938f28e222c2a40c64",
"assets/assets/images/PXLMV47.png": "8f2980c9a6d8260effb121697da09bf3",
"assets/assets/images/PXLMV48.png": "21e389216da9d15a4e1ce72b6f18fc09",
"assets/assets/pixelmove.json": "acce51dcb6f7e88fbe023a5d64d63138",
"assets/assets/randgallery.png": "8e0d93812d891e263d2bee68a6d9b88c",
"assets/assets/roaches.json": "356060140598e6c431b49027219a7679",
"assets/assets/twitter_logo.png": "b36ad77387e6497a2c5f87841f18fc07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e433e08aa2b03ee91f9b9a19424dc254",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "909467d16aa77da208d43280f463f56e",
"icons/Icon-192.png": "eb2f63ec13cebb77b5e6b5936c309a15",
"icons/Icon-512.png": "1481b27ff301c50e320282bf8057f282",
"index.html": "dbec57f3b7b25a2a143cd719800483d1",
"/": "dbec57f3b7b25a2a143cd719800483d1",
"main.dart.js": "8271188545f35ce9922352387038e901",
"manifest.json": "e8d75415781a02c58d79965caea8a5d1",
"version.json": "37856b04cba57e996a2ab6877c30edd1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
