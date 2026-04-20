(function(){
    var script = {
 "start": "this.init()",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_860BE76B_A61F_4202_41B9_57B82974F7FC",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarMargin": 2,
 "class": "Player",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "visible",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "vfov": 180,
 "label": "view dalam kanan",
 "hfovMin": "135%",
 "id": "panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D",
   "yaw": -179.89,
   "class": "AdjacentPanorama",
   "backwardYaw": -78.36,
   "distance": 1
  },
  {
   "panorama": "this.panorama_801A2B1A_95E7_7515_41DE_86432AF291D3",
   "yaw": 90.26,
   "class": "AdjacentPanorama",
   "backwardYaw": -179.82,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_B1109DDF_A639_C601_41D3_5D9E9F0AACBF",
  "this.overlay_BDBA6323_A629_C202_41DF_917A743395FE",
  "this.overlay_8792B23C_A679_4207_41CB_C42B5A985A9D",
  "this.overlay_87530857_A67F_4E01_41A2_DBEACAB1D1EE",
  "this.popup_87DB2303_A626_C201_41DE_78A2FBBD6C3B",
  "this.popup_8475B94E_A629_4E03_41B6_7B12691C9108"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "vfov": 180,
 "label": "view dalam",
 "hfovMin": "135%",
 "id": "panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776",
   "yaw": -78.36,
   "class": "AdjacentPanorama",
   "backwardYaw": -179.89,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6",
   "yaw": 79.23,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.76,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC",
   "yaw": -179.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.22,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_B091A5A0_A639_463F_41E2_BF77E1E5978E",
  "this.overlay_BFFA728D_A63E_C201_41D1_3136B07DD97A",
  "this.overlay_BEE4FC3B_A639_4601_41E2_E212CC38EDEA"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A90305EC_A61B_C607_41DC_6773A289CC93_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.85,
 "id": "popup_84D2B122_A61B_5E03_41E2_8539624195E4",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_84D2B122_A61B_5E03_41E2_8539624195E4_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_84D2B122_A61B_5E03_41E2_8539624195E4_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.84,
 "hideEasing": "cubic_out",
 "yaw": -74.56
},
{
 "initialPosition": {
  "yaw": -89.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B9427BA8_AB52_65FD_41CA_E6A1526C084E",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.83,
 "id": "popup_873E067B_A7EB_4201_41E4_3C21014CD965",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_873E067B_A7EB_4201_41E4_3C21014CD965_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_873E067B_A7EB_4201_41E4_3C21014CD965_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.34,
 "hideEasing": "cubic_out",
 "yaw": 42.87
},
{
 "initialPosition": {
  "yaw": -179.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B9630BBC_AB52_65D5_41D6_67CC890C8DDE",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.85,
 "id": "popup_B876BA48_A619_420E_41E1_A7F026945D4B",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_B876BA48_A619_420E_41E1_A7F026945D4B_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_B876BA48_A619_420E_41E1_A7F026945D4B_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 0.39,
 "hideEasing": "cubic_out",
 "yaw": 36.3
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.84,
 "id": "popup_8295F529_A627_4601_41D3_A5482B47403D",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_8295F529_A627_4601_41D3_A5482B47403D_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_8295F529_A627_4601_41D3_A5482B47403D_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -3.98,
 "hideEasing": "cubic_out",
 "yaw": -83.66
},
{
 "initialPosition": {
  "yaw": -100.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BABCBB5B_AB52_6553_41E0_E6DC8BB1DC44",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.83,
 "id": "popup_8498DD75_A7E9_4606_41C3_689823D4B3B7",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_8498DD75_A7E9_4606_41C3_689823D4B3B7_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_8498DD75_A7E9_4606_41C3_689823D4B3B7_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.51,
 "hideEasing": "cubic_out",
 "yaw": 44.65
},
{
 "initialPosition": {
  "yaw": 90.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BAC94B71_AB52_656F_41DB_7774C9576CAC",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -0.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BAAEBB62_AB52_656D_41E1_5C496C60A351",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -94.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BADF5B69_AB52_657F_41C0_9B99B9A692BE",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 118.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BA458B30_AB52_66ED_415F_91A8F4DD6EC8",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 101.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BA91EB4E_AB52_66B5_41C1_57BCF4884FA8",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "label": "view dalam kiri",
 "hfovMin": "135%",
 "id": "panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D",
   "yaw": 179.76,
   "class": "AdjacentPanorama",
   "backwardYaw": 79.23,
   "distance": 1
  },
  {
   "panorama": "this.panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946",
   "yaw": -89.91,
   "class": "AdjacentPanorama",
   "backwardYaw": 179.8,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_BCD256E2_A627_4203_41E3_B4B324CFD5CB",
  "this.overlay_BCBF4A42_A62B_4203_41CD_974829F2CB79",
  "this.overlay_865CAA87_A67F_4201_41E0_FA20F4C2FB43",
  "this.overlay_87B25A0D_A679_4201_41C1_65B48C750E3F",
  "this.popup_86E6D44F_A629_4613_41DA_9EA6743D7C38",
  "this.popup_B82D6474_A62B_C606_41E1_0810569B1FC6"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -15.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B98CEBCB_AB52_65B3_41D6_0DF8ED886700",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -0.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B920BBA0_AB52_65ED_41BA_0E302ABEA86B",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.84,
 "id": "popup_B828E7FF_A627_C201_41DF_B3986F2A6E62",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_B828E7FF_A627_C201_41DF_B3986F2A6E62_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_B828E7FF_A627_C201_41DF_B3986F2A6E62_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.28,
 "hideEasing": "cubic_out",
 "yaw": 82.94
},
{
 "vfov": 180,
 "label": "view kiri",
 "hfovMin": "135%",
 "id": "panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC",
   "yaw": 164.06,
   "class": "AdjacentPanorama",
   "backwardYaw": 85.07,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_BC928FA1_A62F_423E_4183_2BF5CD03110A",
  "this.overlay_8576186A_A67B_4E02_41B2_C7463649B485",
  "this.overlay_86352A7A_A679_4202_41D5_410B7804A6C2",
  "this.popup_8295F529_A627_4601_41D3_A5482B47403D",
  "this.popup_B828E7FF_A627_C201_41DF_B3986F2A6E62"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 15.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B99C8BC6_AB52_65B5_41D1_F3187E4A7674",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -41.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BA72FB37_AB52_66D3_41D4_EAB40FAD3D59",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -123.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BAF9DB76_AB52_6555_41D8_ACC6E13E3BD0",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 96.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BA64EB47_AB52_66B3_41AA_D6F3DAADC112",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "label": "view tengah depan",
 "hfovMin": "135%",
 "id": "panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D",
   "yaw": 0.22,
   "class": "AdjacentPanorama",
   "backwardYaw": -179.61,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63",
   "yaw": -179.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.22,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4",
   "yaw": -83.16,
   "class": "AdjacentPanorama",
   "backwardYaw": -164.5,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A",
   "yaw": 85.07,
   "class": "AdjacentPanorama",
   "backwardYaw": 164.06,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_B3310039_A61E_DE0E_41CE_1F456FFBC1AC",
  "this.overlay_B3575420_A61F_463F_41D9_B90D6BB64F3C",
  "this.overlay_B19C06FB_A619_C202_41D9_07730620C96C",
  "this.overlay_B0BD9F85_A626_C206_41B0_540CB52B0ED1"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 119.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BAE41B84_AB52_65B5_41D5_FC3D385A25D5",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.82,
 "id": "popup_87043A3D_A61F_C201_41E4_C95276B40381",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_87043A3D_A61F_C201_41E4_C95276B40381_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_87043A3D_A61F_C201_41E4_C95276B40381_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.01,
 "hideEasing": "cubic_out",
 "yaw": 126.37
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.85,
 "id": "popup_8475B94E_A629_4E03_41B6_7B12691C9108",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_8475B94E_A629_4E03_41B6_7B12691C9108_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_8475B94E_A629_4E03_41B6_7B12691C9108_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 1.58,
 "hideEasing": "cubic_out",
 "yaw": -30.77
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.85,
 "id": "popup_B95B28A5_A61A_CE01_41DF_E6CAA8508861",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_B95B28A5_A61A_CE01_41DF_E6CAA8508861_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_B95B28A5_A61A_CE01_41DF_E6CAA8508861_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -2.57,
 "hideEasing": "cubic_out",
 "yaw": -38.97
},
{
 "vfov": 180,
 "label": "view tengah",
 "hfovMin": "135%",
 "id": "panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168",
   "yaw": -139.44,
   "class": "AdjacentPanorama",
   "backwardYaw": 56.4,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC",
   "yaw": 0.22,
   "class": "AdjacentPanorama",
   "backwardYaw": -179.61,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A90305EC_A61B_C607_41DC_6773A289CC93",
   "yaw": 140.66,
   "class": "AdjacentPanorama",
   "backwardYaw": -60.59,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_B2670697_A66F_4201_41E0_4E9B0FC8CF3F",
  "this.overlay_B2363C3F_A669_4601_41E3_CFB9AB8E78E9",
  "this.overlay_B0687B78_A619_C20E_41D4_2BDEA373C5E3",
  "this.overlay_B99B9AF8_A66B_C20E_41E2_C24165127654",
  "this.overlay_B92DB8CF_A669_4E01_41E2_2290F8391D6C",
  "this.overlay_B8F09EBA_A666_C202_41DC_27F7060C5E99",
  "this.overlay_865127FA_A667_4202_41CF_35A7D6187E1D",
  "this.overlay_847C0AA7_A667_4202_41E0_AAFBF31B8831",
  "this.popup_87043A3D_A61F_C201_41E4_C95276B40381",
  "this.popup_B95B28A5_A61A_CE01_41DF_E6CAA8508861",
  "this.popup_84D2B122_A61B_5E03_41E2_8539624195E4",
  "this.popup_873E067B_A7EB_4201_41E4_3C21014CD965",
  "this.popup_B8EAE40B_A7EB_C601_41C0_567DC2117F41"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5",
   "camera": "this.panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168",
   "camera": "this.panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A90305EC_A61B_C607_41DC_6773A289CC93",
   "camera": "this.panorama_A90305EC_A61B_C607_41DC_6773A289CC93_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63",
   "camera": "this.panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC",
   "camera": "this.panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4",
   "camera": "this.panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A",
   "camera": "this.panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D",
   "camera": "this.panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776",
   "camera": "this.panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6",
   "camera": "this.panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946",
   "camera": "this.panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_801A2B1A_95E7_7515_41DE_86432AF291D3",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.8,
 "id": "popup_B8EAE40B_A7EB_C601_41C0_567DC2117F41",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_B8EAE40B_A7EB_C601_41C0_567DC2117F41_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_B8EAE40B_A7EB_C601_41C0_567DC2117F41_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -7.16,
 "hideEasing": "cubic_out",
 "yaw": 81.17
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -123.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B9063B93_AB52_65D3_41CA_BA48414CBADB",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "label": "Fasilitas Kanan",
 "hfovMin": "135%",
 "id": "panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6",
   "yaw": 179.8,
   "class": "AdjacentPanorama",
   "backwardYaw": -89.91,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_88748E51_9469_4F16_41D3_5BA296785E3D",
  "this.overlay_89C5F6FB_9467_7F0B_41D3_9B4D29091188",
  "this.overlay_886E48EA_9467_3335_41CC_F9606BF0AE30",
  "this.overlay_BEE268F1_A629_4E01_41CD_AE8E9EF70992"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.81,
 "id": "popup_84AE81B2_A7E6_BE03_41DE_3C38BCB35D51",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_84AE81B2_A7E6_BE03_41DE_3C38BCB35D51_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_84AE81B2_A7E6_BE03_41DE_3C38BCB35D51_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.43,
 "hideEasing": "cubic_out",
 "yaw": -0.65
},
{
 "initialPosition": {
  "yaw": -179.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B9509BA7_AB52_65F3_41C4_24925519FE04",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.84,
 "id": "popup_86E6D44F_A629_4613_41DA_9EA6743D7C38",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_86E6D44F_A629_4613_41DA_9EA6743D7C38_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_86E6D44F_A629_4613_41DA_9EA6743D7C38_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 3.39,
 "hideEasing": "cubic_out",
 "yaw": 70.54
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.85,
 "id": "popup_8762CE32_A619_4202_41B8_9B7191AF8F1C",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_8762CE32_A619_4202_41B8_9B7191AF8F1C_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_8762CE32_A619_4202_41B8_9B7191AF8F1C_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.31,
 "hideEasing": "cubic_out",
 "yaw": 91.89
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.83,
 "id": "popup_83C2F0C9_A7E7_DE01_41E4_3D1B5010ABD7",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_83C2F0C9_A7E7_DE01_41E4_3D1B5010ABD7_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_83C2F0C9_A7E7_DE01_41E4_3D1B5010ABD7_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -5.31,
 "hideEasing": "cubic_out",
 "yaw": -35.07
},
{
 "vfov": 180,
 "label": "view depan kiri",
 "hfovMin": "135%",
 "id": "panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63",
   "yaw": 56.4,
   "class": "AdjacentPanorama",
   "backwardYaw": -139.44,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5",
   "yaw": 138.74,
   "class": "AdjacentPanorama",
   "backwardYaw": -61.88,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_B3748251_A669_4201_41D5_311738106A5D",
  "this.overlay_BAB63332_A6E9_C203_41DA_A3D85D4D5AC9",
  "this.overlay_B89F4C70_A66B_461F_41E1_1E65094874E2",
  "this.overlay_8618EE3A_A669_4202_41C9_51E13639711B",
  "this.overlay_85D732CE_A66F_4203_41E1_65A0D1A650AA",
  "this.popup_83C2F0C9_A7E7_DE01_41E4_3D1B5010ABD7",
  "this.popup_84AE81B2_A7E6_BE03_41DE_3C38BCB35D51",
  "this.popup_8498DD75_A7E9_4606_41C3_689823D4B3B7"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B936EB9A_AB52_65DD_41B2_522410CC147F",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "label": "fasilitas kiri",
 "hfovMin": "135%",
 "id": "panorama_801A2B1A_95E7_7515_41DE_86432AF291D3",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776",
   "yaw": -179.82,
   "class": "AdjacentPanorama",
   "backwardYaw": 90.26,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_8939FB3E_9419_D50D_41D6_FAD5A041C121",
  "this.overlay_8ABA2BD2_941A_D51A_41C7_1A354B3250C0",
  "this.overlay_BE9E186B_A619_CE01_41CE_62A1DA286DC4"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 40.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BA4F9B27_AB52_66F3_41D7_1A3748A08C77",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "label": "view depan kanan",
 "hfovMin": "135%",
 "id": "panorama_A90305EC_A61B_C607_41DC_6773A289CC93",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63",
   "yaw": -60.59,
   "class": "AdjacentPanorama",
   "backwardYaw": 140.66,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5",
   "yaw": -138.69,
   "class": "AdjacentPanorama",
   "backwardYaw": 56.13,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_B1CB287D_A667_CE06_418B_73BB59CDA204",
  "this.overlay_BAB0A891_A6E9_4E01_41C2_1BD97B64CDEC",
  "this.overlay_B8DC2762_A669_4202_41E4_75F34BE522C3",
  "this.overlay_B9B74810_A669_4E1F_41D5_2EA58513F421",
  "this.overlay_84D571C4_A66A_DE06_41CC_838ACE1737FF",
  "this.popup_B89321CD_A667_DE06_41DB_0491374A41A7",
  "this.popup_B876BA48_A619_420E_41E1_A7F026945D4B",
  "this.popup_871DF02B_A7E9_BE01_41D8_5823D466C28A"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BAEBDB7E_AB52_6555_41A4_A337B4682805",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BA8C3B4E_AB52_66B5_41E3_8C368D0D7F0A",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.85,
 "id": "popup_B89321CD_A667_DE06_41DB_0491374A41A7",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_B89321CD_A667_DE06_41DB_0491374A41A7_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_B89321CD_A667_DE06_41DB_0491374A41A7_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -0.79,
 "hideEasing": "cubic_out",
 "yaw": -0.92
},
{
 "vfov": 180,
 "label": "view depan",
 "hfovMin": "135%",
 "id": "panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168",
   "yaw": -61.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 138.74,
   "distance": 1
  },
  {
   "panorama": "this.panorama_A90305EC_A61B_C607_41DC_6773A289CC93",
   "yaw": 56.13,
   "class": "AdjacentPanorama",
   "backwardYaw": -138.69,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_B03DB313_A619_C201_41E2_D7FCFA707078",
  "this.overlay_B034BF2F_A619_C201_41E4_61E9697BCE2B"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.81,
 "id": "popup_B8610D65_A61B_4601_41D9_F74F59F037E0",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_B8610D65_A61B_4601_41D9_F74F59F037E0_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_B8610D65_A61B_4601_41D9_F74F59F037E0_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.87,
 "hideEasing": "cubic_out",
 "yaw": -88.88
},
{
 "initialPosition": {
  "yaw": 0.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B972DBB7_AB52_65D3_41E3_CB193879ECBE",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.85,
 "id": "popup_87DB2303_A626_C201_41DE_78A2FBBD6C3B",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_87DB2303_A626_C201_41DE_78A2FBBD6C3B_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_87DB2303_A626_C201_41DE_78A2FBBD6C3B_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -0.3,
 "hideEasing": "cubic_out",
 "yaw": -69.18
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "vfov": 180,
 "label": "view kanan",
 "hfovMin": "135%",
 "id": "panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC",
   "yaw": -164.5,
   "class": "AdjacentPanorama",
   "backwardYaw": -83.16,
   "distance": 1
  }
 ],
 "class": "Panorama",
 "overlays": [
  "this.overlay_BE126924_A62B_CE06_41B6_D46F75C7A536",
  "this.overlay_B8FAF9E3_A67A_CE01_41D0_D81C5782842F",
  "this.overlay_B8F95F38_A67B_420F_41E2_285E28D8B588",
  "this.popup_B8610D65_A61B_4601_41D9_F74F59F037E0",
  "this.popup_8762CE32_A619_4202_41B8_9B7191AF8F1C"
 ],
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "thumbnailUrl": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_t.jpg",
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 41.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_BA692B3A_AB52_66DD_41E5_1C4ACB72B70D",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "initialPosition": {
  "yaw": -39.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_B9148B8A_AB52_65B2_41DB_2AD83664327C",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.85,
 "id": "popup_B82D6474_A62B_C606_41E1_0810569B1FC6",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_B82D6474_A62B_C606_41E1_0810569B1FC6_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_B82D6474_A62B_C606_41E1_0810569B1FC6_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -0.31,
 "hideEasing": "cubic_out",
 "yaw": 27.45
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "hfov": 6.84,
 "id": "popup_871DF02B_A7E9_BE01_41D8_5823D466C28A",
 "popupDistance": 100,
 "popupMaxHeight": "70%",
 "popupMaxWidth": "70%",
 "image": {
  "levels": [
   {
    "url": "media/popup_871DF02B_A7E9_BE01_41D8_5823D466C28A_0_0.png",
    "width": 738,
    "class": "ImageResourceLevel",
    "height": 738
   },
   {
    "url": "media/popup_871DF02B_A7E9_BE01_41D8_5823D466C28A_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -3.41,
 "hideEasing": "cubic_out",
 "yaw": -40.63
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_camera",
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#FFFFFF",
 "progressOpacity": 1,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "width": 300,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "scroll",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "propagateClick": false,
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL"
 },
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "verticalAlign": "top",
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Profil Pasar"
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_860A976B_A61F_4202_41E1_C9A66252315D",
  "this.Container_860BD76B_A61F_4202_41DD_C2D82C97D728"
 ],
 "id": "Container_860BE76B_A61F_4202_41B9_57B82974F7FC",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundOpacity": 0.6,
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "verticalAlign": "top",
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_860BE76B_A61F_4202_41B9_57B82974F7FC, false, 0, null, null, false)",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "Daftar Pedagang"
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "right": 0,
 "class": "UIComponent",
 "paddingRight": 0,
 "backgroundOpacity": 0.55,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "UIComponent6294"
 },
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "borderSize": 0
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "class": "ZoomImage",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "scaleMode": "custom",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "ZoomImage6295"
 },
 "borderSize": 0
},
{
 "layout": "horizontal",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowBlurRadius": 6,
 "id": "closeButtonPopupPanorama",
 "fontFamily": "Arial",
 "pressedIconColor": "#888888",
 "right": 10,
 "class": "CloseButton",
 "horizontalAlign": "center",
 "paddingRight": 5,
 "backgroundOpacity": 0.3,
 "paddingLeft": 5,
 "iconHeight": 20,
 "borderRadius": 0,
 "minHeight": 0,
 "iconColor": "#000000",
 "borderColor": "#000000",
 "rollOverIconColor": "#666666",
 "top": 10,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "minWidth": 0,
 "mode": "push",
 "shadowColor": "#000000",
 "fontSize": "1.29vmin",
 "label": "",
 "gap": 5,
 "paddingTop": 5,
 "fontStyle": "normal",
 "iconLineWidth": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "CloseButton6296"
 },
 "iconWidth": 20,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "borderSize": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.62,
   "yaw": -179.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D, this.camera_BA91EB4E_AB52_66B5_41C1_57BCF4884FA8); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BCDA47BE_A6EE_C203_41E1_BC818E2CA136",
   "pitch": -44.43,
   "yaw": -179.89,
   "hfov": 22.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B1109DDF_A639_C601_41D3_5D9E9F0AACBF",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.33,
   "yaw": 90.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_801A2B1A_95E7_7515_41DE_86432AF291D3, this.camera_BA8C3B4E_AB52_66B5_41E3_8C368D0D7F0A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA83530F_A61B_4202_41E2_89B1FD99E1D1",
   "pitch": -35.93,
   "yaw": 90.26,
   "hfov": 16.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BDBA6323_A629_C202_41DF_917A743395FE",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": -69.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_87DB2303_A626_C201_41DE_78A2FBBD6C3B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -69.18,
   "hfov": 6.85,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0_HS_2_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8792B23C_A679_4207_41CB_C42B5A985A9D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": -30.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_8475B94E_A629_4E03_41B6_7B12691C9108, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -30.77,
   "hfov": 6.85,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0_HS_3_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_87530857_A67F_4E01_41A2_DBEACAB1D1EE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.92,
   "yaw": -179.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC, this.camera_B9509BA7_AB52_65F3_41C4_24925519FE04); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA82C30F_A61B_4202_41C1_94CA61097230",
   "pitch": -26.18,
   "yaw": -179.61,
   "hfov": 12.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B091A5A0_A639_463F_41E2_BF77E1E5978E",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.78,
   "yaw": 79.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6, this.camera_B920BBA0_AB52_65ED_41BA_0E302ABEA86B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA82430F_A61B_4202_41C1_7218A609D74A",
   "pitch": -27.43,
   "yaw": 79.23,
   "hfov": 12.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_BFFA728D_A63E_C201_41D1_3136B07DD97A",
 "data": {
  "label": "Arrow 05b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.63,
   "yaw": -78.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776, this.camera_B936EB9A_AB52_65DD_41B2_522410CC147F); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA82030F_A61B_4202_41D0_2B0BC7E40348",
   "pitch": -28.74,
   "yaw": -78.36,
   "hfov": 12.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_BEE4FC3B_A639_4601_41E2_E212CC38EDEA",
 "data": {
  "label": "Arrow 05b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.62,
   "yaw": 179.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -44.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D, this.camera_BABCBB5B_AB52_6553_41E0_E6DC8BB1DC44); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BCDB27BE_A6EE_C203_41D3_68A67813413F",
   "pitch": -44.43,
   "yaw": 179.76,
   "hfov": 22.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BCD256E2_A627_4203_41E3_B4B324CFD5CB",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.4,
   "yaw": -89.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946, this.camera_BAAEBB62_AB52_656D_41E1_5C496C60A351); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA80E30F_A61B_4202_41E2_90560ADEE580",
   "pitch": -35.58,
   "yaw": -89.91,
   "hfov": 16.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BCBF4A42_A62B_4203_41CD_974829F2CB79",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.84,
   "yaw": 70.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_86E6D44F_A629_4613_41DA_9EA6743D7C38, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 70.54,
   "hfov": 6.84,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0_HS_2_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_865CAA87_A67F_4201_41E0_FA20F4C2FB43",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": 27.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_B82D6474_A62B_C606_41E1_0810569B1FC6, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 27.45,
   "hfov": 6.85,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0_HS_3_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_87B25A0D_A679_4201_41C1_65B48C750E3F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.04,
   "yaw": 164.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC, this.camera_BADF5B69_AB52_657F_41C0_9B99B9A692BE); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_870288CE_A7E9_CE03_41D9_13B6F2A719A0",
   "pitch": -37.79,
   "yaw": 164.06,
   "hfov": 25.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_BC928FA1_A62F_423E_4183_2BF5CD03110A",
 "data": {
  "label": "Arrow 05b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.84,
   "yaw": 82.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_B828E7FF_A627_C201_41DF_B3986F2A6E62, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 82.94,
   "hfov": 6.84,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0_HS_1_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8576186A_A67B_4E02_41B2_C7463649B485",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.84,
   "yaw": -83.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_8295F529_A627_4601_41D3_A5482B47403D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -83.66,
   "hfov": 6.84,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0_HS_2_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_86352A7A_A679_4202_41D5_410B7804A6C2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.28,
   "yaw": 0.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D, this.camera_B972DBB7_AB52_65D3_41E3_CB193879ECBE); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BF15AFE1_A62B_C23E_41DE_3B74E513196C",
   "pitch": -22.76,
   "yaw": 0.22,
   "hfov": 13.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B3310039_A61E_DE0E_41CE_1F456FFBC1AC",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.45,
   "yaw": 85.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A, this.camera_B98CEBCB_AB52_65B3_41D6_0DF8ED886700); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8703C8CE_A7E9_CE03_41E3_497F87990792",
   "pitch": -30.18,
   "yaw": 85.07,
   "hfov": 12.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B3575420_A61F_463F_41D9_B90D6BB64F3C",
 "data": {
  "label": "Arrow 05b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.03,
   "yaw": -179.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63, this.camera_B9630BBC_AB52_65D5_41D6_67CC890C8DDE); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BF155FE1_A62B_C23E_41D3_D5E46719110E",
   "pitch": -25.15,
   "yaw": -179.61,
   "hfov": 13.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B19C06FB_A619_C202_41D9_07730620C96C",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.28,
   "yaw": -83.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4, this.camera_B99C8BC6_AB52_65B5_41D1_F3187E4A7674); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8703F8CE_A7E9_CE03_41D2_7CEDFA1B3ABA",
   "pitch": -31.48,
   "yaw": -83.16,
   "hfov": 12.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B0BD9F85_A626_C206_41B0_540CB52B0ED1",
 "data": {
  "label": "Arrow 05b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.17,
   "yaw": 140.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A90305EC_A61B_C607_41DC_6773A289CC93, this.camera_BAE41B84_AB52_65B5_41D5_FC3D385A25D5); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BF148FE1_A62B_C23E_41A3_222D4EC66AC6",
   "pitch": -39.1,
   "yaw": 140.66,
   "hfov": 11.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B2670697_A66F_4201_41E0_4E9B0FC8CF3F",
 "data": {
  "label": "Arrow 05b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.24,
   "yaw": -139.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168, this.camera_BAF9DB76_AB52_6555_41D8_ACC6E13E3BD0); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BF14FFE1_A62B_C23E_41E3_9666EB8F23B5",
   "pitch": -38.69,
   "yaw": -139.44,
   "hfov": 11.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B2363C3F_A669_4601_41E3_CFB9AB8E78E9",
 "data": {
  "label": "Arrow 05b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.28,
   "yaw": 0.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC, this.camera_BAEBDB7E_AB52_6555_41A4_A337B4682805); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BF142FE1_A62B_C23E_41D4_9E86FC22AF7F",
   "pitch": -22.76,
   "yaw": 0.22,
   "hfov": 13.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B0687B78_A619_C20E_41D4_2BDEA373C5E3",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": -74.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_84D2B122_A61B_5E03_41E2_8539624195E4, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -74.56,
   "hfov": 6.85,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_3_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B99B9AF8_A66B_C20E_41E2_C24165127654",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": -38.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_B95B28A5_A61A_CE01_41DF_E6CAA8508861, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -38.97,
   "hfov": 6.85,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_4_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B92DB8CF_A669_4E01_41E2_2290F8391D6C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.8,
   "yaw": 81.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_B8EAE40B_A7EB_C601_41C0_567DC2117F41, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 81.17,
   "hfov": 6.8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_5_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B8F09EBA_A666_C202_41DC_27F7060C5E99",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 42.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_873E067B_A7EB_4201_41E4_3C21014CD965, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 42.87,
   "hfov": 6.83,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_6_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_865127FA_A667_4202_41CF_35A7D6187E1D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": 126.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_87043A3D_A61F_C201_41E4_C95276B40381, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 126.37,
   "hfov": 6.82,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_7_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_847C0AA7_A667_4202_41E0_AAFBF31B8831",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.36,
   "yaw": 7.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 7.05,
   "hfov": 5.36,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_0_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_88748E51_9469_4F16_41D3_5BA296785E3D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.36,
   "yaw": 34.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 34.97,
   "hfov": 5.36,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_1_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89C5F6FB_9467_7F0B_41D3_9B4D29091188",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.54,
   "yaw": -31.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -31.65,
   "hfov": 6.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_2_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_886E48EA_9467_3335_41CC_F9606BF0AE30",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.28,
   "yaw": 179.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6, this.camera_BAC94B71_AB52_656F_41DB_7774C9576CAC); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA81F30F_A61B_4202_41C6_D2E1E0FD74A5",
   "pitch": -40.73,
   "yaw": 179.8,
   "hfov": 15.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BEE268F1_A629_4E01_41CD_AE8E9EF70992",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.44,
   "yaw": 56.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63, this.camera_BA4F9B27_AB52_66F3_41D7_1A3748A08C77); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B505D7E1_A669_423E_41D2_BB43247C4ACD",
   "pitch": -30.23,
   "yaw": 56.4,
   "hfov": 12.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B3748251_A669_4201_41D5_311738106A5D",
 "data": {
  "label": "Arrow 05b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.76,
   "yaw": 138.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5, this.camera_BA458B30_AB52_66ED_415F_91A8F4DD6EC8); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA64BD28_A6EA_C60E_41E4_29797CD67C71",
   "pitch": -33.75,
   "yaw": 138.74,
   "hfov": 16.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_BAB63332_A6E9_C203_41DA_A3D85D4D5AC9",
 "data": {
  "label": "Arrow 05b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -0.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_84AE81B2_A7E6_BE03_41DE_3C38BCB35D51, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -0.65,
   "hfov": 6.81,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0_HS_5_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B89F4C70_A66B_461F_41E1_1E65094874E2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": -35.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_83C2F0C9_A7E7_DE01_41E4_3D1B5010ABD7, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -35.07,
   "hfov": 6.83,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0_HS_6_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8618EE3A_A669_4202_41C9_51E13639711B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 44.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_8498DD75_A7E9_4606_41C3_689823D4B3B7, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 44.65,
   "hfov": 6.83,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0_HS_7_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_85D732CE_A66F_4203_41E1_65A0D1A650AA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.55,
   "yaw": 32.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 32.25,
   "hfov": 6.55,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0_HS_0_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8939FB3E_9419_D50D_41D6_FAD5A041C121",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.3,
   "yaw": 60.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 60.51,
   "hfov": 3.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0_HS_1_0.png",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8ABA2BD2_941A_D51A_41C7_1A354B3250C0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.43,
   "yaw": -179.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776, this.camera_B9427BA8_AB52_65FD_41CA_E6A1526C084E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA81030F_A61B_4202_41B2_DC17667AF435",
   "pitch": -40.04,
   "yaw": -179.82,
   "hfov": 15.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_BE9E186B_A619_CE01_41CE_62A1DA286DC4",
 "data": {
  "label": "Arrow 05b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.45,
   "yaw": -60.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63, this.camera_B9148B8A_AB52_65B2_41DB_2AD83664327C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BF173FE1_A62B_C23E_41E0_56A444E008B1",
   "pitch": -30.47,
   "yaw": -60.59,
   "hfov": 7.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B1CB287D_A667_CE06_418B_73BB59CDA204",
 "data": {
  "label": "Arrow 05b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.78,
   "yaw": -138.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5, this.camera_B9063B93_AB52_65D3_41CA_BA48414CBADB); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA633D2A_A6EA_C602_41C8_188F44C177B5",
   "pitch": -33.68,
   "yaw": -138.69,
   "hfov": 16.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_BAB0A891_A6E9_4E01_41C2_1BD97B64CDEC",
 "data": {
  "label": "Arrow 05b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": -0.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_B89321CD_A667_DE06_41DB_0491374A41A7, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -0.92,
   "hfov": 6.85,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0_HS_4_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B8DC2762_A669_4202_41E4_75F34BE522C3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": 36.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_B876BA48_A619_420E_41E1_A7F026945D4B, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 36.3,
   "hfov": 6.85,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0_HS_5_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B9B74810_A669_4E1F_41D5_2EA58513F421",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.84,
   "yaw": -40.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_871DF02B_A7E9_BE01_41D8_5823D466C28A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -40.63,
   "hfov": 6.84,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0_HS_6_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_84D571C4_A66A_DE06_41CC_838ACE1737FF",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.63,
   "yaw": 56.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A90305EC_A61B_C607_41DC_6773A289CC93, this.camera_BA692B3A_AB52_66DD_41E5_1C4ACB72B70D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B50567E1_A669_423E_41B7_9683F20D392F",
   "pitch": -47.45,
   "yaw": 56.13,
   "hfov": 13.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B03DB313_A619_C201_41E2_D7FCFA707078",
 "data": {
  "label": "Arrow 05b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.29,
   "yaw": -61.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168, this.camera_BA72FB37_AB52_66D3_41D4_EAB40FAD3D59); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B50537E1_A669_423E_41D4_7C22359A69C9",
   "pitch": -48.75,
   "yaw": -61.88,
   "hfov": 13.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_B034BF2F_A619_C201_41E4_61E9697BCE2B",
 "data": {
  "label": "Arrow 05b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.82,
   "yaw": -164.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC, this.camera_BA64EB47_AB52_66B3_41AA_D6F3DAADC112); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_877EF426_A66E_C603_41C8_DD6F136E65F9",
   "pitch": -38.41,
   "yaw": -164.5,
   "hfov": 24.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_BE126924_A62B_CE06_41B6_D46F75C7A536",
 "data": {
  "label": "Arrow 05b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.85,
   "yaw": 91.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_8762CE32_A619_4202_41B8_9B7191AF8F1C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 91.89,
   "hfov": 6.85,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0_HS_1_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B8FAF9E3_A67A_CE01_41D0_D81C5782842F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -88.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_B8610D65_A61B_4601_41D9_F74F59F037E0, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','borderSize':0,'rollOverBorderSize':0,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconColor':'#000000','paddingBottom':5,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -88.88,
   "hfov": 6.81,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0_HS_2_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_B8F95F38_A67B_420F_41E2_285E28D8B588",
 "data": {
  "label": "Image"
 }
},
{
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "width": 66,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "scroll",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "propagateClick": true,
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "width": 300,
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 40,
 "backgroundOpacity": 0.7,
 "creationPolicy": "inAdvance",
 "paddingLeft": 40,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "paddingTop": 40,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "shadow": false,
 "data": {
  "name": "- EXPANDED"
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Image_89289439_AA1F_C60E_41D8_24DBC7E4274D"
 ],
 "shadowSpread": 1,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "verticalAlign": "top",
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "right": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "right",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "10%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "verticalAlign": "top",
 "gap": 10,
 "paddingTop": 20,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "layout": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "children": [
  "this.Image_8BB13E3C_AA1E_C206_41DB_29FA9112922C"
 ],
 "shadowSpread": 1,
 "id": "Container_860A976B_A61F_4202_41E1_C9A66252315D",
 "left": "10%",
 "right": "10%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundOpacity": 1,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "verticalAlign": "top",
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_860BC76B_A61F_4202_41CC_E20FAC46104C"
 ],
 "id": "Container_860BD76B_A61F_4202_41DD_C2D82C97D728",
 "left": "10%",
 "right": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "right",
 "paddingRight": 20,
 "backgroundOpacity": 0,
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "verticalAlign": "top",
 "gap": 10,
 "paddingTop": 20,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "layout": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BCDA47BE_A6EE_C203_41E1_BC818E2CA136",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A96C9052_A61B_DE02_41A9_1826E3EF0776_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BA83530F_A61B_4202_41E2_89B1FD99E1D1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BA82C30F_A61B_4202_41C1_94CA61097230",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BA82430F_A61B_4202_41C1_7218A609D74A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A903AEAE_A61B_C203_41E4_A91CE06BD53D_0_HS_2_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BA82030F_A61B_4202_41D0_2B0BC7E40348",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BCDB27BE_A6EE_C203_41D3_68A67813413F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8B8380A_A61B_CE02_41C7_9BEBBA70B2D6_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BA80E30F_A61B_4202_41E2_90560ADEE580",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A8AECFC6_A61B_C203_41E3_B7AE8C30862A_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_870288CE_A7E9_CE03_41D9_13B6F2A719A0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BF15AFE1_A62B_C23E_41DE_3B74E513196C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8703C8CE_A7E9_CE03_41E3_497F87990792",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BF155FE1_A62B_C23E_41D3_D5E46719110E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A93D8706_A61B_4203_41D8_AA79DAA170DC_0_HS_3_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_8703F8CE_A7E9_CE03_41D2_7CEDFA1B3ABA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BF148FE1_A62B_C23E_41A3_222D4EC66AC6",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BF14FFE1_A62B_C23E_41E3_9666EB8F23B5",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A92F7E25_A61B_4206_41E0_DD49670E1C63_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BF142FE1_A62B_C23E_41D4_9E86FC22AF7F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BA81F30F_A61B_4202_41C6_D2E1E0FD74A5",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_B505D7E1_A669_423E_41D2_BB43247C4ACD",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A9277BEB_A61B_C201_41D0_EC074CA5C168_0_HS_4_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BA64BD28_A6EA_C60E_41E4_29797CD67C71",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BA81030F_A61B_4202_41B2_DC17667AF435",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BF173FE1_A62B_C23E_41E0_56A444E008B1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A90305EC_A61B_C607_41DC_6773A289CC93_0_HS_3_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_BA633D2A_A6EA_C602_41C8_188F44C177B5",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_B50567E1_A669_423E_41B7_9683F20D392F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A93D82B9_A61B_C201_41B0_F04A864B8BC5_0_HS_1_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_B50537E1_A669_423E_41D4_7C22359A69C9",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A92868DA_A61B_CE03_41E2_F8A6BCEF89A4_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_877EF426_A66E_C603_41C8_DD6F136E65F9",
 "frameCount": 24
},
{
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "width": 36,
 "backgroundOpacity": 0.4,
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "scroll",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Container black"
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 50,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "minHeight": 1,
 "top": "40%",
 "propagateClick": true,
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand",
 "borderSize": 0
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "class": "Image",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 30,
 "top": "5.65%",
 "propagateClick": true,
 "verticalAlign": "top",
 "height": "18.67%",
 "minWidth": 40,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Image Company"
 },
 "borderSize": 0
},
{
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
  "this.Button_BB134248_A6EA_C20F_41D8_94B2277A0891",
  "this.Container_B887C14E_A6EA_BE02_41E1_2C2E210DEAD3"
 ],
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "width": "100%",
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "25%",
 "propagateClick": true,
 "bottom": "25%",
 "overflow": "scroll",
 "minWidth": 1,
 "verticalAlign": "middle",
 "gap": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container buttons"
 },
 "layout": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "width": "100%",
 "right": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "height": "26.316%",
 "minWidth": 1,
 "verticalAlign": "bottom",
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "layout": "vertical",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_89289439_AA1F_C60E_41D8_24DBC7E4274D",
 "width": "150.336%",
 "backgroundOpacity": 0,
 "class": "Image",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "url": "skin/Image_89289439_AA1F_C60E_41D8_24DBC7E4274D.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Image73714"
 },
 "borderSize": 0
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false); this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "borderSize": 0
},
{
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_8BB13E3C_AA1E_C206_41DB_29FA9112922C",
 "width": "131.6%",
 "backgroundOpacity": 0,
 "class": "Image",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "url": "skin/Image_8BB13E3C_AA1E_C206_41DB_29FA9112922C.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Image73792"
 },
 "borderSize": 0
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_860BC76B_A61F_4202_41CC_E20FAC46104C",
 "width": "25%",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_860BC76B_A61F_4202_41CC_E20FAC46104C_rollover.jpg",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_860BC76B_A61F_4202_41CC_E20FAC46104C_pressed.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false); this.setComponentVisibility(this.Container_860BE76B_A61F_4202_41B9_57B82974F7FC, false, 0, null, null, false)",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_860BC76B_A61F_4202_41CC_E20FAC46104C.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "borderSize": 0
},
{
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "scroll",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "class": "Button",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 10,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "shadowSpread": 1,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "label": "Profil Pasar",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button Tour Info"
 },
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "borderSize": 0,
 "shadowColor": "#000000"
},
{
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "scroll",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "class": "Button",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 10,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "shadowSpread": 1,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "label": "Virtual Tour Area Pedagang",
 "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 23,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button Panorama List"
 },
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "borderSize": 0,
 "shadowColor": "#000000"
},
{
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "scroll",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "class": "Button",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 10,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "shadowSpread": 1,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "label": "Virtual Tour Fasilitas Pasar",
 "click": "this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button Floorplan"
 },
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "borderSize": 0,
 "shadowColor": "#000000"
},
{
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "scroll",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "layout": "horizontal",
 "fontFamily": "Oswald",
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "id": "Button_BB134248_A6EA_C20F_41D8_94B2277A0891",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 0,
 "class": "Button",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingLeft": 10,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "shadowSpread": 1,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "label": "Denah dan Daftar Pedagang ",
 "click": "this.setComponentVisibility(this.Container_860BE76B_A61F_4202_41B9_57B82974F7FC, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "paddingTop": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button Floorplan"
 },
 "iconWidth": 32,
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal",
 "borderSize": 0,
 "shadowColor": "#000000"
},
{
 "id": "Container_B887C14E_A6EA_BE02_41E1_2C2E210DEAD3",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "scroll",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "height": 1,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "line"
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "width": 40,
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "class": "Container",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "visible",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "height": 2,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "blue line"
 },
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "width": "100%",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "height": 78,
 "minWidth": 1,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Alamat : Jl. Suryoputran, Kelurahan Panembahan, Kemantren Kraton, Kota Yogyakarta.</I></SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "borderSize": 0,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "width": 42,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand",
 "borderSize": 0
}],
 "mobileMipmappingEnabled": false,
 "propagateClick": true,
 "verticalAlign": "top",
 "minWidth": 20,
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "contentOpaque": false,
 "scripts": {
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getKey": function(key){  return window[key]; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "unregisterKey": function(key){  delete window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } }
 },
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Player468"
 },
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
