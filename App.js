import React from "react";
import ReactDOM from "react-dom/client";

const restaurants = [
  {
    info: {
      id: "188083",
      name: "Devendra Jalpan",
      cloudinaryImageId: "hlnns8vv0zp0w1douf5c",
      locality: "Dn Shing Road",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹100 for two",
      cuisines: ["Chinese", "South Indian", "Sweets"],
      avgRating: 3.7,
      veg: true,
      feeDetails: {
        restaurantId: "188083",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "71644",
      avgRatingString: "3.7",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "16 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 21:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/devendra-jalpan-dn-shing-road-bhagalpur-locality-bhagalpur-188083",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "310697",
      name: "Momo Nation Cafe",
      cloudinaryImageId: "doejse9adnyblndrsemr",
      locality: "Masak Chowk",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Beverages"],
      avgRating: 3.8,
      veg: true,
      feeDetails: {
        restaurantId: "310697",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "4157",
      avgRatingString: "3.8",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 23:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/momo-nation-cafe-masak-chowk-bhagalpur-locality-bhagalpur-310697",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "215816",
      name: "Grill Inn",
      cloudinaryImageId: "zdauuu2ozreukvgu8y8d",
      locality: "Vinayak Complex",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹150 for two",
      cuisines: ["Italian", "Snacks", "Desserts"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "215816",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "432",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/grill-inn-vinayak-complex-bhagalpur-locality-bhagalpur-215816",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "507208",
      name: "KARIM'S- Original from Jama Masjid Delhi- 6",
      cloudinaryImageId: "ycu7gosjaxzn4jyphv4i",
      locality: "Dn Singh Road ",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Mughlai", "Biryani"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "507208",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "284854",
      avgRatingString: "3.8",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/karims-original-from-jama-masjid-delhi-6-dn-singh-road-bhagalpur-locality-bhagalpur-507208",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "196548",
      name: "7th Heaven Cake Shop",
      cloudinaryImageId: "wetsuiba3qdf4jty1nmb",
      locality: "Katahalbari",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "196548",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "11434",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 21:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/7th-heaven-cake-shop-katahalbari-bhagalpur-locality-bhagalpur-196548",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "192219",
      name: "Mother's Kitchen",
      cloudinaryImageId: "9cb655f981a7c6af9529e940938903e3",
      locality: "Manali Chowk",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Chinese", "Biryani"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "192219",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "7766",
      avgRatingString: "3.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mothers-kitchen-manali-chowk-bhagalpur-locality-bhagalpur-192219",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "355919",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Bank Colony",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "355919",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-bank-colony-bhagalpur-locality-bhagalpur-355919",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "353198",
      name: "Bake Club  & Big Bite Rolls",
      cloudinaryImageId: "zofm2lphc3s5zfusmfwt",
      locality: "Kachahri Chowk",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹100 for two",
      cuisines: [
        "Bakery",
        "Chinese",
        "Italian",
        "Tandoor",
        "North Indian",
        "Snacks",
      ],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "353198",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "39889",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bake-club-and-big-bite-rolls-kachahri-chowk-bhagalpur-locality-bhagalpur-353198",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "192914",
      name: "Momo House - Ghantaghar",
      cloudinaryImageId: "nfgjflxs6sbcdqw1j6mj",
      locality: "Ghanta Ghar",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹100 for two",
      cuisines: ["Chinese"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "192914",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "138159",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/momo-house-ghantaghar-ghanta-ghar-bhagalpur-locality-bhagalpur-192914",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "192925",
      name: "Adarsh Jalpan",
      cloudinaryImageId: "aml6qzph7tfteya2aj1x",
      locality: "Sujagunj",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹100 for two",
      cuisines: ["North Indian", "Chinese", "Italian"],
      avgRating: 3.6,
      veg: true,
      feeDetails: {
        restaurantId: "192925",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "26966",
      avgRatingString: "3.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 21:31:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/adarsh-jalpan-sujagunj-bhagalpur-locality-bhagalpur-192925",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "192223",
      name: "Balajee Sweets - Burhanath",
      cloudinaryImageId: "wtz6gagxtffmo07qdug0",
      locality: "Burhanath Chowk",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹100 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Desserts",
        "South Indian",
        "Italian",
      ],
      avgRating: 3.8,
      veg: true,
      feeDetails: {
        restaurantId: "192223",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "40545",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 21:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "ABOVE ₹149",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/balajee-sweets-burhanath-burhanath-chowk-bhagalpur-locality-bhagalpur-192223",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "288903",
      name: "Uspfc",
      cloudinaryImageId: "etezcr34ruuz6wv5qnx4",
      locality: "Ghantaghar Chowk",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹100 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "288903",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "220335",
      avgRatingString: "3.8",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/uspfc-ghantaghar-chowk-bhagalpur-locality-bhagalpur-288903",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "372866",
      name: "Royal Darbar",
      cloudinaryImageId: "omp16pmln5av2jz1sj8p",
      locality: "Mg Road",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Chinese", "Biryani"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "372866",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "19337",
      avgRatingString: "3.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/royal-darbar-mg-road-bhagalpur-locality-bhagalpur-372866",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "357051",
      name: "The Backbenchers",
      cloudinaryImageId: "lxnvyes0zjzeorkypsgd",
      locality: "Bhagalpur",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Snacks"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "357051",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "204847",
      avgRatingString: "3.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-backbenchers-bhagalpur-locality-bhagalpur-357051",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "188449",
      name: "7th Heaven - Khalifabag",
      cloudinaryImageId: "xlcxrygmohkkdfsmm2p3",
      locality: "Khalifabag Chowk",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹250 for two",
      cuisines: ["Italian", "Continental", "Chinese", "Bakery"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "188449",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "24157",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹75 OFF",
        subHeader: "ABOVE ₹450",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/7th-heaven-khalifabag-khalifabag-chowk-bhagalpur-locality-bhagalpur-188449",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "283745",
      name: "MayFair Family Rastaurant",
      cloudinaryImageId: "k7yxsmv5yckmxiq90ujp",
      locality: "Ashirwad Compex ",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Chinese", "Biryani"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "283745",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "133935",
      avgRatingString: "3.8",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mayfair-family-rastaurant-ashirwad-compex-bhagalpur-locality-bhagalpur-283745",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "192221",
      name: "Balajee Sweets - Shitla Sthan",
      cloudinaryImageId: "o2qdac2u6pqezk0ju9oh",
      locality: "Mirjanhat ",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Desserts",
        "South Indian",
        "Italian",
      ],
      avgRating: 3.7,
      veg: true,
      feeDetails: {
        restaurantId: "192221",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "40546",
      avgRatingString: "3.7",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "ABOVE ₹149",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/balajee-sweets-shitla-sthan-mirjanhat-bhagalpur-locality-bhagalpur-192221",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "382151",
      name: "Chinmaye  Inn",
      cloudinaryImageId: "lcidfuiugv8gi2mf2dtx",
      locality: "Katahalbari",
      areaName: "Bhagalpur Locality",
      costForTwo: "₹400 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "382151",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "243806",
      avgRatingString: "3.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-07-25 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chinmaye-inn-katahalbari-bhagalpur-locality-bhagalpur-382151",
      type: "WEBLINK",
    },
  },
];

let Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Food Villa"
      src="https://tmlogosave.s3.ap-south-1.amazonaws.com/5653883.jpeg"
    />
  </a>
);

const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const Restaurant = (props) => {
  return (
    <div className="item">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ props.restaurant.cloudinaryImageId} />
      <h2>{props.restaurant.name}</h2>
      <h3>{props.restaurant.cuisines}</h3>
      <h4>{props.restaurant.avgRating} stars</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restaurantList">
        {restaurants.map((restaurant)=>{
            return <Restaurant restaurant = {restaurant.info}/>
        })}
    </div>
  );
};

const Footer = () => <h4>Footer</h4>;

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
