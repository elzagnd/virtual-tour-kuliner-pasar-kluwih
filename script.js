(function(){
    var script = {
 "mouseWheelEnabled": true,
 "vrPolyfillScale": 0.5,
 "borderRadius": 0,
 "id": "rootPlayer",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "propagateClick": true,
 "verticalAlign": "top",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "overflow": "visible",
 "paddingLeft": 0,
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "defaultVRPointer": "laser",
 "definitions": [{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_97EE187C_9B4E_15D1_41BF_C5E19F9D920C",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_839C1115_9BCA_1750_41D6_FC444088AD30",
 "class": "PlayList"
},
{
 "overlays": [
  "this.overlay_84EBFDF1_90CB_BB00_41D9_1ACA68112E5A",
  "this.overlay_83BAC883_90CA_9900_41C6_F47AEB9CD190",
  "this.overlay_83495638_90CD_8900_419B_238EED998505",
  "this.overlay_8E198EBB_9426_CF0B_41DD_CA19EF32EB58",
  "this.overlay_8D60AF13_942B_CD1B_41DD_C52DC9D20826"
 ],
 "label": "kanan2",
 "thumbnailUrl": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_t.jpg",
 "id": "panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -53.11,
   "yaw": 76.2,
   "distance": 1,
   "panorama": "this.panorama_9E0F56FB_90C7_8900_41E0_D700C056263C"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 136.3,
   "yaw": -71.64,
   "distance": 1,
   "panorama": "this.panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "135%"
},
{
 "initialPosition": {
  "yaw": 53.78,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_82F121B8_9BCA_1750_41D4_175FFF94D6BB"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_camera"
},
{
 "initialPosition": {
  "yaw": -116.8,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_8324A168_9BCA_17F0_41B2_53DBE8AC22B0"
},
{
 "initialPosition": {
  "yaw": -2.07,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83081182_9BCA_1730_41D8_2E8C8AC51204"
},
{
 "id": "MainViewerMapPlayer",
 "viewerArea": "this.MainViewer",
 "movementMode": "constrained",
 "class": "MapPlayer"
},
{
 "overlays": [
  "this.overlay_8A1FBD3C_947B_CD0D_41E1_5831CD940B40",
  "this.overlay_8935EB66_947B_353D_41E1_3771AB3F8CA6",
  "this.overlay_89CF4DEA_9469_4D0A_4195_70BC85C05F84",
  "this.overlay_89CC8CDB_946E_D30B_41DA_84C3BFDC056C",
  "this.overlay_89C1F53E_946B_3D0A_41E2_15B4EB9EDED3",
  "this.overlay_89F45D46_946B_4D7D_41D2_B7671ACA2C1C"
 ],
 "label": "dalam kiri",
 "thumbnailUrl": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_t.jpg",
 "id": "panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -33.14,
   "yaw": -163.67,
   "distance": 1,
   "panorama": "this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 177.93,
   "yaw": -179.09,
   "distance": 1,
   "panorama": "this.panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A"
  },
  {
   "panorama": "this.panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_801A2B1A_95E7_7515_41DE_86432AF291D3",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "135%"
},
{
 "initialPosition": {
  "yaw": -22.57,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_834C4198_9BCA_1750_41E1_8B51A36EF48C"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -43.7,
  "pitch": 0,
  "hfov": 122
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83327168_9BCA_17F0_41D6_D3990DDD13E4"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "id": "popup_897A8241_9B3A_7533_41C4_8B67845FEEB9",
 "popupMaxHeight": "95%",
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_897A8241_9B3A_7533_41C4_8B67845FEEB9_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -10.15,
 "class": "PopupPanoramaOverlay",
 "hideDuration": 500,
 "showDuration": 500,
 "yaw": -2.36,
 "hfov": 6.05
},
{
 "initialPosition": {
  "yaw": 0.91,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83E4F148_9BCA_1731_41B4_03957F6C4B62"
},
{
 "initialPosition": {
  "yaw": 108.36,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_835A5198_9BCA_1750_41C8_DED2CB3E99C6"
},
{
 "initialPosition": {
  "yaw": -103.8,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83E89148_9BCA_1731_41CA_0D390824E093"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 115.24,
  "pitch": -0.46,
  "hfov": 122
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_camera"
},
{
 "initialPosition": {
  "yaw": 95.57,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_82E191C8_9BCA_1730_41E0_AC2560B699EE"
},
{
 "initialPosition": {
  "yaw": 0.48,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_82AE91A8_9BCA_1770_41B8_E05C9CC66B77"
},
{
 "initialPosition": {
  "yaw": -41.3,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83DC4158_9BCA_17D1_41E1_73AE991043F0"
},
{
 "initialPosition": {
  "yaw": 0.48,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_829F01A8_9BCA_1770_41B2_617AF07FF7E5"
},
{
 "initialPosition": {
  "yaw": -172.05,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_8369C188_9BCA_1730_41D8_A75C2521E5B6"
},
{
 "overlays": [
  "this.overlay_89E81092_9BCA_1550_41D1_8F91189872A5",
  "this.overlay_89418648_9BCA_3D30_41D9_326A116144CF",
  "this.overlay_886F4369_9BCA_3BF0_41D1_EBF06E2D2A85"
 ],
 "label": "depan",
 "thumbnailUrl": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_t.jpg",
 "id": "panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9E0F56FB_90C7_8900_41E0_D700C056263C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9E0F56FB_90C7_8900_41E0_D700C056263C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9C1428CA_90C6_B900_41DF_742A6993D40C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "135%"
},
{
 "overlays": [
  "this.overlay_8399BD8D_90CF_BB00_41D3_4DD50A256C20",
  "this.overlay_839F3F72_90CD_B700_41E1_35D02036BCAF",
  "this.overlay_8D0724A8_9427_D335_41CC_566B40E97822",
  "this.overlay_8AEA30AA_9419_F335_41DF_21701E0B73AC"
 ],
 "label": "kanan3",
 "thumbnailUrl": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_t.jpg",
 "id": "panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -71.64,
   "yaw": 136.3,
   "distance": 1,
   "panorama": "this.panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "195%"
},
{
 "initialPosition": {
  "yaw": 146.86,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_8307417C_9BCA_17D0_41D8_D973A7D774E5"
},
{
 "initialPosition": {
  "yaw": 30.92,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83153168_9BCA_17F0_41DF_2F094FABE773"
},
{
 "initialPosition": {
  "yaw": 126.89,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83C18158_9BCA_17D1_41D9_B7E0AF960DC7"
},
{
 "items": [
  {
   "media": "this.panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_camera"
  },
  {
   "media": "this.panorama_9E0F56FB_90C7_8900_41E0_D700C056263C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_camera"
  },
  {
   "media": "this.panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_camera"
  },
  {
   "media": "this.panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_camera"
  },
  {
   "media": "this.panorama_9C1428CA_90C6_B900_41DF_742A6993D40C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_camera"
  },
  {
   "media": "this.panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_camera"
  },
  {
   "media": "this.panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_camera"
  },
  {
   "media": "this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5_camera"
  },
  {
   "media": "this.panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_camera"
  },
  {
   "media": "this.panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_camera"
  },
  {
   "media": "this.panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_camera"
  },
  {
   "media": "this.panorama_801A2B1A_95E7_7515_41DE_86432AF291D3",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_camera"
},
{
 "initialPosition": {
  "yaw": -100.5,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_8367A188_9BCA_1730_41D3_395ED33F20DF"
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_97EE187C_9B4E_15D1_41BF_C5E19F9D920C",
   "player": "this.MainViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_839C4115_9BCA_1750_41E3_0A05E07EA851",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_80189775_95E7_5D1E_41C4_951D826A84A5_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_camera"
},
{
 "overlays": [
  "this.overlay_84B65091_90C6_8900_41C3_C1A32CB63FD3",
  "this.overlay_8408106C_90C7_8900_41E0_C901DF4873EA",
  "this.overlay_8DCDE09B_9419_D30B_41C0_CAD349C471D9",
  "this.overlay_8A5C37E1_941B_3D36_41E0_056557E1877B"
 ],
 "label": "Kiri 2",
 "thumbnailUrl": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_t.jpg",
 "id": "panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 63.2,
   "yaw": -84.43,
   "distance": 1,
   "panorama": "this.panorama_9C1428CA_90C6_B900_41DF_742A6993D40C"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -149.08,
   "yaw": 79.5,
   "distance": 1,
   "panorama": "this.panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "135%"
},
{
 "levels": [
  {
   "url": "media/popup_897A8241_9B3A_7533_41C4_8B67845FEEB9_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_897A8241_9B3A_7533_41C4_8B67845FEEB9_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_897A8241_9B3A_7533_41C4_8B67845FEEB9_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_8AC30295_9BC6_7553_41B7_D6A5A3C2156E",
 "class": "ImageResource"
},
{
 "overlays": [
  "this.overlay_83E414A1_90CA_8900_41D7_5B148F6F0BA0",
  "this.overlay_83A794E2_90CB_8900_4181_CD3287CEA029",
  "this.overlay_8340AB2C_90CA_BF00_41D2_7C737F3728B7",
  "this.overlay_8EC76EA9_9419_4F37_41C3_66E1B470F12B",
  "this.overlay_8DB22754_9419_5D1D_41C7_C2D371005CAE",
  "this.popup_897A8241_9B3A_7533_41C4_8B67845FEEB9"
 ],
 "label": "Kiri 1",
 "thumbnailUrl": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_t.jpg",
 "id": "panorama_9C1428CA_90C6_B900_41DF_742A6993D40C",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -126.22,
   "yaw": 138.7,
   "distance": 1,
   "panorama": "this.panorama_9E0F56FB_90C7_8900_41E0_D700C056263C"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -84.43,
   "yaw": 63.2,
   "distance": 1,
   "panorama": "this.panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "135%"
},
{
 "overlays": [
  "this.overlay_8939FB3E_9419_D50D_41D6_FAD5A041C121",
  "this.overlay_8ABA2BD2_941A_D51A_41C7_1A354B3250C0",
  "this.overlay_89769F1B_9419_CD0B_41D9_2D88026587D3"
 ],
 "label": "fasilitas kiri",
 "thumbnailUrl": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_t.jpg",
 "id": "panorama_801A2B1A_95E7_7515_41DE_86432AF291D3",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -7.36,
   "yaw": -179.52,
   "distance": 1,
   "panorama": "this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "135%"
},
{
 "overlays": [
  "this.overlay_89B57362_946F_353A_41C9_D7DE61FB7269",
  "this.overlay_886DFB69_946E_D537_419C_78FAA3387566",
  "this.overlay_8821DD70_946B_4D15_41E0_2FBA70AB3731",
  "this.overlay_8BA33593_9469_5D1B_41C7_6D58D9A7DC93"
 ],
 "label": "dalam",
 "thumbnailUrl": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_t.jpg",
 "id": "panorama_80189775_95E7_5D1E_41C4_951D826A84A5",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 157.43,
   "yaw": 30.94,
   "distance": 1,
   "panorama": "this.panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -163.67,
   "yaw": -33.14,
   "distance": 1,
   "panorama": "this.panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -179.52,
   "yaw": 7.95,
   "distance": 1,
   "panorama": "this.panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -179.52,
   "yaw": -7.36,
   "distance": 1,
   "panorama": "this.panorama_801A2B1A_95E7_7515_41DE_86432AF291D3"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "135%"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_camera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_camera"
},
{
 "overlays": [
  "this.overlay_84FFABA9_90C5_BF00_41DC_1B9C1C505978",
  "this.overlay_84952731_90DA_9700_41D0_E2759702EBD5",
  "this.overlay_8C7ED7F1_9469_3D16_41BE_FEBF3E344E33",
  "this.overlay_89932891_9469_5316_41D2_E89016FE7FCC"
 ],
 "label": "Kiri 3",
 "thumbnailUrl": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_t.jpg",
 "id": "panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 79.5,
   "yaw": -149.08,
   "distance": 1,
   "panorama": "this.panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "135%"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_camera"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_camera"
},
{
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "thumbnailUrl": "media/map_97EE187C_9B4E_15D1_41BF_C5E19F9D920C_t.png",
 "id": "map_97EE187C_9B4E_15D1_41BF_C5E19F9D920C",
 "height": 3375,
 "width": 6000,
 "label": "denah pasar kluwih (2)",
 "scaleMode": "fit_inside",
 "image": {
  "levels": [
   {
    "url": "media/map_97EE187C_9B4E_15D1_41BF_C5E19F9D920C.png",
    "width": 3200,
    "height": 1800,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/map_97EE187C_9B4E_15D1_41BF_C5E19F9D920C_lq.png",
    "width": 341,
    "tags": "preload",
    "height": 192,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "initialZoomFactor": 1,
 "class": "Map"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_camera"
},
{
 "initialPosition": {
  "yaw": 172.64,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_828F71B8_9BCA_1750_41DB_5468E0F8138E"
},
{
 "initialPosition": {
  "yaw": 16.33,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_82BCC1A8_9BCA_1770_41DD_16DF6F4C26CD"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_camera"
},
{
 "initialPosition": {
  "yaw": -149.06,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83FEE141_9BCA_1733_41E1_A576467C2E73"
},
{
 "overlays": [
  "this.overlay_8A496F6B_947A_CD0A_41B0_97519B3A4E1A",
  "this.overlay_8BC28B11_9479_3517_41D6_CE40A151E0FF",
  "this.overlay_8A34BFA1_947F_4D36_41C1_B003E14C5158",
  "this.overlay_89289022_947F_333A_41DB_2024E91948B5",
  "this.overlay_896D8D81_9469_CDF6_41E0_91C28F218222",
  "this.overlay_896471CF_946A_D50A_41E0_5BF5DE432257"
 ],
 "label": "dalam kanan",
 "thumbnailUrl": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_t.jpg",
 "id": "panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 30.94,
   "yaw": 157.43,
   "distance": 1,
   "panorama": "this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -179.09,
   "yaw": 177.93,
   "distance": 1,
   "panorama": "this.panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2"
  },
  {
   "panorama": "this.panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_801A2B1A_95E7_7515_41DE_86432AF291D3",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "135%"
},
{
 "overlays": [
  "this.overlay_82592C51_90FB_9900_41DE_340FCB634481",
  "this.overlay_820F4F9F_90C5_F700_41CE_05C82E1773D5",
  "this.overlay_83B137C4_90C6_9700_41D0_121F9E9B0877",
  "this.overlay_8C53206B_943B_730A_41C4_EEC0FEE29282",
  "this.overlay_8E646203_9439_76FA_41D9_C898ABC4E160"
 ],
 "label": "kanan1",
 "thumbnailUrl": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_t.jpg",
 "id": "panorama_9E0F56FB_90C7_8900_41E0_D700C056263C",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 76.2,
   "yaw": -53.11,
   "distance": 1,
   "panorama": "this.panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 138.7,
   "yaw": -126.22,
   "distance": 1,
   "panorama": "this.panorama_9C1428CA_90C6_B900_41DF_742A6993D40C"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "135%"
},
{
 "overlays": [
  "this.overlay_88748E51_9469_4F16_41D3_5BA296785E3D",
  "this.overlay_89C5F6FB_9467_7F0B_41D3_9B4D29091188",
  "this.overlay_886E48EA_9467_3335_41CC_F9606BF0AE30",
  "this.overlay_89F0CED7_941B_4F1A_41D3_4E95C91FE6DC"
 ],
 "label": "Fasilitas Kanan",
 "thumbnailUrl": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_t.jpg",
 "id": "panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 7.95,
   "yaw": -179.52,
   "distance": 1,
   "panorama": "this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5"
  }
 ],
 "pitch": 0,
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_t.jpg",
   "left": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfovMax": 130,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "135%"
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "MainViewer",
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "left": 0,
 "width": "100%",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 50,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "paddingTop": 0,
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "class": "ViewerArea",
 "toolTipPaddingRight": 10,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "paddingBottom": 0,
 "width": 300,
 "scrollBarWidth": 10,
 "left": "0%",
 "propagateClick": false,
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "--- LEFT PANEL"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container"
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "paddingBottom": 0,
 "width": 115.05,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 641,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-- SETTINGS"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "class": "Container"
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "paddingBottom": 0,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "scrollBarWidth": 10,
 "left": "0%",
 "right": "0%",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Profil Pasar"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "class": "Container",
 "backgroundOpacity": 0.6
},
{
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "paddingBottom": 0,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "scrollBarWidth": 10,
 "left": "0%",
 "right": "0%",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#04A3E1",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Informasi Pengunjung"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "class": "Container",
 "backgroundOpacity": 0.6
},
{
 "borderRadius": 0,
 "id": "veilPopupPanorama",
 "paddingBottom": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "left": 0,
 "right": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "data": {
  "name": "UIComponent9916"
 },
 "shadow": false,
 "visible": false,
 "class": "UIComponent",
 "backgroundOpacity": 0.55
},
{
 "borderRadius": 0,
 "id": "zoomImagePopupPanorama",
 "paddingBottom": 0,
 "left": 0,
 "right": 0,
 "propagateClick": false,
 "paddingRight": 0,
 "backgroundColorRatios": [],
 "borderSize": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "bottom": 0,
 "backgroundColor": [],
 "paddingTop": 0,
 "data": {
  "name": "ZoomImage9917"
 },
 "shadow": false,
 "visible": false,
 "scaleMode": "custom",
 "class": "ZoomImage",
 "backgroundOpacity": 1
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "layout": "horizontal",
 "borderRadius": 0,
 "pressedIconColor": "#888888",
 "id": "closeButtonPopupPanorama",
 "paddingBottom": 5,
 "iconWidth": 20,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "iconColor": "#000000",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "backgroundOpacity": 0.3,
 "right": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "iconHeight": 20,
 "paddingRight": 5,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 5,
 "rollOverIconColor": "#666666",
 "minHeight": 0,
 "iconBeforeLabel": true,
 "top": 10,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 5,
 "fontStyle": "normal",
 "paddingTop": 5,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "data": {
  "name": "CloseButton9918"
 },
 "shadow": false,
 "visible": false,
 "iconLineWidth": 5,
 "class": "CloseButton",
 "fontWeight": "normal"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false,
 "class": "IconButton"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false,
 "class": "IconButton"
},
{
 "maps": [
  {
   "hfov": 5.17,
   "yaw": 1.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0_HS_0_0.png",
      "width": 90,
      "height": 90,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 5.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.39,
   "pitch": -7.98
  }
 ],
 "id": "overlay_84EBFDF1_90CB_BB00_41D9_1ACA68112E5A",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 4.28,
   "yaw": 48.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0_HS_1_0.png",
      "width": 74,
      "height": 94,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 4.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 48.19,
   "pitch": -5.56
  }
 ],
 "id": "overlay_83BAC883_90CA_9900_41C6_F47AEB9CD190",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 4.75,
   "yaw": -47.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0_HS_2_0.png",
      "width": 82,
      "height": 81,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 4.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -47.18,
   "pitch": -5.2
  }
 ],
 "id": "overlay_83495638_90CD_8900_419B_238EED998505",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 10.59,
   "yaw": 76.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0_HS_5_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9E0F56FB_90C7_8900_41E0_D700C056263C, this.camera_83C18158_9BCA_17D1_41D9_B7E0AF960DC7); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5B6DA66_941F_D73A_41E2_BA7102020F29",
   "yaw": 76.2,
   "pitch": -19.06,
   "distance": 100,
   "hfov": 10.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E198EBB_9426_CF0B_41DD_CA19EF32EB58",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maps": [
  {
   "hfov": 13.56,
   "yaw": -71.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0_HS_6_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC, this.camera_83327168_9BCA_17F0_41D6_D3990DDD13E4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5B68A66_941F_D73A_41E2_12455E1F779F",
   "yaw": -71.64,
   "pitch": -17.4,
   "distance": 50,
   "hfov": 13.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8D60AF13_942B_CD1B_41DD_C52DC9D20826",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "maps": [
  {
   "hfov": 8.19,
   "yaw": 97.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0_HS_0_1_0_map.gif",
      "width": 71,
      "height": 137,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0_HS_0_0.png",
      "width": 142,
      "height": 274,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 8.19,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 97.04,
   "pitch": 2.21
  }
 ],
 "id": "overlay_8A1FBD3C_947B_CD0D_41E1_5831CD940B40",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 7.21,
   "yaw": 114.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0_HS_1_1_0_map.gif",
      "width": 62,
      "height": 120,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0_HS_1_0.png",
      "width": 125,
      "height": 240,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 7.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 114.67,
   "pitch": 3.01
  }
 ],
 "id": "overlay_8935EB66_947B_353D_41E1_3771AB3F8CA6",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 7.28,
   "yaw": -179.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A, this.camera_83081182_9BCA_1730_41D8_2E8C8AC51204); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5BD4A76_941F_D71A_41B0_7E8FE5696EBF",
   "yaw": -179.09,
   "pitch": -7.37,
   "distance": 100,
   "hfov": 7.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89CF4DEA_9469_4D0A_4195_70BC85C05F84",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maps": [
  {
   "hfov": 22.96,
   "yaw": -163.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0_HS_3_0_0_map.gif",
      "width": 51,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5, this.camera_8307417C_9BCA_17D0_41D8_D973A7D774E5); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5BD3A76_941F_D71A_41C5_0C44150B86A0",
   "yaw": -163.67,
   "pitch": -16.72,
   "distance": 50,
   "hfov": 22.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89CC8CDB_946E_D30B_41DA_84C3BFDC056C",
 "data": {
  "label": "Arrow 06b Right"
 }
},
{
 "maps": [
  {
   "hfov": 5.81,
   "yaw": -55.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0_HS_4_0.png",
      "width": 100,
      "height": 116,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 5.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -55.09,
   "pitch": 1.36
  }
 ],
 "id": "overlay_89C1F53E_946B_3D0A_41E2_15B4EB9EDED3",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 5.8,
   "yaw": -124.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0_HS_5_0.png",
      "width": 100,
      "height": 116,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 5.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -124.42,
   "pitch": 2.73
  }
 ],
 "id": "overlay_89F45D46_946B_4D7D_41D2_B7671ACA2C1C",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 8.21,
   "yaw": -64.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_83A8710B_9BCA_1730_41BE_89635BDBFF61",
   "yaw": -64.13,
   "pitch": -35.83,
   "distance": 100,
   "hfov": 8.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89E81092_9BCA_1550_41D1_8F91189872A5",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maps": [
  {
   "hfov": 8.4,
   "yaw": 83.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_83A8010B_9BCA_1730_41DB_06F71AC34052",
   "yaw": 83.69,
   "pitch": -33.92,
   "distance": 100,
   "hfov": 8.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89418648_9BCA_3D30_41D9_326A116144CF",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maps": [
  {
   "hfov": 5.78,
   "yaw": 0.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8397A10B_9BCA_1730_41C6_E52C02BAC5B1",
   "yaw": 0.25,
   "pitch": -8.5,
   "distance": 100,
   "hfov": 5.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_886F4369_9BCA_3BF0_41D1_EBF06E2D2A85",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maps": [
  {
   "hfov": 5.97,
   "yaw": -75.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0_HS_0_0_0_map.gif",
      "width": 15,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0_HS_0_0.png",
      "width": 103,
      "height": 110,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 5.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -75.02,
   "pitch": 0.14
  }
 ],
 "id": "overlay_8399BD8D_90CF_BB00_41D3_4DD50A256C20",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 6.62,
   "yaw": 79.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0_HS_1_0.png",
      "width": 115,
      "height": 115,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 6.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 79.06,
   "pitch": 0.14
  }
 ],
 "id": "overlay_839F3F72_90CD_B700_41E1_35D02036BCAF",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 23.65,
   "yaw": -166.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0_HS_2_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5B52A66_941F_D73A_41DB_659812D85DBE",
   "yaw": -166.51,
   "pitch": -18.39,
   "distance": 50,
   "hfov": 23.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8D0724A8_9427_D335_41CC_566B40E97822",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "maps": [
  {
   "hfov": 18.19,
   "yaw": 136.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0_HS_3_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F, this.camera_835A5198_9BCA_1750_41C8_DED2CB3E99C6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5B58A66_941F_D73A_41B4_18C04C6072E4",
   "yaw": 136.3,
   "pitch": -17.97,
   "distance": 50,
   "hfov": 18.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8AEA30AA_9419_F335_41DF_21701E0B73AC",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "maps": [
  {
   "hfov": 7.39,
   "yaw": 4.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0_HS_0_0.png",
      "width": 128,
      "height": 139,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 7.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 4.79,
   "pitch": -5.74
  }
 ],
 "id": "overlay_84B65091_90C6_8900_41C3_C1A32CB63FD3",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 5.56,
   "yaw": 53.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0_HS_1_0.png",
      "width": 96,
      "height": 96,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 5.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 53.17,
   "pitch": -5
  }
 ],
 "id": "overlay_8408106C_90C7_8900_41E0_C901DF4873EA",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 10.75,
   "yaw": -84.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9C1428CA_90C6_B900_41DF_742A6993D40C, this.camera_8324A168_9BCA_17F0_41B2_53DBE8AC22B0); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5BA1A76_941F_D71A_41D4_8CF9C960713C",
   "yaw": -84.43,
   "pitch": -16.31,
   "distance": 100,
   "hfov": 10.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8DCDE09B_9419_D30B_41C0_CAD349C471D9",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maps": [
  {
   "hfov": 14.47,
   "yaw": 79.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0_HS_3_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253, this.camera_83153168_9BCA_17F0_41DF_2F094FABE773); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5BAFA76_941F_D71A_41D3_10DA6EDFF1C7",
   "yaw": 79.5,
   "pitch": -18.65,
   "distance": 50,
   "hfov": 14.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8A5C37E1_941B_3D36_41E0_056557E1877B",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "maps": [
  {
   "hfov": 6.05,
   "yaw": -2.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_897A8241_9B3A_7533_41C4_8B67845FEEB9, {'pressedIconColor':'#888888','rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'iconHeight':20,'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconLineWidth':5,'rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#000000','rollOverBackgroundColorDirection':'vertical','iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'borderSize':0,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'paddingLeft':5,'paddingRight':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundOpacity':0.3,'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','backgroundColorDirection':'vertical'}, this.ImageResource_8AC30295_9BC6_7553_41B7_D6A5A3C2156E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0_HS_0_0.png",
      "width": 106,
      "height": 102,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 6.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.36,
   "pitch": -10.15
  }
 ],
 "id": "overlay_83E414A1_90CA_8900_41D7_5B148F6F0BA0",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 4.05,
   "yaw": 48.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0_HS_1_0.png",
      "width": 70,
      "height": 82,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 4.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 48.32,
   "pitch": -4.5
  }
 ],
 "id": "overlay_83A794E2_90CB_8900_4181_CD3287CEA029",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 4.74,
   "yaw": -44.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0_HS_2_0.png",
      "width": 82,
      "height": 77,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 4.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -44.63,
   "pitch": -6.46
  }
 ],
 "id": "overlay_8340AB2C_90CA_BF00_41D2_7C737F3728B7",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 9.23,
   "yaw": 138.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0_HS_3_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9E0F56FB_90C7_8900_41E0_D700C056263C, this.camera_82F121B8_9BCA_1750_41D4_175FFF94D6BB); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5BB1A76_941F_D71A_41C1_AB2A75C321EA",
   "yaw": 138.7,
   "pitch": -24.31,
   "distance": 100,
   "hfov": 9.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8EC76EA9_9419_4F37_41C3_66E1B470F12B",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maps": [
  {
   "hfov": 9.76,
   "yaw": 63.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0_HS_4_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA, this.camera_82E191C8_9BCA_1730_41E0_AC2560B699EE); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5BBDA76_941F_D71A_41DF_D1C1A1343512",
   "yaw": 63.2,
   "pitch": -15.38,
   "distance": 100,
   "hfov": 9.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8DB22754_9419_5D1D_41C7_C2D371005CAE",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maps": [
  {
   "hfov": 6.55,
   "yaw": 32.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 23,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0_HS_0_0.png",
      "width": 114,
      "height": 165,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 6.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 32.25,
   "pitch": 7.9
  }
 ],
 "id": "overlay_8939FB3E_9419_D50D_41D6_FAD5A041C121",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 3.3,
   "yaw": 60.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0_HS_1_0.png",
      "width": 57,
      "height": 54,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 3.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 60.51,
   "pitch": 4.04
  }
 ],
 "id": "overlay_8ABA2BD2_941A_D51A_41C7_1A354B3250C0",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 15.07,
   "yaw": -179.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5, this.camera_828F71B8_9BCA_1750_41DB_5468E0F8138E); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B4430A86_941F_D7FD_41D6_E17D17A65090",
   "yaw": -179.52,
   "pitch": -21.5,
   "distance": 100,
   "hfov": 15.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89769F1B_9419_CD0B_41D9_2D88026587D3",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maps": [
  {
   "hfov": 13.04,
   "yaw": -33.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2, this.camera_82BCC1A8_9BCA_1770_41DD_16DF6F4C26CD); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5B9AA76_941F_D71A_416F_13F335F530A6",
   "yaw": -33.14,
   "pitch": -19.72,
   "distance": 50,
   "hfov": 13.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89B57362_946F_353A_41C9_D7DE61FB7269",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "maps": [
  {
   "hfov": 13.61,
   "yaw": 30.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0_HS_1_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A, this.camera_834C4198_9BCA_1750_41E1_8B51A36EF48C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5B86A76_941F_D71A_41E0_74DC1E6B3AF0",
   "yaw": 30.94,
   "pitch": -19.72,
   "distance": 50,
   "hfov": 13.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_886DFB69_946E_D537_419C_78FAA3387566",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "maps": [
  {
   "hfov": 6.09,
   "yaw": -7.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0_HS_2_1_0_map.gif",
      "width": 52,
      "height": 107,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_801A2B1A_95E7_7515_41DE_86432AF291D3, this.camera_829F01A8_9BCA_1770_41B2_617AF07FF7E5); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0_HS_2_0.png",
      "width": 105,
      "height": 215,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 6.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -7.36,
   "pitch": -1.27
  }
 ],
 "id": "overlay_8821DD70_946B_4D15_41E0_2FBA70AB3731",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 6.09,
   "yaw": 7.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0_HS_3_1_0_map.gif",
      "width": 52,
      "height": 107,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946, this.camera_82AE91A8_9BCA_1770_41B8_E05C9CC66B77); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0_HS_3_0.png",
      "width": 105,
      "height": 214,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 6.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.95,
   "pitch": -1.16
  }
 ],
 "id": "overlay_8BA33593_9469_5D1B_41C7_6D58D9A7DC93",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 7.6,
   "yaw": -73.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0_HS_0_0.png",
      "width": 132,
      "height": 138,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 7.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -73.6,
   "pitch": -4
  }
 ],
 "id": "overlay_84FFABA9_90C5_BF00_41DC_1B9C1C505978",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 7.96,
   "yaw": 83.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0_HS_1_0.png",
      "width": 138,
      "height": 144,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 7.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 83.79,
   "pitch": 0.45
  }
 ],
 "id": "overlay_84952731_90DA_9700_41D0_E2759702EBD5",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 18.28,
   "yaw": 153.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0_HS_2_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5B90A76_941F_D71A_41E1_3D69D2382F6E",
   "yaw": 153.19,
   "pitch": -17.08,
   "distance": 50,
   "hfov": 18.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8C7ED7F1_9469_3D16_41BE_FEBF3E344E33",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "maps": [
  {
   "hfov": 20.56,
   "yaw": -149.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0_HS_3_0_0_map.gif",
      "width": 34,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA, this.camera_8367A188_9BCA_1730_41D3_395ED33F20DF); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5B9FA76_941F_D71A_41B6_8FBCF6E33B64",
   "yaw": -149.08,
   "pitch": -22.84,
   "distance": 50,
   "hfov": 20.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89932891_9469_5316_41D2_E89016FE7FCC",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false,
 "class": "IconButton"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false,
 "class": "IconButton"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false,
 "class": "IconButton"
},
{
 "maps": [
  {
   "hfov": 5.81,
   "yaw": 44.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0_HS_0_0.png",
      "width": 100,
      "height": 116,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 5.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 44.1,
   "pitch": 1.35
  }
 ],
 "id": "overlay_8A496F6B_947A_CD0A_41B0_97519B3A4E1A",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 6.48,
   "yaw": 127.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0_HS_1_0.png",
      "width": 115,
      "height": 124,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 6.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 127.61,
   "pitch": 12.87
  }
 ],
 "id": "overlay_8BC28B11_9479_3517_41D6_CE40A151E0FF",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 8.44,
   "yaw": -96.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0_HS_2_1_0_map.gif",
      "width": 73,
      "height": 140,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0_HS_2_0.png",
      "width": 146,
      "height": 280,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 8.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -96.4,
   "pitch": 2.13
  }
 ],
 "id": "overlay_8A34BFA1_947F_4D36_41C1_B003E14C5158",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 6.9,
   "yaw": -114.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0_HS_3_1_0_map.gif",
      "width": 59,
      "height": 125,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0_HS_3_0.png",
      "width": 119,
      "height": 250,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 6.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -114.78,
   "pitch": 2.97
  }
 ],
 "id": "overlay_89289022_947F_333A_41DB_2024E91948B5",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 20.06,
   "yaw": 157.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0_HS_4_0_0_map.gif",
      "width": 51,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5, this.camera_83FEE141_9BCA_1733_41E1_A576467C2E73); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5BFAA76_941F_D71A_41DF_1EC6E162734D",
   "yaw": 157.43,
   "pitch": -16.15,
   "distance": 50,
   "hfov": 20.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_896D8D81_9469_CDF6_41E0_91C28F218222",
 "data": {
  "label": "Arrow 06b Left"
 }
},
{
 "maps": [
  {
   "hfov": 7.27,
   "yaw": 177.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0_HS_5_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.06,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2, this.camera_83E4F148_9BCA_1731_41B4_03957F6C4B62); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5BE6A76_941F_D71A_41B0_1A893D1FE5E9",
   "yaw": 177.93,
   "pitch": -8.06,
   "distance": 100,
   "hfov": 7.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_896471CF_946A_D50A_41E0_5BF5DE432257",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maps": [
  {
   "hfov": 3.44,
   "yaw": 4.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0_HS_0_0.png",
      "width": 59,
      "height": 72,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 3.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 4.05,
   "pitch": -4.14
  }
 ],
 "id": "overlay_82592C51_90FB_9900_41DE_340FCB634481",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 2.67,
   "yaw": 48.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0_HS_1_0.png",
      "width": 46,
      "height": 54,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 2.67,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 48.96,
   "pitch": -2.1
  }
 ],
 "id": "overlay_820F4F9F_90C5_F700_41CE_05C82E1773D5",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 2.76,
   "yaw": -33.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0_HS_2_0.png",
      "width": 48,
      "height": 50,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 2.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -33.3,
   "pitch": -6.78
  }
 ],
 "id": "overlay_83B137C4_90C6_9700_41D0_121F9E9B0877",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 9.62,
   "yaw": -53.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0_HS_5_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F, this.camera_83E89148_9BCA_1731_41CA_0D390824E093); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5B73A66_941F_D73A_41AE_8720DF9EBB86",
   "yaw": -53.11,
   "pitch": -18.13,
   "distance": 100,
   "hfov": 9.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8C53206B_943B_730A_41C4_EEC0FEE29282",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maps": [
  {
   "hfov": 8.88,
   "yaw": -126.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0_HS_6_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9C1428CA_90C6_B900_41DF_742A6993D40C, this.camera_83DC4158_9BCA_17D1_41E1_73AE991043F0); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5B79A66_941F_D73A_41DC_216D62846338",
   "yaw": -126.22,
   "pitch": -28.77,
   "distance": 100,
   "hfov": 8.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E646203_9439_76FA_41D9_C898ABC4E160",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maps": [
  {
   "hfov": 5.36,
   "yaw": 7.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_0_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_0_0.png",
      "width": 93,
      "height": 86,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 5.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.06,
   "pitch": 5.34
  }
 ],
 "id": "overlay_88748E51_9469_4F16_41D3_5BA296785E3D",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 5.36,
   "yaw": 34.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_1_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_1_0.png",
      "width": 93,
      "height": 86,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 5.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 34.97,
   "pitch": 5.75
  }
 ],
 "id": "overlay_89C5F6FB_9467_7F0B_41D3_9B4D29091188",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 6.54,
   "yaw": -31.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 23,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_2_0.png",
      "width": 114,
      "height": 165,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 6.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -31.65,
   "pitch": 8.08
  }
 ],
 "id": "overlay_886E48EA_9467_3335_41CC_F9606BF0AE30",
 "data": {
  "label": "Image"
 }
},
{
 "maps": [
  {
   "hfov": 15.07,
   "yaw": -179.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_3_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_80189775_95E7_5D1E_41C4_951D826A84A5, this.camera_8369C188_9BCA_1730_41D8_A75C2521E5B6); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B5BCFA86_941F_D7FD_41A9_38C2DBC2C79C",
   "yaw": -179.52,
   "pitch": -21.5,
   "distance": 100,
   "hfov": 15.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_89F0CED7_941B_4F1A_41D3_4E95C91FE6DC",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "paddingBottom": 0,
 "width": 66,
 "scrollBarWidth": 10,
 "left": "0%",
 "propagateClick": true,
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container"
},
{
 "backgroundOpacity": 0.7,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "paddingBottom": 40,
 "width": 300,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479"
 ],
 "paddingRight": 40,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingLeft": 40,
 "overflow": "scroll",
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 40,
 "contentOpaque": false,
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "height": "100%"
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "paddingBottom": 0,
 "width": 110,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 110,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "class": "Container"
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingBottom": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "91.304%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "gap": 3,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "class": "Container",
 "backgroundOpacity": 0
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "paddingBottom": 0,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "class": "Container",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "paddingBottom": 0,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "scrollBarWidth": 10,
 "left": "15%",
 "right": "15%",
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 20,
 "borderSize": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundOpacity": 0
},
{
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "paddingBottom": 0,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "bottom": "10%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "contentOpaque": false,
 "class": "Container",
 "creationPolicy": "inAdvance",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "paddingBottom": 0,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "scrollBarWidth": 10,
 "left": "15%",
 "right": "15%",
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 20,
 "borderSize": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "horizontalAlign": "right",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundOpacity": 0
},
{
 "levels": [
  {
   "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0_HS_5_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5B6DA66_941F_D73A_41E2_BA7102020F29",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9C22621A_90C6_8900_41D8_0D75BA7D291F_0_HS_6_0.png",
   "width": 520,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5B68A66_941F_D73A_41E2_12455E1F779F",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0_HS_2_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5BD4A76_941F_D71A_41B0_7E8FE5696EBF",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_801FCD67_95E7_4D3A_41E0_EC22173C43D2_0_HS_3_0.png",
   "width": 640,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5BD3A76_941F_D71A_41C5_0C44150B86A0",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_83A8710B_9BCA_1730_41BE_89635BDBFF61",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_83A8010B_9BCA_1730_41DB_06F71AC34052",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8BB5F43F_9B4E_1D50_41B1_DFA2890ADA27_0_HS_2_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_8397A10B_9BCA_1730_41C6_E52C02BAC5B1",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0_HS_2_0.png",
   "width": 520,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5B52A66_941F_D73A_41DB_659812D85DBE",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9C12AD11_90C6_9B00_41CD_B23A7FF1ABFC_0_HS_3_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5B58A66_941F_D73A_41B4_18C04C6072E4",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0_HS_2_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5BA1A76_941F_D71A_41D4_8CF9C960713C",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9C155344_90C6_8F00_41D6_834FE9C3E0CA_0_HS_3_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5BAFA76_941F_D71A_41D3_10DA6EDFF1C7",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0_HS_3_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5BB1A76_941F_D71A_41C1_AB2A75C321EA",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9C1428CA_90C6_B900_41DF_742A6993D40C_0_HS_4_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5BBDA76_941F_D71A_41DF_D1C1A1343512",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_801A2B1A_95E7_7515_41DE_86432AF291D3_0_HS_2_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B4430A86_941F_D7FD_41D6_E17D17A65090",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0_HS_0_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5B9AA76_941F_D71A_416F_13F335F530A6",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_80189775_95E7_5D1E_41C4_951D826A84A5_0_HS_1_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5B86A76_941F_D71A_41E0_74DC1E6B3AF0",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0_HS_2_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5B90A76_941F_D71A_41E1_3D69D2382F6E",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9C1F2E81_90C6_9900_41C6_6A8637D06253_0_HS_3_0.png",
   "width": 520,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5B9FA76_941F_D71A_41B6_8FBCF6E33B64",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0_HS_4_0.png",
   "width": 640,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5BFAA76_941F_D71A_41DF_1EC6E162734D",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_81EB9595_95E7_DD1F_41BF_7F344D14751A_0_HS_5_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5BE6A76_941F_D71A_41B0_1A893D1FE5E9",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0_HS_5_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5B73A66_941F_D73A_41AE_8720DF9EBB86",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9E0F56FB_90C7_8900_41E0_D700C056263C_0_HS_6_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5B79A66_941F_D73A_41DC_216D62846338",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_8019A0EF_95E7_730B_41C7_FAC62F03D946_0_HS_3_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B5BCFA86_941F_D7FD_41A9_38C2DBC2C79C",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "backgroundOpacity": 0.4,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "paddingBottom": 0,
 "width": 36,
 "scrollBarWidth": 10,
 "left": "0%",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "height": "100%"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "paddingBottom": 0,
 "width": 50,
 "left": 10,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "minHeight": 1,
 "top": "40%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "bottom": "40%",
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "class": "IconButton",
 "backgroundOpacity": 0
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "paddingBottom": 0,
 "left": "0%",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "paddingLeft": 0,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "minHeight": 30,
 "top": "5.65%",
 "horizontalAlign": "left",
 "minWidth": 40,
 "height": "23.904%",
 "paddingTop": 0,
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "scaleMode": "fit_inside",
 "class": "Image"
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "paddingBottom": 0,
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "25%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "25%",
 "scrollBarOpacity": 0.5,
 "gap": 0,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-Container buttons"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundOpacity": 0
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "paddingBottom": 0,
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "scrollBarMargin": 2,
 "height": "26.316%",
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-Container footer"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "backgroundOpacity": 0
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingBottom": 0,
 "width": 60,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false,
 "visible": false,
 "class": "IconButton"
},
{
 "backgroundOpacity": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingBottom": 0,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "width": "85%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "height": "100%"
},
{
 "backgroundOpacity": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingBottom": 20,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "50%",
 "overflow": "visible",
 "paddingLeft": 50,
 "minHeight": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "height": "100%"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "25%",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "transparencyActive": false,
 "height": "75%",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "class": "IconButton"
},
{
 "backgroundOpacity": 1,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingBottom": 0,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "width": "55%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "height": "100%"
},
{
 "backgroundOpacity": 1,
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingBottom": 20,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "45%",
 "overflow": "visible",
 "paddingLeft": 60,
 "minHeight": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.51,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "height": "100%"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "25%",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "minWidth": 50,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "transparencyActive": false,
 "height": "75%",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "class": "IconButton"
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "paddingBottom": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "paddingBottom": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "height": 50,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "gap": 5,
 "label": "Profil Pasar",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button Tour Info"
 },
 "fontWeight": "normal",
 "class": "Button"
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "paddingBottom": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "paddingBottom": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "height": 50,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "gap": 23,
 "label": "Virtual Tour Zona Barat",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 1)",
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button Panorama List"
 },
 "fontWeight": "normal",
 "class": "Button"
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "paddingBottom": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "paddingBottom": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedLabel": "Location",
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "height": 50,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "gap": 5,
 "label": "Virtual Tour Zona Timur",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 4)",
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button Location"
 },
 "fontWeight": "normal",
 "class": "Button"
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "paddingBottom": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "paddingBottom": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "height": 50,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "gap": 5,
 "label": "Virtual Tour Fasilitas Pasar",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 7)",
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button Floorplan"
 },
 "fontWeight": "normal",
 "class": "Button"
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "paddingBottom": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "paddingBottom": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "cursor": "hand",
 "layout": "horizontal",
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "textDecoration": "none",
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "paddingBottom": 0,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "width": "100%",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "height": 50,
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderColor": "#000000",
 "fontColor": "#FFFFFF",
 "gap": 5,
 "label": "Informasi Pengunjung",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false)",
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "fontStyle": "italic",
 "shadow": false,
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "class": "Button"
},
{
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "paddingBottom": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "height": 1,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "line"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "paddingBottom": 0,
 "width": 40,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "height": 2,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "blue line"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "paddingBottom": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": true,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "height": 78,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Alamat : Jl. Suryoputran, Kelurahan Panembahan, Kemantren Kraton, Kota Yogyakarta.</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "class": "HTMLText"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "paddingBottom": 0,
 "width": 42,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 42,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "class": "IconButton"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "paddingBottom": 0,
 "left": "0%",
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "paddingLeft": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.png",
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "scaleMode": "fit_outside",
 "class": "Image"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingBottom": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 0,
 "horizontalAlign": "right",
 "height": 50,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "visible": false,
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0.3,
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingBottom": 10,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 300,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "height": "100%"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingBottom": 0,
 "width": 370,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "height": 30,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "paddingBottom": 0,
 "left": "0%",
 "propagateClick": false,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "paddingLeft": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "Image40635"
 },
 "shadow": false,
 "scaleMode": "fit_outside",
 "class": "Image"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingBottom": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 0,
 "horizontalAlign": "right",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 20,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "height": "5%"
},
{
 "backgroundOpacity": 0.3,
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingBottom": 30,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 520,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.79,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "height": "100%"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingBottom": 0,
 "width": 370,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "height": 40,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "scrollBarOpacity": 0.5
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingBottom": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderSize": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.39vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.72vh;font-family:'Oswald';\"><B><I>Kuliner Sore </I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.72vh;font-family:'Oswald';\"><B><I>Pasar Kluwih</I></B></SPAN><SPAN STYLE=\"font-size:4.96vh;font-family:'Oswald';\"><B><I> </I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.02vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.4vh;\">Pasar Kluwih merupakan pasar tradisional yang terletak di Kemantren Kraton, Yogyakarta, telah eksis sejak 1950-an sebagai pusat ekonomi warga untuk kebutuhan harian seperti bahan makanan dan camilan khas. Selain jual-beli, tempat ini jadi wadah silaturahmi masyarakat setempat yang ramai. Karena kepadatan dan ketidakteraturan, revitalisasi dilakukan untuk perbaiki kenyamanan, kebersihan, serta sarana pendukung. Kini, pasar tak hanya buka pagi, tapi juga jadi spot kuliner malam di Kelurahan Panembahan, Kraton, mulai resmi 15 Desember 2025, beroperasi harian pukul 17.00\u201322.00 WIB dengan 19 pedagang hidangan lokal menggoda.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.4vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.4vh;\">Kuliner Sore Pasar Kluwih berbentuk area terbuka yang dibagi tiga zona: Zona Barat dengan pedagang makanan-minuman plus gazebo di sisi kiri, Zona Timur mirip dengan susunan pedagang serupa, serta Zona Fasilitas Pengunjung lengkap area duduk lesehan asyik dan toilet umum. Lokasinya strategis di jantung Yogyakarta menjadikannya pusat kegiatan ekonomi dan sosial malam hari bagi warga serta wisatawan.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "class": "HTMLText"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "paddingBottom": 10,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderSize": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0,
 "scrollBarMargin": 2,
 "height": "46%",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.39vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false,
 "class": "HTMLText"
},
{
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingBottom": 0,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "width": "100%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "- content"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Container",
 "height": "75%"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "25%",
 "paddingLeft": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "horizontalAlign": "left",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "data": {
  "name": "agent photo"
 },
 "shadow": false,
 "scaleMode": "fit_inside",
 "class": "Image"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "paddingBottom": 10,
 "width": "75%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderSize": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.29vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.29vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.91vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.91vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.91vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.91vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.02vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.02vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false,
 "class": "HTMLText"
}],
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getKey": function(key){  return window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "contentOpaque": false,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "creationPolicy": "inAdvance",
 "class": "Player",
 "height": "100%",
 "downloadEnabled": false
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
