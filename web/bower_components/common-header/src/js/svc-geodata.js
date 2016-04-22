angular.module("risevision.common.geodata", [])
  .value("REGIONS_CA", [
    ["Alberta", "AB"],
    ["British Columbia", "BC"],
    ["Manitoba", "MB"],
    ["New Brunswick", "NB"],
    ["Newfoundland and Labrador", "NL"],
    ["Northwest Territories", "NT"],
    ["Nova Scotia", "NS"],
    ["Nunavut", "NU"],
    ["Ontario", "ON"],
    ["Prince Edward Island", "PE"],
    ["Quebec", "QC"],
    ["Saskatchewan", "SK"],
    ["Yukon Territory", "YT"]
  ])

.value("REGIONS_US", [
  ["Alabama", "AL"],
  ["Alaska", "AK"],
  ["Arizona", "AZ"],
  ["Arkansas", "AR"],
  ["California", "CA"],
  ["Colorado", "CO"],
  ["Connecticut", "CT"],
  ["Delaware", "DE"],
  ["District of Columbia", "DC"],
  ["Florida", "FL"],
  ["Georgia", "GA"],
  ["Hawaii", "HI"],
  ["Idaho", "ID"],
  ["Illinois", "IL"],
  ["Indiana", "IN"],
  ["Iowa", "IA"],
  ["Kansas", "KS"],
  ["Kentucky", "KY"],
  ["Louisiana", "LA"],
  ["Maine", "ME"],
  ["Maryland", "MD"],
  ["Massachusetts", "MA"],
  ["Michigan", "MI"],
  ["Minnesota", "MN"],
  ["Mississippi", "MS"],
  ["Missouri", "MO"],
  ["Montana", "MT"],
  ["Nebraska", "NE"],
  ["Nevada", "NV"],
  ["New Hampshire", "NH"],
  ["New Jersey", "NJ"],
  ["New Mexico", "NM"],
  ["New York", "NY"],
  ["North Carolina", "NC"],
  ["North Dakota", "ND"],
  ["Ohio", "OH"],
  ["Oklahoma", "OK"],
  ["Oregon", "OR"],
  ["Pennsylvania", "PA"],
  ["Rhode Island", "RI"],
  ["South Carolina", "SC"],
  ["South Dakota", "SD"],
  ["Tennessee", "TN"],
  ["Texas", "TX"],
  ["Utah", "UT"],
  ["Vermont", "VT"],
  ["Virginia", "VA"],
  ["Washington", "WA"],
  ["West Virginia", "WV"],
  ["Wisconsin", "WI"],
  ["Wyoming", "WY"]
])

.value("TIMEZONES", [
  ["(GMT -12:00) International Dateline West", "-720"],
  ["(GMT -11:00) Midway Island, Samoa", "-660"],
  ["(GMT -10:00) Hawaii", "-600"],
  ["(GMT -09:00) Alaska", "-540"],
  ["(GMT -08:00) Pacific Time (US & Canada], Tijuana", "-480"],
  ["(GMT -07:00) Mountain Time (US & Canada)", "-420"],
  ["(GMT -06:00) Central Time (US & Canada)", "-360"],
  ["(GMT -05:00) Eastern Time (US & Canada)", "-300"],
  ["(GMT -04:00) Atlantic Time (Canada)", "-240"],
  ["(GMT -03:30) NewfoundLand Time (Canada)", "-210"],
  ["(GMT -03:00) Buenos Aires, Georgetown", "-180"],
  ["(GMT -02:00) Mid-Atlantic", "-120"],
  ["(GMT -01:00) Cape Verde Is.", "-60"],
  ["(GMT  00:00) Dublin, Edinburgh, Lisbon, London", "0"],
  ["(GMT +01:00) Amsterdam, Berlin, Bern, Rome, Paris, Stockholm, Vienna",
    "60"
  ],
  ["(GMT +02:00) Athens, Bucharest, Istanbul, Minsk", "120"],
  ["(GMT +03:00) Moscow, St. Petersburg, Volgograd", "180"],
  ["(GMT +03:30) Tehran", "210"],
  ["(GMT +04:00) Abu Dhabi, Muscat", "240"],
  ["(GMT +04:30) Kabul", "270"],
  ["(GMT +05:00) Islamabad, Karachi, Tashkent", "300"],
  ["(GMT +05:30) Calcutta, Chennai, Mumbai,New Delhi", "330"],
  ["(GMT +05:45) Kathmandu", "345"],
  ["(GMT +06:00) Astana,Almaty, Dhaka, Novosibirsk", "360"],
  ["(GMT +06:30) Rangoon (Yangon, Burma)", "390"],
  ["(GMT +07:00) Bangkok, Hanoi, Jakarta", "420"],
  ["(GMT +08:00) Beijing, Chongqing, Hong Kong, Urumqi", "480"],
  ["(GMT +09:00) Osaka, Sapporo, Tokyo", "540"],
  ["(GMT +09:30) Adelaide, Darwin", "570"],
  ["(GMT +10:00) Canberra, Melbourne, Sydney, Vladvostok", "600"],
  ["(GMT +11:00) Magadan, Solomon Is., New Caledonia", "660"],
  ["(GMT +12:00) Auckland, Fiji, Kamchatka, Marshall Is.", "720"],
  ["(GMT +13:00) Nuku'alofa", "780"],
]);
