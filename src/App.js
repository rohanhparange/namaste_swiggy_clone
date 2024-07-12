import './App.css';
import RestroCard from './components/cards/restro-card';
import Header from './components/layout/header/header';
import SearchComp from './components/search/search';

const data = [
  {
      "info": {
          "id": "7135",
          "name": "Charcoal Eats - Biryani & Beyond",
          "cloudinaryImageId": "9c18db360f5bee01412a495b1a67372d",
          "locality": "Dadar East",
          "areaName": "Dadar East",
          "costForTwo": "₹499 for two",
          "cuisines": [
              "Biryani",
              "Kebabs",
              "North Indian",
              "Mughlai"
          ],
          "avgRating": 4.4,
          "parentId": "5338",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=15165461~p=0~adgrpid=15165461#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=7135~eid=bb3ae517-4c31-4c65-8fa5-7858dc4de5e4~srvts=1720712893157~collid=45995",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 0.7,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 23:59:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "header": "₹100 OFF",
              "shortDescriptionList": [
                  {
                      "meta": "Use FORFOODIE",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "Flat ₹100 off | Use FORFOODIE",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": "",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "imageBased": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "3.9",
                  "ratingCount": "500+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=7135",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "23715",
          "name": "McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/b5c7e325-a2b3-4334-b104-0b20df81dd93_23715.JPG",
          "locality": "Dadar West",
          "areaName": "Dadar West",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
          ],
          "avgRating": 4.5,
          "parentId": "630",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 3.7,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "3.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-12 00:45:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "shortDescriptionList": [
                  {
                      "discountType": "FinalPrice",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "Get items under 199",
                      "discountType": "FinalPrice",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                                  "description": "Delivery!"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "10K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=23715",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "595682",
          "name": "Subway",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/518837c9-252e-47e6-90d3-055f0ea2c79d_595682.JPG",
          "locality": "Gani Mansion",
          "areaName": "Matunga Wadala",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "2",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 23:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=595682",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "331762",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
          "locality": "ISSARDAS, WADALA",
          "areaName": "Wadala",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
          ],
          "avgRating": 4,
          "parentId": "2456",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 22:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Pizza.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "header": "₹150 OFF",
              "shortDescriptionList": [
                  {
                      "meta": "Use WELCOMEDOM150",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "Flat ₹150 off on orders above ₹299 | Use code WELCOMEDOM150",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                  "description": "Delivery!"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {},
                  "textBased": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=331762",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "652310",
          "name": "Nino Burgers",
          "cloudinaryImageId": "9e9bd2c9ca7be7c08e88ccf1eeccfb1e",
          "locality": "Gokhale Road",
          "areaName": "Dadar West",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "Burgers",
              "Fast Food",
              "American"
          ],
          "avgRating": 4.3,
          "parentId": "12333",
          "avgRatingString": "4.3",
          "totalRatingsString": "500+",
          "promoted": true,
          "adTrackingId": "cid=15130972~p=1~adgrpid=15130972#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=652310~eid=22be4dd1-7223-4602-b55d-766ac30af415~srvts=1720712893157~collid=45995",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 23:59:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "header": "₹125 OFF",
              "shortDescriptionList": [
                  {
                      "meta": "Use FLAT125",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "Flat ₹125 off on orders above ₹299 | Use code FLAT125",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textExtendedBadges": {},
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "newg.png",
                                  "description": "Gourmet"
                              }
                          }
                      ]
                  }
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.3",
                  "ratingCount": "10+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=652310",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "749765",
          "name": "Dabba Garam (Homestyle,Combo, Thali & More)",
          "cloudinaryImageId": "7fca904cea27fd7c1a97c85892c25612",
          "locality": "Ss Wagh Marg",
          "areaName": "Parel",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "North Indian",
              "Indian"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "67608",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 22:50:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "header": "20% OFF",
              "shortDescriptionList": [
                  {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "20% off up to ₹50 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=749765",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "13151",
          "name": "Gypsy Corner",
          "cloudinaryImageId": "uc49yfb12ox4d0yzbig3",
          "locality": "Dadar West",
          "areaName": "Dadar West",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Maharashtrian",
              "Fast Food"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "92428",
          "avgRatingString": "4.6",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      "description": "OnlyOnSwiggy"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textExtendedBadges": {},
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                  "description": "OnlyOnSwiggy"
                              }
                          }
                      ]
                  }
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "5K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=13151",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "827855",
          "name": "Brij Albela",
          "cloudinaryImageId": "0d1a2c54459b06b332e8291490741859",
          "locality": "Matunga Wadala",
          "areaName": "Matunga Wadala",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "Sweets"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "50065",
          "avgRatingString": "4.6",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 22:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      "description": "OnlyOnSwiggy"
                  }
              ],
              "textExtendedBadges": [
                  {
                      "iconId": "Ratnesh_Badges/test2.png",
                      "shortDescription": "Perfect ice cream delivery",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                  "description": "OnlyOnSwiggy"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "shortDescription": "Perfect ice cream delivery",
                                  "fontColor": "#7E808C",
                                  "iconId": "Ratnesh_Badges/test2.png"
                              }
                          }
                      ]
                  }
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=827855",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "657121",
          "name": "Food Darzee",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/20/c35b367e-c300-406f-9be0-4c93e3d62fa3_657121.jpg",
          "locality": "New Bharat Mill",
          "areaName": "Lower Parel",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "Healthy Food",
              "Salads",
              "European",
              "Continental",
              "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "394902",
          "avgRatingString": "4.1",
          "totalRatingsString": "500+",
          "promoted": true,
          "adTrackingId": "cid=15178819~p=3~adgrpid=15178819#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=657121~eid=12d9d867-e314-4ff6-8362-51c205be4779~srvts=1720712893157~collid=45995",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 23:59:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "shortDescriptionList": [
                  {
                      "discountType": "FinalPrice",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "Get every item @ 199",
                      "discountType": "FinalPrice",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x"
                              }
                          }
                      ]
                  },
                  "textBased": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=657121",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "90886",
          "name": "Karishma",
          "cloudinaryImageId": "jgjgqeongnt5xcuo9dmf",
          "locality": "Dadar East",
          "areaName": "Dadar East",
          "costForTwo": "₹700 for two",
          "cuisines": [
              "North Indian",
              "Chinese",
              "South Indian",
              "Biryani",
              "Mughlai",
              "Malwani",
              "Seafood",
              "Mangalorean",
              "Sweets"
          ],
          "avgRating": 4.4,
          "parentId": "453419",
          "avgRatingString": "4.4",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 1.6,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 23:59:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "header": "₹125 OFF",
              "shortDescriptionList": [
                  {
                      "meta": "Use FLASHDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "Flat ₹125 off | Use FLASHDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": ""
                              }
                          }
                      ]
                  },
                  "textBased": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "3.9",
                  "ratingCount": "1K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=90886",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "351134",
          "name": "Grameen Kulfi",
          "cloudinaryImageId": "oxaiceezi8cykbjthtq2",
          "locality": "Jay Mangal CHS",
          "areaName": "Matunga",
          "costForTwo": "₹120 for two",
          "cuisines": [
              "Ice Cream",
              "Desserts"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "12175",
          "avgRatingString": "4.7",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-12 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "header": "₹100 OFF",
              "shortDescriptionList": [
                  {
                      "meta": "Use FLAT100",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "Flat ₹100 off on orders above ₹349 | Use code FLAT100",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=351134",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "724262",
          "name": "Ayyappan Idli",
          "cloudinaryImageId": "0424c199ee177e985136fa20229be7d3",
          "locality": "Matunga East",
          "areaName": "Matunga Wadala",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "South Indian",
              "Beverages"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "431058",
          "avgRatingString": "4.3",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 22:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "header": "20% OFF",
              "shortDescriptionList": [
                  {
                      "meta": "Use PARTY",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "20% off | Use code PARTY",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=724262",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "654440",
          "name": "Francesco's Pizzeria",
          "cloudinaryImageId": "956ffaf61170ebd6eb35ecc906b51d8e",
          "locality": "Gokhale Road",
          "areaName": "Dadar West",
          "costForTwo": "₹600 for two",
          "cuisines": [
              "Pizzas",
              "Italian",
              "Fast Food"
          ],
          "avgRating": 4.4,
          "parentId": "2464",
          "avgRatingString": "4.4",
          "totalRatingsString": "500+",
          "promoted": true,
          "adTrackingId": "cid=15172602~p=4~adgrpid=15172602#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=654440~eid=ce5b1572-714e-4d29-9308-9ec9557bc29d~srvts=1720712893157~collid=45995",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-12 04:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "header": "60% OFF",
              "shortDescriptionList": [
                  {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "60% off up to ₹120 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "newg.png",
                                  "description": "Gourmet"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "20+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=654440",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "109895",
          "name": "New Pankaj",
          "cloudinaryImageId": "krzz8ohjx0ges8z99qab",
          "locality": "opp matunga central railway station",
          "areaName": "Matunga",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Chaat",
              "Snacks",
              "Beverages",
              "Pizzas",
              "Desserts",
              "Street Food",
              "Fast Food"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "147444",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 22:01:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "header": "60% OFF",
              "shortDescriptionList": [
                  {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "60% off up to ₹120 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textExtendedBadges": {},
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                              }
                          }
                      ]
                  }
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=109895",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "67525",
          "name": "Mamta Chat Corner",
          "cloudinaryImageId": "4a8ca5c95abc98e6629cbc692c53d493",
          "locality": "L.N.Road",
          "areaName": "Matunga",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Chaat",
              "Fast Food",
              "Snacks",
              "Beverages",
              "Grill",
              "Barbecue"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "131274",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 23:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "header": "₹125 OFF",
              "shortDescriptionList": [
                  {
                      "meta": "Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "FLAT125 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                              }
                          }
                      ]
                  },
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=67525",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  },
  {
      "info": {
          "id": "20009",
          "name": "Acharekar's Malvan Katta",
          "cloudinaryImageId": "58d38d67be2f59cf99f1a506aed8146b",
          "locality": "Dadar West",
          "areaName": "Dadar West",
          "costForTwo": "₹600 for two",
          "cuisines": [
              "Malwani",
              "Seafood",
              "Coastal"
          ],
          "avgRating": 4.3,
          "parentId": "2265",
          "avgRatingString": "4.3",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-07-11 22:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
              "header": "10% OFF",
              "shortDescriptionList": [
                  {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                  }
              ],
              "descriptionList": [
                  {
                      "meta": "10% off up to ₹40 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                  }
              ]
          },
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "textBased": {},
                  "imageBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.6",
                  "ratingCount": "10+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
      "cta": {
          "link": "swiggy://menu?restaurant_id=20009",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
      }
  }
]

function App() {
  return (
    <div>
      <Header></Header>
      <SearchComp></SearchComp>
      <div className='res-container'>
        {
          data.map((restruant)=>{
            return <RestroCard key={restruant?.info?.id}
              name={restruant?.info?.name}
              imageId={restruant?.info?.cloudinaryImageId}
              cuisines={restruant?.info?.cuisines}
              avgRatingString={restruant?.info?.avgRatingString}
              costForTwo={restruant?.info?.costForTwo}
              sla={restruant?.info?.sla}
            ></RestroCard>
          })

        }
      </div>
    </div>
  );
}

export default App;
