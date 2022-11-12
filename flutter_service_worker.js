'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMITMESSAGE": "d41d8cd98f00b204e9800998ecf8427e",
".git/COMMIT_EDITMSG": "0d2eeb82f32d3c8afa9edc9676e2539b",
".git/config": "3516587a4bfd8a94cf20b1a3fc91ae9e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "259a5dad7c76a1f328c41a195b264bcc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d520d608f4ce5b33bb6ec19e4099f9fa",
".git/logs/refs/heads/master": "d520d608f4ce5b33bb6ec19e4099f9fa",
".git/logs/refs/remotes/origin/HEAD": "ebef07761b7900efb94ca0a8fd9ab597",
".git/logs/refs/remotes/origin/master": "7c9088011fa039d8e1e4c4241daa3372",
".git/objects/32/b55ab76b9ba747bcaf48f5efa9053f4d1bcdff": "3a8d4f6dc473c2552be6a8968ce6c5fa",
".git/objects/69/521f352ddd0be4a3b813130338eadf6ba9ae82": "394dab24aedfc01db99c7d14747144d4",
".git/objects/9c/3cdbdb8b1f9324cc91a37ea87e8396f76e022b": "df42c0a954e608e11416cfc6782f97cd",
".git/objects/fd/6b3522d673ec85848565e422e1f5a9015c6f36": "5f9e32359676d2246e1ffa6dee05d63e",
".git/objects/pack/pack-0a9844178ebacc0880cee04e7085b541b665f1cd.idx": "b45232b06898d49e6b01fa0c4c31d318",
".git/objects/pack/pack-0a9844178ebacc0880cee04e7085b541b665f1cd.pack": "94b22eb320829df882f0631c33f4cf0b",
".git/packed-refs": "43efec422923a7703b1b414b3a65e997",
".git/refs/heads/master": "5b73b6b6265c5b420c6dd0194ba9326f",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "5b73b6b6265c5b420c6dd0194ba9326f",
"assets/AssetManifest.json": "c6fbd7cdb60b5cef738c7c760547598f",
"assets/assets/cards/1000/1.webp": "f8ec0c7bd7d5f94d0e9c870b28438617",
"assets/assets/cards/1000/10.webp": "20d705378d0f860378e8a71d04e6d8d5",
"assets/assets/cards/1000/11.webp": "b58cf51fd00abab79c2459e425a134d7",
"assets/assets/cards/1000/12.webp": "489b329ca06d4dcee6013977d855fbc9",
"assets/assets/cards/1000/2.webp": "b94be57c993957defe41f53ab0a37ab3",
"assets/assets/cards/1000/3.webp": "4c80cdf41bbe059eca3012c2ea2a55a6",
"assets/assets/cards/1000/4.webp": "8387b617aef27360380c06bc75283957",
"assets/assets/cards/1000/5.webp": "8c8581c44d962e274cb85e1abb9adc28",
"assets/assets/cards/1000/6.webp": "dfd9360ffe361b751a1580e5e631da7e",
"assets/assets/cards/1000/7.webp": "e3dbe2aacd4f629db7676142ee7f6896",
"assets/assets/cards/1000/8.webp": "bab37463d9aa104a04b6113f163dc7d7",
"assets/assets/cards/1000/9.webp": "72f3fa2711ab756807d4d7d3cb4bfde3",
"assets/assets/cards/1100/1.webp": "2961c9a87d95e142d0720e7884c6b119",
"assets/assets/cards/1100/10.webp": "c56d20e17570693145310f8622f0ec38",
"assets/assets/cards/1100/11.webp": "2b0ec7c7c396144f9fdd24b8cbe042a3",
"assets/assets/cards/1100/12.webp": "fcd64d810b7aa0166fe2f1e8c6a8c509",
"assets/assets/cards/1100/2.webp": "0cdb335ef33857079af5fc109b26b28f",
"assets/assets/cards/1100/3.webp": "df06a725b21c6e409cc3ea7cac8ca0ee",
"assets/assets/cards/1100/4.webp": "b09f814ad46616f0733827d65cf78e70",
"assets/assets/cards/1100/5.webp": "fab89a0c4b1e11893a2b7dea327ac849",
"assets/assets/cards/1100/6.webp": "a883fe6340dde9d329611202cf738965",
"assets/assets/cards/1100/7.webp": "24c4df72ba9097b1fee3656cea1776db",
"assets/assets/cards/1100/8.webp": "73d6c1a8daef2be89cfe917535e1b06d",
"assets/assets/cards/1100/9.webp": "291e3ced784d8b00d5143b4cab76cc25",
"assets/assets/cards/1200/1.webp": "fdb2cfdb225c710fa11c77d698b37f57",
"assets/assets/cards/1200/10.webp": "e14bf094d17e8d16c3f565953b1c504b",
"assets/assets/cards/1200/11.webp": "e4ee1de3f9f4856a075d4680add9eb33",
"assets/assets/cards/1200/12.webp": "4c3078fe04bb6c39409ac711b1164d7b",
"assets/assets/cards/1200/2.webp": "a83b44446ca26edd9a09b5e9e2e0453d",
"assets/assets/cards/1200/3.webp": "a9b416929564111f84e6ec3904790ccf",
"assets/assets/cards/1200/4.webp": "1accc306cc126dd8892c5a09c1da1a94",
"assets/assets/cards/1200/5.webp": "46aa2c1de73b310260d2847027a7afe6",
"assets/assets/cards/1200/6.webp": "dde2888c94be317824745b7211088cbc",
"assets/assets/cards/1200/7.webp": "1a4d51ef3464786a765bbcb97602ba6e",
"assets/assets/cards/1200/8.webp": "abbb97cf874b8614f085764debab073b",
"assets/assets/cards/1200/9.webp": "cdcbc3289b59200ac520c4e267d64c08",
"assets/assets/cards/1300/1.webp": "31ee54060330be07e5a91a51dd35a66d",
"assets/assets/cards/1300/10.webp": "4ea8adfb3ad2441950e9505ee3f24196",
"assets/assets/cards/1300/11.webp": "6b0e7680cd7edea543e318f023a10885",
"assets/assets/cards/1300/12.webp": "112411df91c14f772a4bc1a8725b9e5b",
"assets/assets/cards/1300/2.webp": "39d3768520b3f7b386060d4c0fcbdbec",
"assets/assets/cards/1300/3.webp": "b2cd22f868dd749c34043fabe4f3f16a",
"assets/assets/cards/1300/4.webp": "de45a054516b957d460f95e5dbaeeed4",
"assets/assets/cards/1300/5.webp": "1bf25d6b9b93f31c9f483e8ce2ec5380",
"assets/assets/cards/1300/6.webp": "04f98c20414ac883f349f2a03d7ea66b",
"assets/assets/cards/1300/7.webp": "174bef21e5624cbd0f379117aae39fc3",
"assets/assets/cards/1300/8.webp": "92ca689a7e3ae7b85f7c94ef50ffb44e",
"assets/assets/cards/1300/9.webp": "843f3f4268d583c9f714634ce69c5473",
"assets/assets/cards/1400/1.webp": "b5e9db1e71b6e76f4dda138886421d81",
"assets/assets/cards/1400/10.webp": "e34e4d7b3751d4dcb0b0c38f9888d3d8",
"assets/assets/cards/1400/12.webp": "6960ecdee2de5416f6ebcbf311478757",
"assets/assets/cards/1400/13.webp": "9a94be2119435f2e626da1d970123e3e",
"assets/assets/cards/1400/2.webp": "916b5dd960c54398476d379972afc9d8",
"assets/assets/cards/1400/3.webp": "875de8c4919584e53ed7f684fd85aac4",
"assets/assets/cards/1400/4.webp": "30043b8648bf41457a4506aa3e74c05d",
"assets/assets/cards/1400/5.webp": "2b1f11e8712decf6836f02d3b5a115a2",
"assets/assets/cards/1400/6.webp": "bb8cb131a9f9c60b54c30e697a5456a1",
"assets/assets/cards/1400/7.webp": "6e2b2f59f4a88bf4d3056c59ff5906e1",
"assets/assets/cards/1400/8.webp": "4b83ff6b981425ab524661857d16ef87",
"assets/assets/cards/1400/9.webp": "3c313bce2f05a6b2413f8915369d42ba",
"assets/assets/cards/1500/1.webp": "490e2f88c7791d4823f86a9fbe517110",
"assets/assets/cards/1500/10.webp": "c306920c78d4b977cbc4949945634d64",
"assets/assets/cards/1500/11.webp": "f3fb080ff986b73e045b3b09046f4923",
"assets/assets/cards/1500/12.webp": "27ac46320934787e25ed1af2229388a2",
"assets/assets/cards/1500/13.webp": "b0fbce99c1653f8a467303cfedaccece",
"assets/assets/cards/1500/2.webp": "b969d295db601a662b56881da71378d7",
"assets/assets/cards/1500/3.webp": "88e6ff7a906b84edf13a63b973a97380",
"assets/assets/cards/1500/4.webp": "e6b78dfde5eb54c3246d3028818d7ade",
"assets/assets/cards/1500/5.webp": "91c2aa734105902f057eb30f2bd2578a",
"assets/assets/cards/1500/6.webp": "167daa1db612baa4a495f74a02baff35",
"assets/assets/cards/1500/7.webp": "ab38507f5c33d79c58c2e88d553df0ee",
"assets/assets/cards/1500/8.webp": "9014b901987d66dbe2f9d4ab4db9b315",
"assets/assets/cards/1500/9.webp": "5777b4094d756d6a262383492c63053f",
"assets/assets/cards/1600/1.webp": "88a2e4ab2b86f2c983b8089d72e6570e",
"assets/assets/cards/1600/10.webp": "f3dd4facadcbdfce553ca12f0c4ff3bb",
"assets/assets/cards/1600/11.webp": "bd1a098cfe84a9eaaea97dde59e5dd14",
"assets/assets/cards/1600/12.webp": "0fa1f92a0af779d92535c57972f0df37",
"assets/assets/cards/1600/2.webp": "a0a59cec481069d000ad9db621fa5c8d",
"assets/assets/cards/1600/3.webp": "e734aee0f18831a59af15a339a1beacc",
"assets/assets/cards/1600/4.webp": "a63374fc699b3603ef43ea87e1dd53fc",
"assets/assets/cards/1600/5.webp": "0a99ae97a550afe885c1681ae988e6d6",
"assets/assets/cards/1600/6.webp": "739bb484585a3cecd0ba3eb54769f92c",
"assets/assets/cards/1600/7.webp": "d20b3a8efb6d92bf35fa7532e14e70c7",
"assets/assets/cards/1600/8.webp": "f2298d7c4a0e5a5456dadaeffd140257",
"assets/assets/cards/1600/9.webp": "6a7416b4d628236959e3ecb2c75ef593",
"assets/assets/cards/1700/1.webp": "79217c194beb3b311be2ae72e345331b",
"assets/assets/cards/1700/10.webp": "25ffc3c83ce9a8d2cb72dd6343338af5",
"assets/assets/cards/1700/11.webp": "737e1df99d062e7dac69affe39ea2a8a",
"assets/assets/cards/1700/12.webp": "9ef57125ddfe7bf7296f177247b304dd",
"assets/assets/cards/1700/2.webp": "242eb5f1417ae276c7d75ae7c2548622",
"assets/assets/cards/1700/3.webp": "6511f3ccd7a9df5deb8a54fcf97b903b",
"assets/assets/cards/1700/4.webp": "6c01d9fe6388829ed9774d2cf4fe7b12",
"assets/assets/cards/1700/5.webp": "8392c1d894d918b94bc2358297b2d777",
"assets/assets/cards/1700/6.webp": "6bd656e5fb566579bd277da1e2a9aab3",
"assets/assets/cards/1700/7.webp": "6d6e2c53ee8de92131b80af7dd5a2cb7",
"assets/assets/cards/1700/8.webp": "4e28c8f95beb75aff6fc7bd4aa9fc4d4",
"assets/assets/cards/1700/9.webp": "ae3b8e22196ceae1933090d563ec936e",
"assets/assets/cards/1800/1.webp": "d1c272c1ddc0dcd08584e4643d510162",
"assets/assets/cards/1800/10.webp": "b8d130030f315b4ebef2e717e2f16d77",
"assets/assets/cards/1800/11.webp": "5400150b53ff4ba8d26498e2481cf025",
"assets/assets/cards/1800/12.webp": "cce06e3158ddc4d57944005320986802",
"assets/assets/cards/1800/2.webp": "6808861b51510117c8c998231a843efa",
"assets/assets/cards/1800/3.webp": "618425260c3284b3bd7899dd9185e06a",
"assets/assets/cards/1800/4.webp": "4e61fb040bf1dfb37bb29d07a408874f",
"assets/assets/cards/1800/5.webp": "af42864ddde3830c83df973574f77762",
"assets/assets/cards/1800/6.webp": "d25c7a7cf58218fe57d6aa2e95366312",
"assets/assets/cards/1800/7.webp": "0db4543d0b4cc6a87da6d895ef118cbc",
"assets/assets/cards/1800/8.webp": "af7041f079c929a303189ded63156c76",
"assets/assets/cards/1800/9.webp": "28ac3fd66a07eaa790af510155fc17e8",
"assets/assets/cards/1900/1.webp": "6e31d67d4525c4b78978a67908af7dcb",
"assets/assets/cards/1900/10.webp": "397049e42d05f537161f1b33372dd498",
"assets/assets/cards/1900/11.webp": "4bfba7b37cf4fa5b1a8413ba661bed89",
"assets/assets/cards/1900/12.webp": "30a5912c5ef715d3e7a3f0b8139fe3b3",
"assets/assets/cards/1900/2.webp": "b5c18cbeedc0117f79ed9281a5f9bf51",
"assets/assets/cards/1900/3.webp": "8f78cca40e6757ad8d6e8a29098b46ee",
"assets/assets/cards/1900/4.webp": "bf4e2efb1f2b7923fd8a1fa8d269f898",
"assets/assets/cards/1900/5.webp": "a9433715e79733e262aa3a2d91dde916",
"assets/assets/cards/1900/6.webp": "39f341928e4b26bc7be2dadfc66a5196",
"assets/assets/cards/1900/7.webp": "de5f7891e8c138f21983c0b84be9a3c4",
"assets/assets/cards/1900/8.webp": "a09f180ed1ae7074c8ceeaf7a8d2c7e7",
"assets/assets/cards/1900/9.webp": "242f627fd29623729ebdf9c66ace483f",
"assets/assets/cards/2000/1.webp": "683dba9fef67fc7e646ae59a9a6971ff",
"assets/assets/cards/2000/10.webp": "f1c5692122198666d1846ed6d5e61cd1",
"assets/assets/cards/2000/11.webp": "56a93856143af989a4eae73a6946660a",
"assets/assets/cards/2000/12.webp": "0c4db422814889e30101acd2fc2e17eb",
"assets/assets/cards/2000/2.webp": "dccb198480a50a2c71e0aebfbc3b682e",
"assets/assets/cards/2000/3.webp": "374dcede4cd9f94c197bb8b4edc1bc67",
"assets/assets/cards/2000/4.webp": "cd036951ffea63d56a51af8c8ed28e3e",
"assets/assets/cards/2000/5.webp": "cd475e68fefb72a05ffd7f082e05f311",
"assets/assets/cards/2000/6.webp": "7df6f59d7153fc2b4fb5b836b77fbe96",
"assets/assets/cards/2000/7.webp": "2788187ca1bcab0d8ce8076589560c5e",
"assets/assets/cards/2000/8.webp": "2f760fec5fafc95a14f8fdde77244efd",
"assets/assets/cards/2000/9.webp": "ef4da609c027d3414ff999b76da5c393",
"assets/assets/cards/2100/1.webp": "92cd6b58863fc7f44ea02a81f1fcea96",
"assets/assets/cards/2100/10.webp": "feaaa894ac704cc2c45f8fc73fc61ceb",
"assets/assets/cards/2100/11.webp": "906f623f4d93585f966dff5d917ffc1f",
"assets/assets/cards/2100/12.webp": "27449247a95f03b2cb0f94145dcf28fb",
"assets/assets/cards/2100/2.webp": "b72f221f6d912fc8b464a6cf81eeeeb5",
"assets/assets/cards/2100/3.webp": "8ab20e9e7334aa291353f2bde13ad23d",
"assets/assets/cards/2100/4.webp": "015a5e2d83a6100ca526d2989277d24f",
"assets/assets/cards/2100/5.webp": "6bf10e93a9f488fbc74cf6409619cdc9",
"assets/assets/cards/2100/6.webp": "7b5d48a0143ffd7caf73afbeec6809e2",
"assets/assets/cards/2100/7.webp": "9ac36cc0924e99351d145d90ed78ba4d",
"assets/assets/cards/2100/8.webp": "1c100ff03ed9f766a235efa508a15d28",
"assets/assets/cards/2100/9.webp": "b73f65eb098f906f7bebd846a8a23a07",
"assets/assets/cards/2200/1.webp": "7df95df19e4beab60320bc2b594b3005",
"assets/assets/cards/2200/10.webp": "bdc5f59afa109251d189001e3d407250",
"assets/assets/cards/2200/11.webp": "74f151e3e50e3190ca392cf47b942f4f",
"assets/assets/cards/2200/12.webp": "7478c7f23c1ed52f0f7bab38b6a17a6a",
"assets/assets/cards/2200/13.webp": "25d6b4660ae1030b3a2ed6393e1a191c",
"assets/assets/cards/2200/2.webp": "5cefeea4148aa955ca20d056f027b902",
"assets/assets/cards/2200/3.webp": "3c1a778b4623e0d6867aa676ed9c760d",
"assets/assets/cards/2200/4.webp": "26ce6b3a5400dff17c3ada7a725cc358",
"assets/assets/cards/2200/5.webp": "4f020c8777623efe0e46aa420f5740ad",
"assets/assets/cards/2200/6.webp": "a0ac2737a979f3ff75fd9d31de1a0fd3",
"assets/assets/cards/2200/7.webp": "b94314e8ed2a24d2607a5c4d00f75359",
"assets/assets/cards/2200/8.webp": "89b6d3041a67718c66c08f6d08266c55",
"assets/assets/cards/2200/9.webp": "b3252aa9b989330acdf4725b8b12279a",
"assets/assets/cards/2300/1.webp": "d542fcc042b8e45eb7529f7b4c2061a7",
"assets/assets/cards/2300/10.webp": "914b7fc0031175acaf60c38da1f613a9",
"assets/assets/cards/2300/11.webp": "754cc8291e24719beac3ba80009f2c2a",
"assets/assets/cards/2300/12.webp": "e3075440c8930dad7d8803c0a629f55b",
"assets/assets/cards/2300/2.webp": "62931eb890ce69f7d1c063a1b6a5b033",
"assets/assets/cards/2300/3.webp": "bc8bb6c4fdd44d857366bcd5b717f92c",
"assets/assets/cards/2300/4.webp": "ef8be154688057da481c23d6d123b714",
"assets/assets/cards/2300/5.webp": "a755457c40f7f5e839a2eae41def5c82",
"assets/assets/cards/2300/6.webp": "67793d8df82fd9e5d40c5412bb8c2c5e",
"assets/assets/cards/2300/7.webp": "c2d5fc7131ea8fb9759bc1b8cc51ff4e",
"assets/assets/cards/2300/8.webp": "049122a3d1fcff0d38b89a8be7e5e539",
"assets/assets/cards/2300/9.webp": "c1cf46c1b0592d256711987b1b6af6be",
"assets/assets/cards/2400/1.webp": "045512e3042a2f6295b42208453b6d0e",
"assets/assets/cards/2400/10.webp": "16ad3b7cfa0c76628c6adf43c4f19ccd",
"assets/assets/cards/2400/11.webp": "f9942079f0ad4b3f817301def01f5c72",
"assets/assets/cards/2400/12.webp": "d063592549f4ed6f11f07b02cdb82e04",
"assets/assets/cards/2400/2.webp": "1fa8011c40bde1bde844c3276a732015",
"assets/assets/cards/2400/3.webp": "f886333cd518c2edb46ec65f313a45cf",
"assets/assets/cards/2400/4.webp": "d90d3c2a3a942c8949567e0fb3b9dd36",
"assets/assets/cards/2400/5.webp": "eeb26c0955239be605ec397df5993c1e",
"assets/assets/cards/2400/6.webp": "0107cc535b702d10dbaba7ecf07a455c",
"assets/assets/cards/2400/7.webp": "9a57a10ad60319ae5533c78acfebfca0",
"assets/assets/cards/2400/8.webp": "7a7896f1c5ef08aebbf2054748b3116c",
"assets/assets/cards/2400/9.webp": "6df667790a8722be53bc1e5c93d5c6af",
"assets/assets/cards/2500/1.webp": "31081e06a880059152e09fddb9506e2c",
"assets/assets/cards/2500/10.webp": "08f8382bb5a30d1d26a3860fb17e17d3",
"assets/assets/cards/2500/11.webp": "03ff07361cadc8aef78aa7aa26dcfd37",
"assets/assets/cards/2500/12.webp": "cc3a04b3dc6072a3b9bc478d4259459e",
"assets/assets/cards/2500/2.webp": "e0c801e84691a5ce797eed48f2e187fa",
"assets/assets/cards/2500/3.webp": "8136aa31a4e6ac17fe0261b300fec8be",
"assets/assets/cards/2500/4.webp": "cf5f2add6c6af90008c5b9d8c3f57947",
"assets/assets/cards/2500/5.webp": "ce00e269dc196cda727bc6aaee79e588",
"assets/assets/cards/2500/6.webp": "bf17ee1d067a0f0d54f39f9a2d3a81fa",
"assets/assets/cards/2500/7.webp": "57b6089e24ba3dac57be22b8f36cba83",
"assets/assets/cards/2500/8.webp": "9418bd0f29266bb73595e9c430a3fdd6",
"assets/assets/cards/2500/9.webp": "ef61c3a7afa642d5ada3eff0112dc5c9",
"assets/assets/cards/2600/1.webp": "deb4c5d62756b3e661f4104bd1d5d525",
"assets/assets/cards/2600/10.webp": "ebe076a6a48e0b1492017d3422237b77",
"assets/assets/cards/2600/11.webp": "dc5a5aea8fc008082afa752930f61ee4",
"assets/assets/cards/2600/12.webp": "fdc1aadf0a4a0e364b09c457a0cfd065",
"assets/assets/cards/2600/2.webp": "555c06b2e9a90d8c8c95e85fe8626327",
"assets/assets/cards/2600/3.webp": "1c7706c45dedf98ff99a6cb0337a5882",
"assets/assets/cards/2600/4.webp": "94650c5ff55fd168963f63f3d3c789ab",
"assets/assets/cards/2600/5.webp": "2e2847042d1f950bfbbb7e0b2a8d673a",
"assets/assets/cards/2600/6.webp": "52c7c19c34e51f8a4ab77e35abe663b3",
"assets/assets/cards/2600/7.webp": "f31801c1c69672d780bd26411debe6cd",
"assets/assets/cards/2600/8.webp": "40f0f0915896f08bd9ca48b237661f4e",
"assets/assets/cards/2600/9.webp": "7233bf42a447742f2a03152577785fd4",
"assets/assets/cards/2700/1.webp": "bcad964d8870f2a79daab200f385c72c",
"assets/assets/cards/2700/10.webp": "5dfcc641fcf40eac5ae1bc35f0a0fd77",
"assets/assets/cards/2700/2.webp": "e83dcc18a80cd078ea80611ce1d2228a",
"assets/assets/cards/2700/3.webp": "fc07c20d7999822357fed20b767581f4",
"assets/assets/cards/2700/4.webp": "7dcfbdc6589afc49d944688c74bd1967",
"assets/assets/cards/2700/5.webp": "b17755c57ac1803fbd9417969766e207",
"assets/assets/cards/2700/6.webp": "d70fbd125d49cb62c50ce92c5615f2b7",
"assets/assets/cards/2700/7.webp": "c9f57332aaea2d35aa468a8e113dc977",
"assets/assets/cards/2700/8.webp": "475a7aeff87ab3c76b84b4ad9b1ed73d",
"assets/assets/cards/2700/9.webp": "d9e7b45ecb266e2a99886be4d9044aa5",
"assets/assets/cards/2800/1.webp": "6cc035a57bb00011dc8cd1fdc5831242",
"assets/assets/cards/2800/10.webp": "e66003a6d81baed1821530e67f833eba",
"assets/assets/cards/2800/11.webp": "3c932966642d105ee5819d72049a9fc3",
"assets/assets/cards/2800/12.webp": "b234282ce13edfb2862d6eafaf34cee6",
"assets/assets/cards/2800/2.webp": "2090c6f125d98e0b380bbee77289663d",
"assets/assets/cards/2800/3.webp": "beca3130c19909469ccaa907c7e79992",
"assets/assets/cards/2800/4.webp": "ab197d2774cea55d3aec0d442cc53e7f",
"assets/assets/cards/2800/5.webp": "9cedfb2f0134db225277cc5a0bb9135f",
"assets/assets/cards/2800/6.webp": "8a84dbb76691e5f007868449e62daac2",
"assets/assets/cards/2800/7.webp": "6392355d193b28bf81145a0087e26e12",
"assets/assets/cards/2800/8.webp": "4173fdecc5c546030c3d617f9b719dc2",
"assets/assets/cards/2800/9.webp": "f385dfd0dedb2019d562b7c04d88e978",
"assets/assets/cards/2900/1.webp": "d24558aeb167c8fa0441c45c75006dff",
"assets/assets/cards/2900/10.webp": "ffae7107dec44aed25e1abfe4769faa2",
"assets/assets/cards/2900/11.webp": "07c4df98f3e16fcbcbb9b48b8fa2a493",
"assets/assets/cards/2900/2.webp": "bb99d53237b382d8e791a28797d15ae7",
"assets/assets/cards/2900/3.webp": "752f646e663bc163d43ea50ec358fd44",
"assets/assets/cards/2900/4.webp": "074ebbb321fa01ee08486ca9eff3d520",
"assets/assets/cards/2900/5.webp": "f76fc6812cc3d20f8c3a113946bacc55",
"assets/assets/cards/2900/6.webp": "4593e54377fe799c47d7d474114041ef",
"assets/assets/cards/2900/7.webp": "607b8868e64c568810ceffd21ab3b285",
"assets/assets/cards/2900/8.webp": "4e4e424939f34aa21955e193ebdf9816",
"assets/assets/cards/2900/9.webp": "f30c78afaede0e64af7dfbd39faf9f94",
"assets/assets/cards/3000/1.webp": "52c3c2dc3d9aac8d817840581e3dda0b",
"assets/assets/cards/3000/10.webp": "25019e1d4b8dbe8d94a6f6b52dc7e461",
"assets/assets/cards/3000/2.webp": "990e9c7fd26258856b88c8e0dd2e994b",
"assets/assets/cards/3000/3.webp": "153452e8b243b3129f37fcceab694cd6",
"assets/assets/cards/3000/4.webp": "d8483814ecc30dc62bdc5c1ccc28a090",
"assets/assets/cards/3000/5.webp": "a9d1c29eb8268e8207f83e9192ebe5fa",
"assets/assets/cards/3000/6.webp": "822f0ef5e74bb810500afb8bf54bd809",
"assets/assets/cards/3000/7.webp": "5a390b77d97adf80e4dcf500cd2b7193",
"assets/assets/cards/3000/8.webp": "6d06962fe13465fd664a69e148765405",
"assets/assets/cards/3000/9.webp": "a7974c287e3c03fe54a31c74df4d2c75",
"assets/assets/cards/3100/1.webp": "4557276db7ab33026368d26da61d7caa",
"assets/assets/cards/3100/10.webp": "d5891a924466e44e21451d7334913d4f",
"assets/assets/cards/3100/11.webp": "d2e1cb323077db2804e0408a1662de54",
"assets/assets/cards/3100/12.webp": "8ae0d977007c20ab94a19567a7ef2f14",
"assets/assets/cards/3100/2.webp": "bdda698f8fa2d7d8b32a7cf497729e63",
"assets/assets/cards/3100/3.webp": "e88b88ad57e03763a4062c0c2507392e",
"assets/assets/cards/3100/4.webp": "0613a85dde54cb0ac6ea27f82c63907b",
"assets/assets/cards/3100/5.webp": "a40d47cbd98c6c6f6b3242a380951478",
"assets/assets/cards/3100/6.webp": "b6678368c8097d08a5efe98c96c93cca",
"assets/assets/cards/3100/7.webp": "7c4b8f68970c0d010d151af4b50d948a",
"assets/assets/cards/3100/8.webp": "5975a67153f98e8c78983b485f20d7e0",
"assets/assets/cards/3100/9.webp": "a96f4aea97bbb5fd369895e935e0fdff",
"assets/assets/cards/3200/1.webp": "6415c7ac1752758b717e1fa07e15a35e",
"assets/assets/cards/3200/10.webp": "72b3d8838a83409c6e6e6398a8f3650c",
"assets/assets/cards/3200/11.webp": "4cd2eb6ef2b65d80d3e0288d0ecf1cbb",
"assets/assets/cards/3200/12.webp": "40b0fcae34008503e0ac1452dcc8e0a3",
"assets/assets/cards/3200/2.webp": "6d26d3d9c5c3b81b85fa3e7c74e2f580",
"assets/assets/cards/3200/3.webp": "2f03bb6a955948c5dbc47a0f07db9267",
"assets/assets/cards/3200/4.webp": "873618b8bb0146a14bf67b0cadaf5882",
"assets/assets/cards/3200/5.webp": "904d9666fe37cb12479815e2ac9c6ee6",
"assets/assets/cards/3200/6.webp": "b9091b882bf4611eac47ba96118315a4",
"assets/assets/cards/3200/7.webp": "e12c857fe783aea6a28b50d535a32cb5",
"assets/assets/cards/3200/8.webp": "28d7fe5f06c250fb645198258c8d178a",
"assets/assets/cards/3200/9.webp": "8e360db144938fc7875315bab833577a",
"assets/assets/cards/3300/1.webp": "ca0ba6722be4395367dcd3ffeccc1e06",
"assets/assets/cards/3300/10.webp": "d548bb4f14b8c4728fd21d1f9003ce7d",
"assets/assets/cards/3300/11.webp": "2a864a2e53b5a0d7157d32331c1d30c2",
"assets/assets/cards/3300/12.webp": "ed2475833af1771c8ae624970e04b955",
"assets/assets/cards/3300/2.webp": "5b937d4846a07958345af04bc2502dee",
"assets/assets/cards/3300/3.webp": "e67c6bb4b7ff96d077c304aff4395960",
"assets/assets/cards/3300/4.webp": "fd9c3aa650c9be0a9a289c6932bd6a4a",
"assets/assets/cards/3300/5.webp": "7905bb5d8f20f6b8d889c6dfe2633949",
"assets/assets/cards/3300/6.webp": "3bb576acd8ba7cc5db6431aca5e5d8c0",
"assets/assets/cards/3300/7.webp": "1a6ff09e7812be6bf4068da10f57e431",
"assets/assets/cards/3300/8.webp": "cc9b4b9531f68917a6f27959e5437e12",
"assets/assets/cards/3300/9.webp": "eb73b22421b002fc3414dc912482d2f4",
"assets/assets/cards/3400/1.webp": "b2d2706e0b4650cf528f1289973589c6",
"assets/assets/cards/3400/10.webp": "7cb77009f0cda1ae6dd7aa6875283e6c",
"assets/assets/cards/3400/11.webp": "22f9cdd538c047c8701154557fc7e4fb",
"assets/assets/cards/3400/12.webp": "c68307ed69d587587020b7b2ab191f4f",
"assets/assets/cards/3400/2.webp": "eb5758aa47868d53f905c372fe68a20d",
"assets/assets/cards/3400/3.webp": "360644b30a24b25d77a4609b000efd54",
"assets/assets/cards/3400/4.webp": "fedcc2447f52b95d820ea0b09430d9de",
"assets/assets/cards/3400/5.webp": "337400f1fcdd424f6d587dfd065eb746",
"assets/assets/cards/3400/6.webp": "f0a88069f0e9d2e0e6a91e3654261976",
"assets/assets/cards/3400/7.webp": "5f1f74d3bc0be2e065131c667a01fe92",
"assets/assets/cards/3400/8.webp": "36fc97be8a7e4c3591c6dfb61708b193",
"assets/assets/cards/3400/9.webp": "ec9a70fa8aeec2753d69ea02a0ca16c8",
"assets/assets/cards/3500/1.webp": "a26c1d0f8d47320e29ba5b690f656398",
"assets/assets/cards/3500/10.webp": "14e647e2b981b113750b640a40a66a6d",
"assets/assets/cards/3500/11.webp": "12272f98e7c5beeb4598541941c26f0b",
"assets/assets/cards/3500/12.webp": "e8d0036310cc55a2cd1e5924076446b9",
"assets/assets/cards/3500/2.webp": "566baf9b6b40fa9f99a908af533c89bc",
"assets/assets/cards/3500/3.webp": "76dd6d0f77bf47b3b81607a85f50f42f",
"assets/assets/cards/3500/4.webp": "98e7162308998ae621a7034ffd2e7efa",
"assets/assets/cards/3500/5.webp": "c0870e69b18153b1f3cf4524b3757204",
"assets/assets/cards/3500/6.webp": "86ce2d8d2bf8f69d3e2be45be4c7eab4",
"assets/assets/cards/3500/7.webp": "0c85b97fd97e9217684e708601113293",
"assets/assets/cards/3500/8.webp": "4a35f771e8f86cb68cfeabccc8cad8b9",
"assets/assets/cards/3500/9.webp": "655010e475cc1fc9d52df81abf64ce5e",
"assets/assets/cards/covers/1000.webp": "25fbb1d40407e8186ccf8541351e1296",
"assets/assets/cards/covers/1100.webp": "d3a8a6fa4d143ba50dece44321046872",
"assets/assets/cards/covers/1200.webp": "cfeeed193e679abff970eea24d832c7a",
"assets/assets/cards/covers/1300.webp": "7d04b3c256577e6cca0dfb5b107196cf",
"assets/assets/cards/covers/1400.webp": "dbb38aea6df2e80679a0b239840bcaa5",
"assets/assets/cards/covers/1500.webp": "4132f536773bcbcd009673e2a9b11ba8",
"assets/assets/cards/covers/1600.webp": "f418bc8337f210e9457d4ddc2d2d5873",
"assets/assets/cards/covers/1700.webp": "19d74aa62fc94e1f93d9ebb6f09e244e",
"assets/assets/cards/covers/1800.webp": "daa95d7c1a08606786ac090f94bc2cf7",
"assets/assets/cards/covers/1900.webp": "439f15c0f2c152bf06f50ce40d12f0b4",
"assets/assets/cards/covers/2000.webp": "614184934eaa83df7f7ff99afbfc1cce",
"assets/assets/cards/covers/2100.webp": "d4a6a8915f91f03eeb2927e4d8fa4244",
"assets/assets/cards/covers/2200.webp": "99a3ea91163975aae63681f5f843d761",
"assets/assets/cards/covers/2300.webp": "d1d11ee95ee14a9af4bcd814c3bad95e",
"assets/assets/cards/covers/2400.webp": "7a796761a6486538a0bf25f306ee5de8",
"assets/assets/cards/covers/2500.webp": "05d1eab7f6c00468c78abbcb4be37540",
"assets/assets/cards/covers/2600.webp": "e6ce5b2c39a6824dd7c8bbde30fc2d41",
"assets/assets/cards/covers/2700.webp": "cd7dd782361aa60a4361a7712eb4329c",
"assets/assets/cards/covers/2800.webp": "64bd18bd7a521d5ce425ec6d84765f9d",
"assets/assets/cards/covers/2900.webp": "41fe1203fe8658fbcbc50cba1aa8d9fb",
"assets/assets/cards/covers/3000.webp": "25f035c363da14ac13c958d19fc2070a",
"assets/assets/cards/covers/3100.webp": "cad26aa57c6370f1cd5ee954d318c237",
"assets/assets/cards/covers/3200.webp": "b0606dbc997f0eca178381a3fe68ed4c",
"assets/assets/cards/covers/3300.webp": "d3b29a99326e5ac2b95a4cd664cac0aa",
"assets/assets/cards/covers/3400.webp": "4c8b2087993c995d903835f230ad67e0",
"assets/assets/cards/covers/3500.webp": "9caa73dfbf2e704092b35c2b93be798d",
"assets/assets/data/cards.json": "12db816f3ed56ed8a25e191da1a4943d",
"assets/assets/data/stickers.json": "0e379f956e1ec1d6a82199d637c1a9dd",
"assets/assets/google_fonts/AmaticSC-Bold.ttf": "8ba765ce9580a3bdae76b59130d0ef8a",
"assets/assets/google_fonts/AmaticSC-Regular.ttf": "e9a42e339f93a719c17be53c386dbbfb",
"assets/assets/google_fonts/OFL.txt": "80aa560f6c6c595c5ef0ad0d393d2c69",
"assets/assets/icons/SvgIcons.ttf": "d9aadda0ca8971fa9d93b04ed060260b",
"assets/assets/images/logo.png": "27e8780913f48bb6721ad663b857aace",
"assets/assets/stickers/100100/1.webp": "2a1a614ad3ba42d34c447fe9534b46a5",
"assets/assets/stickers/100100/10.webp": "213ba1671bee98fc658bb7bac2d75618",
"assets/assets/stickers/100100/11.webp": "7985f43856d507d1cc445077e59f21ea",
"assets/assets/stickers/100100/12.webp": "14593ae4608c4648b95f9766579db0d2",
"assets/assets/stickers/100100/2.webp": "092c05aae69a810356d66853c383e904",
"assets/assets/stickers/100100/3.webp": "b9832f55e6e4207822c81ae301155730",
"assets/assets/stickers/100100/4.webp": "3cbb042b3e6c0a0cf49544dec6798f75",
"assets/assets/stickers/100100/5.webp": "0eb563ff240b42e7768b9fd1e43ef0c2",
"assets/assets/stickers/100100/6.webp": "7a570ad6cdcf5049874ef08f575e43ca",
"assets/assets/stickers/100100/7.webp": "8d163e89e40ef8f0cfd6bf0e150d09ce",
"assets/assets/stickers/100100/8.webp": "f0f940b587bf260044ee17329bf7e28e",
"assets/assets/stickers/100100/9.webp": "3b59c8eb9076350038000dbfb2a2a14b",
"assets/assets/stickers/100200/1.webp": "fc24e9da7a627db6a4d12d2bda9e553b",
"assets/assets/stickers/100200/10.webp": "4020e37444181d8970264b3ad5cab431",
"assets/assets/stickers/100200/11.webp": "f05e049ced4420191189b953f8993f8b",
"assets/assets/stickers/100200/12.webp": "a20baa20dbfddb1dc9ead1586b93be7e",
"assets/assets/stickers/100200/2.webp": "23f72573530af4bc08b0fd1de9637f2c",
"assets/assets/stickers/100200/3.webp": "ad28abbd9089e8a099007ecc0b5a872e",
"assets/assets/stickers/100200/4.webp": "6214579917933afcc155505b191388a2",
"assets/assets/stickers/100200/5.webp": "0f0a2ede3029f22e354588a0e651a4ff",
"assets/assets/stickers/100200/6.webp": "e5f00b7d96e4c180efd6917c0d6e12af",
"assets/assets/stickers/100200/7.webp": "a4737979395093495e53102565b89e5d",
"assets/assets/stickers/100200/8.webp": "68b69d6ea0cecaf1b566429508c7e298",
"assets/assets/stickers/100200/9.webp": "3e3cdf40c8d7fa17844acdf6328f002c",
"assets/assets/stickers/100300/1.webp": "5167f338328dbffe1dc74c9d9077e2ca",
"assets/assets/stickers/100300/10.webp": "1c60bd0efb587a4562f727468d50ed3a",
"assets/assets/stickers/100300/11.webp": "4aed7728753a9dab9d0f3911232724ab",
"assets/assets/stickers/100300/12.webp": "8821551e787ff62ef450c5e7d98d7801",
"assets/assets/stickers/100300/2.webp": "5d804b9cbd2a727517e73fbdbcd7d666",
"assets/assets/stickers/100300/3.webp": "c33a196c78f981056672fe417a0d116d",
"assets/assets/stickers/100300/4.webp": "637cb88775af65ab5142266eb737cb08",
"assets/assets/stickers/100300/5.webp": "73c95279391c77cc45907598d42071d9",
"assets/assets/stickers/100300/6.webp": "a3c36b77cb106fb7a928246aac695558",
"assets/assets/stickers/100300/7.webp": "9763fcb7b28d47137afdf1a6524551dd",
"assets/assets/stickers/100300/8.webp": "d1b2c0b289816eb946331c6c6b44bfaa",
"assets/assets/stickers/100300/9.webp": "9abd0a8c6d1381fc6000173d56f949f4",
"assets/assets/stickers/100400/1.webp": "d852aebfda79ebaa0a3383ce5d1c452c",
"assets/assets/stickers/100400/10.webp": "e6b46ac340ac7481e64f2d119e6da212",
"assets/assets/stickers/100400/11.webp": "6489acf7ca4f17516a8c77f8cebc6a51",
"assets/assets/stickers/100400/12.webp": "7c0397f096bc5f2ecbc2f3737c235b52",
"assets/assets/stickers/100400/2.webp": "e3a4bcf812fcc46c70fc63c767011a4e",
"assets/assets/stickers/100400/3.webp": "6bc15ec9fc4f9b548634849890f6ac39",
"assets/assets/stickers/100400/4.webp": "b1a2d8f0bcbeb02d96acb5c184fd524b",
"assets/assets/stickers/100400/5.webp": "3706c5fd0adbb4e8ff658a30caf20f28",
"assets/assets/stickers/100400/6.webp": "17f0c3d54432ca9211cc1d21c9179597",
"assets/assets/stickers/100400/7.webp": "14b6d46931ded211e2007cbb58f83730",
"assets/assets/stickers/100400/8.webp": "368ed3061ee9657a8c0111dc48482caa",
"assets/assets/stickers/100400/9.webp": "5433cfac83f21fe9dc6002a2b1000944",
"assets/assets/stickers/100500/1.webp": "0f495cc2dfcf3fd3071ea451c3c8721f",
"assets/assets/stickers/100500/10.webp": "7eb59745df5dd09d43224a540f1bbde6",
"assets/assets/stickers/100500/11.webp": "9a844a727387cb04e8664cdc4d9373aa",
"assets/assets/stickers/100500/12.webp": "eb780dc8c5b2e38213fb7fa8761462ce",
"assets/assets/stickers/100500/2.webp": "26e23a2ea8f2d598c7d2fe31bce3f25b",
"assets/assets/stickers/100500/3.webp": "9ca01d7a705761ab5eb3298059eba9ee",
"assets/assets/stickers/100500/4.webp": "e22a2ab65bb9cf3d99b6a477f412fe72",
"assets/assets/stickers/100500/5.webp": "7b58fb49c90c928f2304bc6b8b0cb274",
"assets/assets/stickers/100500/6.webp": "06b3ca4ccad6c0864543f8dfe10f9466",
"assets/assets/stickers/100500/7.webp": "a9e2f8d5fa75dc9dc9847d812735bcb9",
"assets/assets/stickers/100500/8.webp": "30181604b47047839337a2790f2320c3",
"assets/assets/stickers/100500/9.webp": "d8f144191c0073a441bf8c22cec627ed",
"assets/assets/stickers/covers/100100.webp": "2a1a614ad3ba42d34c447fe9534b46a5",
"assets/assets/stickers/covers/100200.webp": "fc24e9da7a627db6a4d12d2bda9e553b",
"assets/assets/stickers/covers/100300.webp": "5167f338328dbffe1dc74c9d9077e2ca",
"assets/assets/stickers/covers/100400.webp": "d852aebfda79ebaa0a3383ce5d1c452c",
"assets/assets/stickers/covers/100500.webp": "0f495cc2dfcf3fd3071ea451c3c8721f",
"assets/assets/stickers/trays/100100.png": "4bf4f95fd9ee2c08d8e5a148a15ce713",
"assets/assets/stickers/trays/100200.png": "949382db0debe69d9e49fc0d6db38a19",
"assets/assets/stickers/trays/100300.png": "40779bf691857c10415c5dc40b7f5f99",
"assets/assets/stickers/trays/100400.png": "b105f107aa0464c95fb77c75d0ccb7c4",
"assets/assets/stickers/trays/100500.png": "7e706dc4dde923f8d193b54d7fbbb26e",
"assets/FontManifest.json": "69b887b8db17ff402bd7a27aed5a7991",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "92cc5496f202262caa393122af0cc4fa",
"assets/shaders/ink_sparkle.frag": "010b931311896b2bb599eb665b53d6ee",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "d3c508f1a105b79bd28dd1a9b5f8d1ee",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "a7c7b8f9f9dcf4009e461e5d68ee154d",
"icons/Icon-512.png": "033f60cf44bf946dc9584fa12283d138",
"icons/Icon-maskable-192.png": "322c26a43f146edc92eba2d8a6d47b32",
"icons/Icon-maskable-512.png": "644ebdc4fb84c531fbfc94d681199009",
"index.html": "0c9f469cee8afd5991c823fd108ed797",
"/": "0c9f469cee8afd5991c823fd108ed797",
"main.dart.js": "324c0e6779a1e5ba9012d9a49e4fb3e8",
"manifest.json": "30706d90294f18fe57fed2c4a57e9ee3",
"splash/img/dark-1x.png": "0410585173de4cf5baab377fc3703ed9",
"splash/img/dark-2x.png": "5b3d4950f64e401fa6a42a1377b8781d",
"splash/img/dark-3x.png": "d4b0522e0c862382cf7ac8a912b69050",
"splash/img/dark-4x.png": "ad1675aca3bc2bd5c2d0f451ef7f2e34",
"splash/img/light-1x.png": "0410585173de4cf5baab377fc3703ed9",
"splash/img/light-2x.png": "5b3d4950f64e401fa6a42a1377b8781d",
"splash/img/light-3x.png": "d4b0522e0c862382cf7ac8a912b69050",
"splash/img/light-4x.png": "ad1675aca3bc2bd5c2d0f451ef7f2e34",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "7ab8ecd80a887b58297eee3c6ddcda65",
"version.json": "1d2ccb1215b87fb9cebd6eed87c87ba6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
